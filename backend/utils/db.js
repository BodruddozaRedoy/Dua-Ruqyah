const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Build the absolute path to the database file
const dbPath = path.join(__dirname, '../assets/dua_main.sqlite'); 

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening the database:', err);
  } else {
    console.log('Connected to the SQLite database');
  }
});

module.exports = db;
