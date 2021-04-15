import express from "express";
import Site from "../models/siteModel.js"
import asyncHandler from "express-async-handler"
const router = express.Router();

// @desc     FETCH ALL SITES
// @route    GET /api/sites
// @access   Public
router.get("/", asyncHandler(async (req, res) => {
    const sites = await Site.find({})
    res.json(sites)
}))


// @desc     FETCH SINGLE SITES
// @route    GET /api/sites/:id
// @access   Public
router.get("/:id", asyncHandler(async (req, res) => {
    // const site = sites.find(site => site.id === req.params.id)
    const site = await Site.findById(req.params.id)
    if (site) {
        res.json(site)
    } else {
        res.status(404)
        throw new Error("Site not found.")
    }
}))

export default router;