const express = require('express');
const db = require('./utils/db');
const cors = require('cors');
const app = express()
const port = 5000

// middleware  
app.use(express.json())
app.use(cors())

// api routes 

app.get("/", (req, res) => {
  res.json("Server running")
} )

app.get('/api/categories', (req, res) => {
    db.all('SELECT * FROM category', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ categories: rows });
    });
  });

  app.get('/api/subcategories/:categoryId', (req, res) => {
    const { categoryId } = req.params;
    db.all('SELECT * FROM sub_category WHERE cat_id = ?', [categoryId], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ subcategories: rows });
    });
  });
  
  app.get('/api/dua/:subcategoryId', (req, res) => {
    const { subcategoryId } = req.params;
    db.all('SELECT * FROM dua WHERE subcat_id = ?', [subcategoryId], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ dua: rows });
    });
  });

  // Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });