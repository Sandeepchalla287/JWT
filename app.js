const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const {MONGOURI} = require('./keys');

const app = express();

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
mongoose.connection.on('connected', () => {
    console.log("connected to database");
    });
mongoose.connection.on('error', (err) => {
    console.log("error connecting",err);
    });

require('./models/user');

app.use(express.json());
app.use(require('./routes/auth'));


app.listen(PORT, ()=>{
    console.log("server started at",PORT);
});