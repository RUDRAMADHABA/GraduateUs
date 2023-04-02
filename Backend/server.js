const express = require('express')
const passport = require('passport');
const dotenv = require("dotenv");
const colors = require("colors");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const { connect } = require('mongoose');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
var cors = require('cors')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

dotenv.config()
connectDB()
const app = express()

app.use(express.json()) //to accept JSON data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5000/'
}));

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [process.env.COOKIE_KEY] // encrypts the cookie in browser
}))

//app.use(session({ secret: "cats", resave: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send("API is running successfully")
})
app.use('/user', userRoutes)
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

app.use(notFound);
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`server started on port ${PORT}`.yellow.bold))