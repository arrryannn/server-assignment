const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(morgan("dev"));

app.use((req, res, next) => {
    console.log("Request URL:", req.originalUrl);
    console.log("Method:", req.method);
    console.log("Time:", new Date().toLocaleString());
    console.log("IP:", req.ip);

    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to aryan's private Server");
});

app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

app.get("/user/:name", (req, res) => {
    const name = req.params.name;

    res.json({
        message: "User found successfully",
        name: name
    });
});

app.get("/search", (req, res) => {
    const course = req.query.course;
    const batch = req.query.batch;

    res.json({
        course: course,
        batch: batch
    });
});

app.post("/student", (req, res) => {
    const { name, age, city } = req.body;

    res.json({
        message: "Student data received",
        student: {
            name,
            age,
            city
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});