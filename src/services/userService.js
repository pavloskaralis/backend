const { PrismaClient, Role } = require("../generated/prisma")
const prisma = new PrismaClient()

exports.createUser = async ({ displayName, email, password }) => {
  const user = await prisma.user.create({
    data: {
      displayName,
      email,
      password,
      role: Role.MEMBER,
    },
  })
  return user
}