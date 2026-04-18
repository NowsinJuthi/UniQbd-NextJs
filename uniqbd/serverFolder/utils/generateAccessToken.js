import jwt from "jsonwebtoken";

const generateAccessToken = (userId) => {
  return jwt.sign(
    { 
      id: user._id,
      email: user.email,
      name: user.name,
    },
    process.env.SECRET_KEY_ACCESS_TOKEN,
    { expiresIn: "24h" }
  );
};

export default generateAccessToken;