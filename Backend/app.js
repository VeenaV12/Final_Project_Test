const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config();
const MongoStore = require('connect-mongo');





async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to DB');
    } catch (error) {
        console.error('Error connecting to DB:', error);
        process.exit(1); // Exit process on connection error
    }
}

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('Uploads'));





/*app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));*/


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL,
        dbName: 'studentDB', // Specify the database name if different from default
        ttl: 24 * 60 * 60, // Time-to-live (in seconds), defaults to 14 days
        autoRemove: 'interval', // Automatically remove expired sessions
        autoRemoveInterval: 10, // Interval in minutes to check and remove expired sessions
      }),
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: 'strict',
      },
  }));



const testRouter = require('./Routers/testRoute');

app.use('/', testRouter);

const port = process.env.PORT || 3000; // Fallback to port 3000 if PORT is not set in environment variables

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

main();
