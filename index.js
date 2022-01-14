const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const productRoute = require("./routes/Shop Routes/product");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/Shop Routes/cart");
const orderRoute = require("./routes/Shop Routes/order");
const bigdiscountRoute = require("./routes/Shop Routes/BigDiscount");
const maincarRoute = require("./routes/Shop Routes/MainCara");
const newarrivalRoute = require("./routes/Shop Routes/NewArrival");
const flashsaleRoute = require("./routes/Shop Routes/flashsale");
const topratedRoute = require("./routes/Shop Routes/toprated");
const featuredproductRoute = require("./routes/Shop Routes/featuredproduct");
const blogRoute = require("./routes/blog");
const cors = require("cors");



// mongo db
dotenv.config();
mongoose
  .connect(process.env.Mongoose_url)
  .then(() => console.log("connection successful"))
  .catch((err) => {
    console.log(err);
  });



// json data allow
app.use(express.json());



// cross site verification
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};



// Routes

app.use(cors(corsOptions));

// user routes
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);

// blog routes
app.use("/api/blog", blogRoute);




// shop routes
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/bigdiscount", bigdiscountRoute);
app.use("/api/maincar", maincarRoute);
app.use("/api/flashsale", flashsaleRoute);
app.use("/api/newarrival", newarrivalRoute);
app.use("/api/toprated", topratedRoute);
app.use("/api/featuredproduct",featuredproductRoute);




// run on port

const port = 5000;
app.listen(port, () => {
  console.log("server is running on port", port);
});
