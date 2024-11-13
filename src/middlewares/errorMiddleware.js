import { NODE_ENV } from "../config/secrets.js";
import AppError from "../utils/AppError.js";

export const notFoundError = (req, res, next) => {
  next(new AppError(404, `Route ${req.originalUrl} not found`));
};

export const globalError = (err, req, res, next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: err.message,
    stack: NODE_ENV === "development" ? err.stack : null,
  });
};
