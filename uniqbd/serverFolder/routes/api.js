import express from 'express'

import { changePasswordController, forgotPassword, loginController, logoutController, registerController, resendOtpController, verifyEmailController, verifyForgotPassword } from "../controllers/userController.js";
import { homeSliderController } from '../controllers/homeSliderController.js';
import { upload } from '../middlewares/multer.js';




const router = express.Router();

router.post('/register',registerController);
router.post('/verifyEmail',verifyEmailController);
router.post('/login',loginController);
router.get('/logout',logoutController);
router.post('/forgot-password',forgotPassword);
router.post('/verify-forgot-password-otp',verifyForgotPassword);
router.post('/forgot-password/change-password',changePasswordController);
router.post('/resend-otp',resendOtpController);
router.post("/home-slider", upload.array("images", 10), homeSliderController);

export default router;