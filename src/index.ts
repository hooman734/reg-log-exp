import express;
const account = require('./routes/account');

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'pug');
app.set('views', 'src/views');


app.use('/account', account);


app.use((req, res) => {
    res.render('index.pug');
});

app.listen(port, () => {
    console.log(`Serving on http://localhost:${port}`);
});