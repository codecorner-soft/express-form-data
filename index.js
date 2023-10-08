// import Express.js
import express from 'express';

// config
const cfg = {
    port: process.env.PRT || 3000
};

// Initilize express
const app = express();

// use EJS templates
app.set('view engine', 'ejs');
app.set('views', 'views');

// render form
app.get('/', (req, res) => {
    res.render('form', {
        title: 'Parse HTTP Get data',
        data: req.query
    });
});

app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${cfg.port}`);
});