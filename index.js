const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Wildbites server is running...');
});

/* ------------------------ MongoDB Code Here -------------------------------- */
/* ------------------------ MongoDB Code Here -------------------------------- */


app.listen(port, () => {
    console.log(`Wildbites server is running on port: ${port}`);
})