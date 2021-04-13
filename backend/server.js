const express = require("express")
const app = express();
const sites = require("./data/sites.js")

app.use(express.static(__dirname + "/public"));
app.use("/public", express.static("images"))
app.get("/", (req, res) => {
    res.send("API is running ...")
})

app.get("/api/sites", (req, res) => {
    res.json(sites)
})

app.get("/api/sites/:id", (req, res) => {
    const site = sites.find(site => site.id === req.params.id)
    res.json(site)
})



app.listen(5000, console.log("Server running on port 5000"))