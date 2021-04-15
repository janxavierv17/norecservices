//**  */
const notFound = (req, res, next) => {
    const error = new Error(`This ${req.originalUrl} does not exist.`)
    res.status(404)
    next(error)
}
//** Shows a message if an error with Status code 200 occur. */
const errorHandler = (err, req, res, next) => {
    // if it's a server error
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    })
}

export { notFound, errorHandler }