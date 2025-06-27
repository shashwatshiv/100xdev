import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { sign, verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@shashwatshiv/medium-common";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
// Middleware
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
// Routes

//create blog
blogRouter.post("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  const authorId = Number(c.get("userId"));
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid Input ",
    });
  }
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId,
      },
    });
    return c.json({
      message: "Blog posted",
      Userid: authorId,
      postId: post.id,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      error: "Error Posting the Blog",
    });
  }
});

//update blog
blogRouter.put("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Invalid Input ",
    });
  }
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
blogRouter.get("/bulk", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const blog = await prisma.post.findMany();
  return c.json({ blog });
});

blogRouter.get("/:id", async (c) => {
  const postId = Number(c.req.param("id"));
  const prisma = getPrisma(c.env.DATABASE_URL);
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    return c.json({
      post,
      id: postId,
    });
  } catch (error) {
    c.status(404);
    return c.json({
      error: "Post not found",
    });
  }
});
