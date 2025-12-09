import { v4 as uuid } from "uuid";
import { db } from "../../db/database";

export const addSession = (date, type) =>
  new Promise((resolve) => {
    const id = uuid();
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO sessions (id, date, type, completed) VALUES (?, ?, ?, ?)",
        [id, date, type, 0],
        () => resolve(id)
      );
    });
  });

export const getSessionsForWeek = (start, end) =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM sessions WHERE date BETWEEN ? AND ?",
        [start, end],
        (_, { rows }) => resolve(rows._array)
      );
    });
  });
