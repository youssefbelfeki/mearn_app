const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require('./middleware/errorMiddleware.js')
const port = process.env.PORT || 5000;

const goalRoutes = require("./routes/goalRoutes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler)

app.listen(port, () => console.log(`server run on port ${port}`));
