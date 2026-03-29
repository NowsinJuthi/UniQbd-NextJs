import express from 'express'

import { changePasswordController, forgotPassword, loginController, logoutController, registerController, verifyEmailController, verifyForgotPassword } from "../controllers/userController.js";
const router = express.Router();

router.post('/register',registerController);
router.post('/verifyEmail',verifyEmailController);
router.post('/login',loginController);
router.get('/logout',logoutController);
router.post('/forgot-password',forgotPassword);
router.post('/verify-forgot-password-otp',verifyForgotPassword);
router.post('/forgot-password/change-password',changePasswordController);

export default router;