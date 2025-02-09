import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.use(
  serveStatic({
    root: "static",
    precompressed: true,
    onFound: (localPath, context) => {
      const { res } = context;
    },
  })
);

if (process.env["TEST"] !== "test") {
  serve({
    fetch: app.fetch,
  });
  console.info(`Server is running on http://localhost:3000`);
}

export default app;
