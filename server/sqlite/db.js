import sqlite3 from "sqlite3";
import config from "config";
import {
  ADD_USER,
  EXPENSE,
  EXPENSES,
  INSERT_EXPENSE,
  REMOVE_EXPENSE,
  IS_MAIL_REGISTERED,
  LAST_ID,
  UPDATE_EXPENSE,
  USER_BY_EMAIL,
  USER_BY_ID,
} from "./queries.js";

const dbPath = config.get("DB.path");

export const getExpenses = (userId) => {
  const data = [];
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath);
    db.all(EXPENSES, [userId], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        rows.forEach((row) => {
          const { id, description, amount, date, comments } = row;
          data.push({ id, description, amount, date, comments });
        });
        resolve(data);
      }
    });
    db.close();
  });
};

export const getExpense = (id) => {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath);
    db.get(EXPENSE, [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
    db.close();
  });
};

export const addExpense = (user, description, amount, date, comments) => {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath);
    db.run(INSERT_EXPENSE, [user, description, amount, date, comments], (err) => {
      if (err) reject(err);
    }).get(LAST_ID, (err, row) => {
      if (err) {
        reject(err);
      } else {
        const { id } = row;
        resolve({ id, user, description, amount, date, comments });
      }
    });
    db.close();
  });
};

export const updateExpense = (id, description, amount, date, comments) => {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath);
    db.run(UPDATE_EXPENSE, [description, amount, date, comments, id], (err) => {
      if (err) reject(err);
      else resolve(true);
    });
    db.close();
  });
};

export const removeExpense = (id) => {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath);
    db.run(REMOVE_EXPENSE, [id], (err) => {
      if (err) reject(err);
      else resolve(true);
    });
    db.close();
  });
};

// AUTH
export const isEmailRegistered = (email) => {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath);
    db.get(IS_MAIL_REGISTERED, [email], (err, row) => {
      if (err) {
        reject(err);
      } else {
        const { exist } = row;
        resolve(!!exist);
      }
    });
    db.close();
  });
};

export const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath);
    db.get(USER_BY_EMAIL, [email], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
    db.close();
  });
};

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath);
    db.get(USER_BY_ID, [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
    db.close();
  });
};

export const insertUser = (displayName, email, password) => {
  return new Promise((resolve, reject) => {
    let db = new sqlite3.Database(dbPath);
    db.run(ADD_USER, [displayName, email, password], (err) => {
      if (err) reject(err);
    }).get(LAST_ID, (err, row) => {
      if (err) {
        reject(err);
      } else {
        const { id } = row;
        resolve(id);
      }
    });
    db.close();
  });
};
