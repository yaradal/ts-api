import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { v4 as uuid } from "uuid";

const app = express();
const port = 3000;

app.use(bodyParser.text());

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  const id = uuid();
  res.send(id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
