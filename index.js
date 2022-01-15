const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const authRoute = require('./routes/auth');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const writeBlogRoute=require('./routes/blogs/writeblog')
const cors = require('cors');
dotenv.config();

mongoose
  .connect(process.env.Mongoose_url)
  .then(() => console.log('DB connection successful'))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use('/api/user', userRoute);
app.use('/api/products', productRoute);
app.use('/api/auth', authRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);
app.use('/api/writeblog',writeBlogRoute)
app.listen(5000, () => {
  console.log('server is running on port at 5000');
});
