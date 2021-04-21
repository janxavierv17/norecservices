import Site from "../models/siteModel.js"
import asyncHandler from "express-async-handler"

// @desc     FETCH ALL SITES
// @route    GET /api/sites
// @access   Public
const getSites = asyncHandler(async (req, res) => {
    const sites = await Site.find({})
    res.json(sites)
})

// @desc     FETCH ALL SITES
// @route    GET /api/sites/:id
// @access   Public
const getSiteById = asyncHandler(async (req, res) => {
    // const site = sites.find(site => site.id === req.params.id)
    const site = await Site.findById(req.params.id)
    if (site) {
        res.json(site)
    } else {
        res.status(404)
        throw new Error("Site not found.")
    }
})

export {
    getSites,
    getSiteById
}