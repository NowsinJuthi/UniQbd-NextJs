import express from "express";

import {
  changePasswordController,
  forgotPassword,
  getUserProfile,
  loginController,
  logoutController,
  registerController,
  resendOtpController,
  updateProfileController,
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
import { adminDashboardController, createOrderController, getAllOrdersController, getSingleOrderController, getUserOrdersController, OrdersStatusController } from "../controllers/orderController.js";
import auth from "../middlewares/auth.js";
import { createNoteController, deleteNoteController, getNotesController, getOrderNotesController, sendNotesToCustomerController, updateNoteController } from "../controllers/noteController.js";
import { approveReviewController, createReviewController, getAllReviewsController, getReviewsController, updateReviewController } from "../controllers/reviewController.js";




const router = express.Router();
router.get("/reviews/:productId", getReviewsController);
router.post("/reviews", createReviewController);
router.get("/admin/all", getAllReviewsController);
router.put("/approve/:id", approveReviewController);
router.put("/review/update/:id", updateReviewController);


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
  updateProductController
);

router.post("/product/filter", productFilterController);

router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

router.get("/search/:keyword", searchProductController);

router.get("/product-stats", productStatsController);


router.post("/order/create", auth, createOrderController);
router.get("/orders", getAllOrdersController);
router.get("/my-orders", auth, getUserOrdersController);
router.put("/order/status/:id",OrdersStatusController)
router.get("/order/:id", getSingleOrderController);

router.get("/admin", adminDashboardController)


router.post("/create-notes", auth, createNoteController);
router.get("/all-notes", auth, getNotesController);
router.delete("/delete-notes/:id", auth, deleteNoteController);
router.put("/update-notes/:id", auth, updateNoteController);
router.get("/order-notes/:orderId", auth, getOrderNotesController);

router.post(
  "/send-notes-to-customer",
  auth,
  sendNotesToCustomerController
);


router.get("/user", auth, getUserProfile);
router.put("/update-profile", auth, updateProfileController);
router.put("/change-password", auth, changePasswordController);



export default router;
