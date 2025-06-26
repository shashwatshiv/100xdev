import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { sign } from "hono/jwt";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
blogRouter.post("/api/v1/blog", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: "sdf",
    },
  });
});
blogRouter.put("/api/v1/blog", (c) => {});
blogRouter.get("/api/v1/blog/:id", (c) => {});
blogRouter.get("api/v1/blog/bulk", (c) => {});
