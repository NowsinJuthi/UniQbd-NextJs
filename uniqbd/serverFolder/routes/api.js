import express from 'express'

import { changePasswordController, forgotPassword, loginController, logoutController, registerController, resendOtpController, verifyEmailController, verifyForgotPassword } from "../controllers/userController.js";
import { getHomeSliderImages, homeSliderController, homeSliderDeleteController } from '../controllers/homeSliderController.js';
import { upload } from '../middlewares/multer.js';
import { CreatecategoryController, DeletecategoryController, GetcategoryController, UpdatecategoryController } from '../controllers/categoryController.js';




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
router.get("/home-slider/images", getHomeSliderImages);
router.delete("/home-slider/:filename", homeSliderDeleteController);

router.post("/category", CreatecategoryController);
router.get("/category", GetcategoryController);     
router.delete("/category/:id", DeletecategoryController); 
router.put("/category/:id", UpdatecategoryController);

export default router;