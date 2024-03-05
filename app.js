const express = require("express");
const morgan = require("morgan");
const app = express();
const router = express.Router();
const authRoutes = require("./routes/authRoutes")
const autoServiceRoutes = require("./routes/autoServiceRoutes")
const autoWorkerRoutes = require("./routes/autoWorkerRoutes")
app.use(express.json());

app.use(morgan("dev"));
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/service", autoServiceRoutes)
app.use("/api/v1/worker", autoWorkerRoutes)

//Server\\/////////////////////////////////////////////////

module.exports = app;