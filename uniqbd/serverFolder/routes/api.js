import express from "express";

import {
  changePasswordController,
  forgotPassword,
  loginController,
  logoutController,
  registerController,
  resendOtpController,
  verifyEmailController,
  verifyForgotPassword,
} from "../controllers/userController.js";
import {
  getHomeSliderImages,
  homeSliderController,
  homeSliderDeleteController,
} from "../controllers/homeSliderController.js";
import { upload } from "../middlewares/multer.js";
import {
  CreatecategoryController,
  DeletecategoryController,
  GetcategoryController,
  UpdatecategoryController,
} from "../controllers/categoryController.js";
import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  productBgPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchProductController,
  productStatsController,
} from "../controllers/productController.js";
import { createOrderController } from "../controllers/orderController.js";
import auth from "../middlewares/auth.js";



const router = express.Router();

router.post("/register", registerController);
router.post("/verifyEmail", verifyEmailController);
router.post("/login", loginController);
router.get("/logout", logoutController);
router.post("/forgot-password", forgotPassword);
router.post("/verify-forgot-password-otp", verifyForgotPassword);
router.post("/forgot-password/change-password", changePasswordController);
router.post("/resend-otp", resendOtpController);
router.post("/home-slider", upload.array("images", 10), homeSliderController);
router.get("/home-slider/images", getHomeSliderImages);
router.delete("/home-slider/:filename", homeSliderDeleteController);

router.post("/category", CreatecategoryController);
router.get("/category", GetcategoryController);
router.delete("/category/:id", DeletecategoryController);
router.put("/category/:id", UpdatecategoryController);

router.post(
  "/product",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "bgPhoto", maxCount: 1 },
  ]),
  createProductController,
);

router.get("/product", getProductController);

router.get("/product/:slug", getSingleProductController);

router.get("/product/photo/:id", productPhotoController);

router.get("/product/bg-photo/:id", productBgPhotoController);

router.delete("/product/:id", deleteProductController);

router.put(
  "/product/:id",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "bgPhoto", maxCount: 1 },
  ]),
  updateProductController,
);

router.post("/product/filter", productFilterController);

router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

router.get("/search/:keyword", searchProductController);

router.get("/product-stats", productStatsController);


router.post("/order/create", auth, createOrderController);
export default router;
