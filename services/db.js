const sqlite = require('better-sqlite3');
const path = require('path');
const db = sqlite(path.resolve(__dirname, '../db/quotes.db'));

function query(sql, params) {
  return db.prepare(sql).all(params);
}

module.exports = {
  query
}