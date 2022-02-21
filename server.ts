//@ts-ignore
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (res, req) => {
    return handle(res, req);
  });

  const PORT = process.env.NEXT_PUBLIC_PORT || 3001;
  server.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`> Ready on localhost:${PORT}`);
  });
});
