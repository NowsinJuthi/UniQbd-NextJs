import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ConnectDb } from "./config/connectDb.js";
import router from "./routes/api.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());


app.use("/api/v1", router);


app.get("/", (req, res) => {
  res.json({ status: "API working ✅" });
});

const startServer = async () => {
  try {
    await ConnectDb();
    console.log("✅ MongoDB Connected");

    
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Server failed to start:", err);
    process.exit(1);
  }
};

startServer();
