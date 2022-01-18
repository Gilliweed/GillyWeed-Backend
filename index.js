const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const productRoute = require('./routes/Shop Routes/product');
const authRoute = require('./routes/auth');
const cartRoute = require('./routes/Shop Routes/cart');
const orderRoute = require('./routes/Shop Routes/order');
const cookieSession = require('cookie-session');
const passport = require('passport');
const blogRoute = require('./routes/blog');
const cors = require('cors');
dotenv.config();

mongoose
  .connect(process.env.Mongoose_url)
  .then(() => console.log('DB connection successful'))
  .catch((err) => {
    console.log(err);
  });
app.use(
  cookieSession({
    name: 'session',
    keys: ['hello'],
    maxAge: 30 * 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
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
app.use('/api/blog', blogRoute);

app.listen(5000, () => {
  console.log('server is running on port at 5000');
});
