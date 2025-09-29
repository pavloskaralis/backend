const { PrismaClient } = require("../generated/prisma");;
const authService = require("../services/authService");
const prisma = new PrismaClient();

const authMiddleware = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) return res.sendStatus(401);

    const payload = await authService.verifyAccessToken(accessToken);
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });
    if (!user) return res.sendStatus(401);

    req.user = user;
    next();
  } catch {
    res.sendStatus(401);
  }
};

module.exports = authMiddleware;
