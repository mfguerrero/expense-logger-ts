import { execFetch } from "./fetchUtil";

async function getAll() {
  const response = await execFetch("api/expenses");
  return response;
}

const fetchExpenses = {
  getAll,
};

export default fetchExpenses;
