const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const productRoute = require("./routes/Shop Routes/product");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/Shop Routes/cart");
const orderRoute = require("./routes/Shop Routes/order");

const blogRoute = require("./routes/blog");
const cors = require("cors");

const flash = require("connect-flash");
const customMware = require("./config/middleware");

dotenv.config();

mongoose
  .connect(process.env.Mongoose_url)
  .then(() => console.log("connection successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

//  Using Flash
// app.use(flash());
// app.use(customMware.setFlash);


app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/blog", blogRoute);

app.listen(5000, () => {
  console.log("server is running on port ");
});
