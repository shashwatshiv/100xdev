import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog/", blogRouter);
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
export default app;
