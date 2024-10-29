require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const roomRoute = require("./routes/room.route.js");
const userRoute = require("./routes/user.route.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Ngomongo");
});

// routes
app.use("/room", roomRoute);
app.use("/user", userRoute);

mongoose
    .connect(
        "mongodb+srv://ngomongo_admin:EStVIVhsySLYM7vu@ngomongodb.oeycx.mongodb.net/RuangChat?retryWrites=true&w=majority&appName=NgomongoDB"
    )
    .then(() => {
        console.log("Connected to mongoDB");
        app.listen(port, () => {
            console.log(`Backend Ngomongo app listening on port ${port}`);
        });
    })
    .catch(() => {
        console.log("Connection to mongodb failed");
    });
