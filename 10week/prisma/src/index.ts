import { User, Todo, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUser(
  email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password,
    },
    select: {
      email: true,
      password: true,
    },
  });
  console.log(res);
}
insertUser("shah@gmaggild.com", "sha", "shiv", "12345678");
