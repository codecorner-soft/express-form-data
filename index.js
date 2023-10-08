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

app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${cfg.port}`);
});