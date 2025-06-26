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
app.route("/api/v1/blog", blogRouter);
// middleware
// get route
app.get("/", (c) => {
  return c.text("Hello Hono!");
});
// signup route
export default app;
