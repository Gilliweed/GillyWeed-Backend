const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    cb(null, profile);
    console.log(profile);
  }
));

passport.serializeUser((user,cb)=>{
  cb(null, user);
});

passport.deserializeUser((user,cb)=>{
  cb(null, user);
});