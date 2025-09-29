const express = require("express")
const router = express.Router()
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient()
const authService = require("../services/authService")
const authMiddleware = require("../middlewares/authMiddleware")
const userService = require("../services/userService")

router.post("/register", async (req, res) => {
  const { displayName, email, password } = req.body
  const hashedPassword = await authService.hashPassword(password)

  const user = await userService.createUser({
    displayName,
    email,
    password: hashedPassword,
  })

  const accessToken = await authService.encryptAccessToken(user.id)
  const refreshToken = await authService.signRefreshToken(user.id)
  authService.setCookies(res, accessToken, refreshToken)

  res.sendStatus(200)
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return res.sendStatus(401)

  const valid = await authService.comparePassword(password, user.password)
  if (!valid) return res.sendStatus(401)

  const accessToken = await authService.encryptAccessToken(user.id)
  const refreshToken = await authService.signRefreshToken(user.id)
  authService.setCookies(res, accessToken, refreshToken)

  res.sendStatus(200)
})

router.post("/refresh", async (req, res) => {
  try {
    const { refreshToken } = req.cookies
    if (!refreshToken) return res.sendStatus(401)

    const payload = authService.verifyRefreshToken(refreshToken)
    const tokenExists = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
    })
    if (!tokenExists) return res.sendStatus(401)

    const accessToken = await authService.encryptAccessToken(payload.userId)
    const newRefreshToken = await authService.signRefreshToken(payload.userId)

    authService.setCookies(res, accessToken, newRefreshToken)
    res.sendStatus(200)
  } catch {
    res.sendStatus(401)
  }
})

router.post("/logout", authMiddleware, async (req, res) => {
  try {
    const { refreshToken } = req.cookies
    if (refreshToken) await authService.revokeRefreshToken(refreshToken)

    authService.clearCookies(res)
    res.sendStatus(200)
  } catch {
    res.sendStatus(500)
  }
})

module.exports = router
