const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routes/userRouter');
const exerciseRouter = require('./routes/exerciseRouter');

//const connection = require('./dbconnection');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const URL = 'mongodb://localhost:27017/';
mongoose.connect(URL, { useNewUrlParser: true, useCreateIndex: true });
//userNewUrlParser = Mongodb nodejs driver rewrote the thing that mongodb url.

const conn = mongoose.connection;
conn.once('open', () => {
     console.log("MongoDB database connection established successfully..");
})

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/exercises', exerciseRouter)

app.listen(port, () => {
     console.log(`Server is listening on port: ${port}`);
})