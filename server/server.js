import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import https from "https";
import http from "http";
import { Server } from "socket.io";

config();

const PORT = process.env.PORT || 8000;
const app = express();
const mongoURI = process.env.MONGO_URI;

// TODO: Handle the https and http
// const server = https.createServer({}, app);
// const io = new Server();

// TODO: Study each line! and design the data structure
mongoose.set("strictQuery", false);
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(`Database Connection failed: ${err}`);
  })
  .finally(() => {
    app.listen(PORT, () => {
      console.log("Server is listening at PORT ", PORT);
    });
  });
