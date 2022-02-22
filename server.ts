//@ts-ignore
const express = require("express");
const next = require("next");
const mongoose = require("mongoose");

const CONSTANTS = {
  MONGO_USER: process.env.NEXT_PUBLIC_MONGO_USER,
  MONGO_PWD: process.env.NEXT_PUBLIC_MONGO_PWD,
  MONGO_DBNAME: process.env.NEXT_PUBLIC_MONGO_DBNAME,
};

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const { MONGO_USER, MONGO_PWD, MONGO_DBNAME } = CONSTANTS;

  mongoose.connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@cluster0.d8zki.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`,
    { keepAlive: true, keepAliveInitialDelay: 300000 }
  );

  server.all("*", (res, req) => {
    return handle(res, req);
  });

  mongoose.connection.on("connected", () => {
    console.log("Connect Success");
  });

  mongoose.connection.on("error", (error) => {
    console.log("error", error);
  });

  const PORT = process.env.NEXT_PUBLIC_PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`> Ready on localhost:${PORT}`);
  });
});
