import { execFetch } from "./fetchUtil";
import { IExpense } from "../types/inferfaces";

async function getAll() {
  const response = await execFetch("api/expenses");
  return response;
}

async function save(expense: Partial<IExpense>) {
  const response = await execFetch(
    `api/expenses${expense.id ? `/${expense.id}` : ""}`,
    expense.id ? "put" : "post",
    expense
  );
  return response;
}

async function remove(id: number) {
  const response = await execFetch(`api/expenses/${id}`, "delete");
  return response;
}

const fetchExpenses = {
  getAll,
  save,
  remove,
};

export default fetchExpenses;
