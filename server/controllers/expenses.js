import { getExpenses, getExpense, addExpense, updateExpense, removeExpense } from "../sqlite/db.js";
import { errorResponse, successResponse } from "../utility/utils.js";

export const retrieveExpenses = async (req, res) => {
  try {
    const data = await getExpenses(req.user.id);
    return successResponse(res, data);
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const retrieveExpense = async (req, res) => {
  try {
    const data = await getExpense(req.params.id);
    return successResponse(res, data);
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const insertExpense = async (req, res) => {
  const { description, amount, date, comments } = req.body;
  try {
    const data = await addExpense(req.user.id, description, amount, date, comments);
    return successResponse(res, data);
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const editExpense = async (req, res) => {
  const { description, amount, date, comments } = req.body;
  try {
    const data = await updateExpense(req.params.id, description, amount, date, comments);
    return successResponse(res, data);
  } catch (error) {
    return errorResponse(res, error);
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const data = await removeExpense(req.params.id);
    return successResponse(res, data);
  } catch (error) {
    return errorResponse(res, error);
  }
};
