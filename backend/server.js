import colors from "colors"
import { dirname } from "path"
import { fileURLToPath } from "url"
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/dbConnection.js"
import siteRoutes from "./routes/siteRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
const app = express();
// When using ES6 modules, these two variables are required to get the path of the images.
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config();
connectDB();
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static("images"))

// Allow us to accept json data in the body
app.use(express.json())

// Routes
app.get("/", (req, res) => {
    res.send("API is running ...")
})
app.use("/api/sites", siteRoutes)
app.use("/api/users", userRoutes)

// Error Handler
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
const DEVELOPMENT = process.env.NODE_ENV
app.listen(PORT, () => console.log(`**** Server is running in ${DEVELOPMENT} on port ${PORT} ****`.brightBlue))