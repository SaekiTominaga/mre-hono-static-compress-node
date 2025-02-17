import { strict as assert } from "node:assert";
import { test } from "node:test";
import app from "./app2.js";

await test("called `c.res`", async (t) => {
  await t.test("non compress only", async () => {
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

  await t.test("with compressed", async () => {
    const response = await app.request("with-compressed.html", {
      headers: {
        "Accept-Encoding": "br",
      },
    });

    assert.equal(
      response.headers.get("Content-Type"),
      "text/html; charset=utf-8" // test failed!
    );
  });
});
