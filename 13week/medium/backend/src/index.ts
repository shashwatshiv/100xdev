import { Hono } from "hono";
import { getPrisma } from "./prismaFunction";
import { sign, verify } from "hono/jwt";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
// middleware
app.use("/api/v1/blog/*", async (c, next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({
      error: "Unauthorized Access",
    });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({
      error: "Unauthorized Access",
    });
  }
  c.set("userId", String(payload.id));
  await next();
});
// get route
app.get("/", (c) => {
  return c.text("Hello Hono!");
});
// signup route
app.post("/api/v1/user/signup", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt: token,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      error: "Invalid request/ user already exists",
    });
  }
});

app.post("/api/v1/user/signin", async (c) => {
  const body = await c.req.json();
  const prisma = getPrisma(c.env.DATABASE_URL);
  const user = await prisma.user.findUnique({
    where: { email: body.email, password: body.password },
  });
  if (!user) {
    c.status(403);
    return c.json({
      error: "user not found",
    });
  }
  const token = sign({ id: user.id }, c.env.JWT_SECRET);
});

app.post("/api/v1/blog", (c) => {});
app.put("/api/v1/blog", (c) => {});
app.get("/api/v1/blog/:id", (c) => {});
app.get("api/v1/blog/bulk", (c) => {});
export default app;
