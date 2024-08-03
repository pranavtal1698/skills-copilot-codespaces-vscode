// Create Web Server
// npm install express
// npm install body-parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a comment
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  console.log(`Comment: ${comment}`);
  res.send(`Comment: ${comment}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Test the server
// curl -X POST http://localhost:3000/comment -d "comment=Hello"
// curl -X POST http://localhost:3000/comment -d "comment=World"