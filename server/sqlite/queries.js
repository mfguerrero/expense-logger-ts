//EXPENSE QUERIES
export const EXPENSES = `
  SELECT id, description, amount, date, comments
  FROM expenses
  WHERE user = ?;
  ORDER BY date, amount;
`;

export const EXPENSE = `
  SELECT id, user, description, amount, date, comments
  FROM expenses
  WHERE id = ?;
`;

export const INSERT_EXPENSE = `
  INSERT INTO expenses (id, user, description, amount, date, comments) 
  VALUES (null, ?, ?, ?, ?, ?);
`;

export const UPDATE_EXPENSE = `
  UPDATE expenses SET description = ?, amount = ?, date = ?, comments = ? 
  WHERE id = ?;
`;

export const REMOVE_EXPENSE = `
  DELETE FROM expenses
  WHERE id = ?;
`;

//AUTH QUERIES
export const IS_MAIL_REGISTERED = `
  SELECT COUNT(id)>0 as exist
  FROM users
  WHERE email = ?;
`;

export const USER_BY_EMAIL = `
  SELECT id, email, password
  FROM users
  WHERE email = ?;
`;

export const USER_BY_ID = `
  SELECT id, displayName, email
  FROM users
  WHERE id = ?;
`;

export const ADD_USER = `INSERT INTO users (id, displayName, email, password) 
  VALUES (null, ?, ?, ?);
`;

export const LAST_ID = "SELECT last_insert_rowid() as id";
