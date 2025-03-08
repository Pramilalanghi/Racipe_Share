const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;
app.use(express.json());

// Home Page API
app.get('/', (req, res) => {
    res.send("<h1 align=center>Welcome to the MERN stack week 2 session</h1>");
});

// Test Route
app.post('/test', (req, res) => {
    res.json({ message: "Test route working!" });
});

// Registration Route
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.json({ message: "User Registered Successfully!" });
        console.log("User Registration completed...");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        res.json({ message: "Login Successful", username: user.username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Database Connection
console.log("Connecting to DB:", process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connected successfully.."))
    .catch((err) => console.error("DB Connection Error:", err));

// Start Server
app.listen(PORT, (err) => {
    if (err) {
        console.error("Server Error:", err);
    }
    console.log("Server is running on port:", PORT);
});
