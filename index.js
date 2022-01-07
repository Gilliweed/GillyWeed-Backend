const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const authRoute = require('./routes/auth');
const cartRoute = require('./routes/cart');
dotenv.config();

mongoose
  .connect(process.env.Mongoose_url)
  .then(() => console.log("connection successful"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use('/api/user' , userRoute);
app.use('/api/product' , productRoute);
app.use('/api/auth' , authRoute);
app.use('/api/cart' ,cartRoute)


app.listen(2000, () => {
  console.log("server is running on port ");
});
