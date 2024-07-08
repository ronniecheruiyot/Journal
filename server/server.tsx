const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000 //process.env.PORT || 3000;
app.use(bodyParser.json());

// API routes 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/data", (req, res) => {
    const data = {
      message: "Hello from the API!"
    };
    res.json(data);
  });