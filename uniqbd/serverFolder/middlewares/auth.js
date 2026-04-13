import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    console.log("AUTH HIT");

    const token =
      req.cookies?.accessToken ||
      req.headers?.authorization?.replace("Bearer ", "");

    console.log("COOKIE:", req.cookies);
    console.log("TOKEN:", token);

    if (!token) {
      return res.status(401).json({ message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default auth;