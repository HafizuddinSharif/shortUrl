const express = require('express');

const connectDB = require('./config/db');

const urls = require('./routes/api/urls')

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/urls', urls)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
