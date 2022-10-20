const createError = (statusCode, message) => {
    const error = new Error(message);
    error.status = statusCode;
    return error;
};
const errorHandling = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Erro interno do servidor.";
    res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
};
export { createError, errorHandling };