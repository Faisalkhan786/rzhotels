var _ = require('lodash');
const express = require("express");
const app = express();
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000

const bodyParser = require('body-parser');
app.use(bodyParser.json());

console.log("server file is running");
//this is the way that we can directly call arrow function
(() => { console.log("This is arrow function"); })();

app.get("/", (req, res) => {
    res.send("Welcome to our Hotel");
})

//Import routes item
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(PORT, () => {
    console.log("listening on port 3000");
});