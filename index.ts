import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import {
  getFromCache,
  redisConnect,
  redisDisconnect,
  setToCache,
} from "./cache";

redisConnect();

const app = express();
const port = 3000;

app.use(bodyParser.text());

app.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  let value = await getFromCache(req.body);
  if (!value) {
    value = uuid();
    setToCache(req.body, value);
  }
  res.send(value);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

let shuttingDown = false;
async function cleanup() {
  if (shuttingDown) return;
  shuttingDown = true;

  console.log("Shutting down gracefully");

  await redisDisconnect();

  process.exit(0);
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
