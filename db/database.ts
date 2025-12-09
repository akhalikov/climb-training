import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabase("climb.db");

export function initDB() {
  db.transaction(tx => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY NOT NULL,
        date TEXT,
        type TEXT,
        description TEXT,
        completed INTEGER
      );
    `);
  });
}
