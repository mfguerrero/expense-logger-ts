// module imports
import express from "express";
import { auth } from "../middleware/auth.js";

import {
  retrieveExpenses,
  retrieveExpense,
  deleteExpense,
  insertExpense,
  editExpense,
} from "../controllers/expenses.js";

const router = express.Router();

router.route("/").get(auth, retrieveExpenses).post(auth, insertExpense);
router.route("/:id").get(auth, retrieveExpense).patch(auth, editExpense).delete(auth, deleteExpense);

export default router;
