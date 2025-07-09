const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routers/main");
const { config , configDotenv} = require("dotenv");
configDotenv();
const connection = express();
const PORT = process.env.PORT || 5640;
const MONGO_URI = process.env.DataBaseURL;

connection.use(express.json());
connection.use(express.urlencoded({ extended: false }));
connection.use("/books", productRoutes);


mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    connection.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
})
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
});












