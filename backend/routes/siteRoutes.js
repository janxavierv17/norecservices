import express from "express";
import { getSites, getSiteById } from "../controllers/siteController.js"
const router = express.Router();

router.route("/").get(getSites)
router.route("/:id").get(getSiteById)
export default router;