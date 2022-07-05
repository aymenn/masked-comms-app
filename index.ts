import cors from "cors";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import client from "./src/services/twilio.service";

client.messages.list();
const PORT = process.env.PORT || 3000;

const app = express();

/****************************************************
 Apply Middleware
****************************************************/
if (app.get("env") === "development") {
  app.use(cors({ origin: "*" }));
  app.use(logger("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/****************************************************
 Apply Routes
****************************************************/
app.use((req, res, next) => next(createError(404))); // throw 404 if route not found

/****************************************************
 Start Server
****************************************************/
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});