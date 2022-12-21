# GillyWeed-Backend
"npm start" to run the server


<b>Cart Database Model</b> -> Database -> shopmodels -> cart.js
cart routes -> Routes -> shop routes -> cart.js

Authorization </br>
 model -> Database -> User.js
 
 routes(signin and register new) -> routes -> auth.js (JWT implemented)
 </br>
 routes(change password) -> routes -> user
 
To test JWT(POSTMAN) :
  in postman even if you signin but not provide token then on (http://localhost:5000/api/cart/) you will get token not valid error , you can test it on postman
