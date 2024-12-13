require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const app = express();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use(bodyParser.json())
app.use("/api", productRoutes);

//database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
connectDB();

app.listen(port,()=>{
  console.log(`server is running on ${port}...`)
})
