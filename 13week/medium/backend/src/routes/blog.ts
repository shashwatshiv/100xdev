import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { sign, verify } from "hono/jwt";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
blogRouter.use("/*", async (c, next) => {
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
      error: "Unauthorized Access/Not Logged In",
    });
  }
  c.set("userId", String(payload.id));
  await next();
});

blogRouter.post("/api/v1/blog", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(c.get("userId")),
      },
    });
    return c.json({
      message: "Blog posted",
    });
  } catch (error) {
    c.status(403);
    return c.json({
      error: "Error Posting the Blog",
    });
  }
});
blogRouter.put("/api/v1/blog", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  try {
    const put = await prisma.post.update({
      where: { id: body.id },
      data: { title: body.title, content: body.content },
    });
    return c.json({ success: "Post updated" });
  } catch (error) {
    c.status(411);
    return c.json({
      error: "Error updating your post",
    });
  }
});
blogRouter.get("/api/v1/blog/:id", (c) => {});
blogRouter.get("api/v1/blog/bulk", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const blog = await prisma.post.findMany();
  return c.json(blog);
});
