import userModel from "../models/usersModel.js";

const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role !== "ADMIN") {
      return res.status(403).json({
        message: "Admin access only",
        success: false,
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export default isAdmin;