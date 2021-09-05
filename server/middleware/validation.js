import { validationResult } from "express-validator";
import { errorResponse } from "../utility/utils.js";

export function validateErrors(req, res, next) {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return errorResponse(res, validationErrors.errors);
  }
  next();
}
