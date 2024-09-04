const logrequest = (req, res, next) => {
    console.log('terjadi request ke path:',req.path)
    next()
}

module.exports = logrequest;

const errorHandler = (err,req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    
    res.status(statusCode)

    res.json({
        message: err.message,
        stack: Process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler,
}