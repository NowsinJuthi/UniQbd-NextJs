import jwt from "jsonwebtoken";

const generateAccessToken = async (userId) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    process.env.SECRET_KEY_ACCESS_TOKEN,
    {
      expiresIn: "24h",
    },
  );
  return token;
};

export default generateAccessToken;
