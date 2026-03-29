import sendEmailFun from "../config/sendEamil.js";
import userModel from "../models/usersModel.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";

export async function registerController(req, res) {
  try {
    let user;
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Provide email address and password",
        error: true,
        success: false,
      });
    }

    user = await userModel.findOne({ email, email });

    if (user) {
      return Response.json({
        message: "User alreay registerd with this email",
        error: true,
        success: false,
      });
    }
    const verifyEmailCode = Math.floor(
      100000 + Math.random() * 900000,
    ).toString();

    const salt = await bcryptjs.getSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    user = new userModel({
      email: email,
      password: hashPassword,
      name: name,
      otp: verifyEmailCode,
      verify_email: false,
      optExpires: Date.now() + 600000,
    });

    await user.save();

    await sendEmailFun({
      sendTo: email,
      subject: "Verify email from UniQbd",
      text: "",
      hrml: VerificationEmail(name, verifyEmailCode),
    });

    const token = jwt.sign(
      {
        email: user?.email,
        id: user?._id,
      },
      process.env.JSON_WEB_TOKEN_SECRET_KEY,
    );
    return res.status(200).json({
      success: false,
      error: false,
      message: "User registred successfully! Please verify ypur email",
      token: token,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

export async function verifyEmailController(req, res) {
  try {
    const { email, otp } = req.body;

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    const isCodeValid = user.opt === opt;
    const isNotExpired = user.optExpires > Date.now();

    if (isCodeValid && isNotExpired) {
      ((user.verify_email = true), (user.otp = null), (user.optExpires = null));
      await user.save();

      return res.status(200).json({
        message: "Email verified",
        error: false,
        success: true,
      });
    } else if (!isCodeValid) {
      return res.status(400).json({
        message: "Invailid OTP",
        error: true,
        success: false,
      });
    } else {
      return res.status(400).json({
        message: "OTP Expired",
        error: true,
        success: false,
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "User not register",
        error: true,
        success: false,
      });
    }
    if (user.status !== "Active") {
      return res.status(400).json({
        message: "Contact to admin",
        error: true,
        success: false,
      });
    }
    if (user?.verify_email !== true) {
      return res.status(400).json({
        message:
          "Your emnail is not verify yet please verify your email address",
        error: true,
        success: false,
      });
    }
    const checkPassword = await bcryptjs.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        message: "Check your password",
        error: true,
        success: false,
      });
    }

    const accessToken = await generateAccessToken(user?._id);
    const refreshToken = await generateRefreshToken(user?._id);

    const updateUser = await userModel.findByIdAndUpdate(user?._id, {
      last_login_date: new Date(),
    });

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.cookie("accessToken", accessToken, cookiesOption);
    res.cookie("refreshToken", refreshToken, cookiesOption);

    return res.json({
      message: "Login successfully",
      error: false,
      success: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

export async function logoutController(req, res) {
  try {
    const userId = req?.userId;

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };
    res.clearCookie("accessToken", cookiesOption);
    res.clearCookie("refreshToken", cookiesOption);

    const removeRefreshToken = await userModel.findByIdAndUpdate(userId, {
      refreshToken: "",
    });

    return res.json({
      message: "Logout successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

export async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "User not available",
        error: true,
        success: false,
      });
    } else {
      const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

      ((user.opt = verifyCode), (user.optExpires = Date.now() + 600000));

      await user.save();

      await sendEmailFun({
        sendTo: email,
        subject: "Verify OPT from UniQbd",
        text: "",
        html: VerificationEmail(user.name, verifyCode),
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

export async function verifyForgotPassword(req, res) {
  try {
    const { email, otp } = req.body;

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "User not found with this email",
        error: true,
        success: false,
      });
    }
    if (!email || !otp) {
      return res.status(400).json({
        message: "Provide required fileds email, otp",
        error: true,
        success: false,
      });
    }
    if (otp !== user.otp) {
      return res.status(400).json({
        message: "Invailid OTP",
        error: true,
        success: false,
      });
    }

    const currentTime = new Date().toString();
    if (user.optExpires < currentTime) {
      return res.status(400).json({
        message: "OTP is expired",
        error: true,
        success: false,
      });
    }

    ((user.otp = ""), (user.optExpires = ""), await user.save());

    return res.status(400).json({
      message: "Verify OTP Successfully",
      error: true,
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}

export async function changePasswordController(req, res) {
  try {
    const { email, newPassword, confirmPassword } = req.body;

    if (!email || !newPassword || !confirmPassword) {
      return res.status(400).json({
        error: true,
        success: false,
        message:
          "Provide required fildes email, new password and confirm password",
      });
    }

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "User not found with this email",
        error: true,
        success: false,
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "New password and confirm password must be samne",
        error: true,
        success: false,
      });
    }

    const salt = await bcryptjs.getSalt(10);
    const hashPassword = await bcryptjs.hash(confirmPassword, salt);

    user.password = hashPassword;

    await user.save();
    return res.status(200).json({
      message: "Password updated successfully",
      error: true,
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: error.message || error,
    });
  }
}
