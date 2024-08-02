import express from 'express';
import {
    registerUser,
    loginUser,
    logoutUser,
    getAllUsers,
    getUserDetails,
    forgotPassword,
    resetPassword,
    getUserProfile,
    updateProfile,
    updateUserDetails,
    deleteUser,
    updatePassword, 
    uploadAvatar
} from "../controllers/authControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/me/upload_avatar").put(isAuthenticatedUser, uploadAvatar)

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers);
router.route("/admin/users/:id").get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails);
router.route("/admin/users/:id").put(isAuthenticatedUser, authorizeRoles('admin'), updateUserDetails);
router.route("/admin/users/:id").delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

export default router;