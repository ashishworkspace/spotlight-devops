import * as express from "express";
import { Request, Response } from "express";
import { json } from "body-parser";
import * as cors from "cors";

const app = express();
app.use(json());
app.use(cors());

const portNumber = process.env.SERVER_PORT || 5000;

// customer2 route
app.get("/customer2", (request: Request, response: Response) => {
  response.status(200).send({
    message: "Hey this is => Customer 2!",
  });
});

app.all("*", (request: Request, response: Response) => {
  response.status(400).send("Invalid Request");
});

app.listen(portNumber, () => {
  console.log(`Listen on port: ${portNumber}`);
});
