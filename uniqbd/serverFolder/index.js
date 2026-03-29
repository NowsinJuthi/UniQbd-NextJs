import express, { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import router from "./routes/api.js";



dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Next.js build / frontend

// API routes
app.get("/api/hello", (req, res) => res.json({ message: "Hello" }));

// Catch-all route for frontend (React/Next.js)
app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use('/api/v1', router)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));