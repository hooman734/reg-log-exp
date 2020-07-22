const express = require('express');
const account = require('./routes/api/account');

const port = process.env.PORT || 3000;

const app = express();


app.use('/api/account', account);


app.use((req, res) => {
    res.send(`Welcome`);
});

app.listen(port, () => {
    console.log(`Serving on http://localhost:${port}`);
});