import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { logOutUser, loginUser, registerUser} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/register").post(registerUser)

//secure routes
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT, logOutUser)

export default router