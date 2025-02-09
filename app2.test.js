import { strict as assert } from "node:assert";
import { test } from "node:test";
import app from "./app2.js";

await test("non compress only", async () => {
  const response = await app.request("non-compress-only.html", {
    headers: {
      "Accept-Encoding": "br",
    },
  });

  assert.equal(
    response.headers.get("Content-Type"),
    "text/html; charset=utf-8"
  );
});

await test("width compressed", async () => {
  const response = await app.request("width-compressed.html", {
    headers: {
      "Accept-Encoding": "br",
    },
  });

  assert.equal(
    response.headers.get("Content-Type"),
    "text/html; charset=utf-8" // test failed!
  );
});
