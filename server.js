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
    res.json({
        page: "About",
        description: "Express.js assignment server",
        tech: ["Node.js", "Express", "Middleware"],
        status: "learning project"
    });
});

app.get("/user/:name", (req, res) => {
    res.json({
        message: "User fetched",
        user: req.params.name,
        success: true
    });
});

app.get("/search", (req, res) => {
    const course = req.query.course;
    const batch = req.query.batch;

    res.json({
        message: "Search data received",
        course: course || "not provided",
        batch: batch || "not provided"
    });
});

app.post("/student", (req, res) => {
    const { name, age, city } = req.body;

    res.json({
        message: "Student data stored",
        data: { name, age, city },
        success: true
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});