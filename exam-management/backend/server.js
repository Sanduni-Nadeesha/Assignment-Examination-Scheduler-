const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const cors = require('cors')

// Inport Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

// connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, (err, db) => {
    if(err) throw err;
    console.log("Database connected!");
    // db.close();
});

//Middleware
app.use(express.json());

// cors
app.use(cors());


// Rout Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


app.listen(3000, () => console.log('Server Up and running'))