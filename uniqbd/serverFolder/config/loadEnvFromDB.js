import tokenModel from "../models/tokenModel.js";

export const loadEnvFromDB = async () => {
  const config = await tokenModel.findOne();

  if (!config) {
    throw new Error("No config found in MongoDB");
  }

  process.env.PORT = config.PORT;
  process.env.MONGODB_URI = config.MONGODB_URI;
  process.env.ACCESS_TOKEN_SECRET = config.ACCESS_TOKEN_SECRET;
  process.env.REFRESH_TOKEN_SECRET = config.REFRESH_TOKEN_SECRET;
  process.env.JWT_SECRET = config.JWT_SECRET;

  console.log("✅ ENV loaded from MongoDB");
};