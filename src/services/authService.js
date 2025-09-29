require("dotenv").config();
const jose = require("node-jose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const redisClient = require("../../redis/client");

const ACCESS_EXPIRES = 15 * 60 * 1000;
const REFRESH_EXPIRES = 7 * 24 * 60 * 60 * 1000;

const keyStorePromise = jose.JWK.createKey("oct", 256, {
  use: "enc",
  k: Buffer.from(process.env.JWT_SECRET, "utf8").toString("base64"),
});

exports.hashPassword = async (password) => bcrypt.hash(password, 10);
exports.comparePassword = async (password, hash) =>
  bcrypt.compare(password, hash);

exports.encryptAccessToken = async (userId) => {
  const key = await keyStorePromise;
  const payload = JSON.stringify({
    userId,
    exp: Math.floor(Date.now() / 1000) + ACCESS_EXPIRES / 1000,
  });
  return jose.JWE.createEncrypt({ format: "compact" }, key)
    .update(payload)
    .final();
};

exports.verifyAccessToken = async (token) => {
  const key = await keyStorePromise;
  const decrypted = await jose.JWE.createDecrypt(key).decrypt(token);
  const payload = JSON.parse(decrypted.plaintext.toString());
  if (payload.exp * 1000 < Date.now()) throw new Error("Token expired");
  return payload;
};

exports.signRefreshToken = async (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
  await redisClient.set(`refreshToken:${userId}`, token, {
    PX: REFRESH_EXPIRES,
  });
  return token;
};

exports.verifyRefreshToken = async (token) => {
  const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  const storedToken = await redisClient.get(`refreshToken:${payload.userId}`);
  if (!storedToken || storedToken !== token) throw new Error("Invalid refresh token");
  return payload;
};

exports.revokeRefreshToken = async (token) => {
  const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  await redisClient.del(`refreshToken:${payload.userId}`);
};

exports.setCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: ACCESS_EXPIRES,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: REFRESH_EXPIRES,
  });
};

exports.clearCookies = (res) => {
  res.clearCookie("accessToken", { httpOnly: true, sameSite: "Strict" });
  res.clearCookie("refreshToken", { httpOnly: true, sameSite: "Strict" });
};
