import express from "express";
import { rateLimit } from "express-rate-limit";
import axios from "axios";
import cors from "cors";
import { pinoHttp } from "pino-http";
import logger from "./utils/logger";

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(pinoHttp({ logger }));

app.use(cors());

app.use(limiter);

app.get("/me", async (req, res) => {
  const now = new Date();
  const user = {
    email: "Jesseekoh@outlook.com",
    name: "Jesse Ekoh-Ordan",
    stack: "Node.js/Express",
  };

  let catFact: string;
  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    catFact = response.data.fact;
  } catch (apiError) {
    logger.warn("Cat Facts API error", apiError);
    catFact =
      "Cats' hearing stops at 65 khz (kilohertz); humans' hearing stops at 20 khz.";
  }

  res.status(200).json({
    status: "success",
    user,
    timestamp: now.toISOString(),
    fact: catFact,
  });
});

export default app;
