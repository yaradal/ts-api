import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { getFromCache, setToCache } from "./cache";

const app = express();
const port = 3000;

app.use(bodyParser.text());

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  let value = getFromCache(req.body);
  if (!value) {
    value = uuid();
    setToCache(req.body, value);
  }
  res.send(value);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
