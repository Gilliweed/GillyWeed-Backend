# GillyWeed-Backend
"npm start" to run the server


<b>Cart Database Model</b> -> Database -> shopmodels -> cart.js
<b>Cart routes</b> -> Routes -> shop routes -> cart.js

### Authorization </br>
 <b>User database model</b> -> Database -> User.js
 
 <b>routes(signin and register new)</b> -> routes -> auth.js (JWT implemented)
 </br>
 <b>routes(change password)</b> -> routes -> user
 
<b>To test JWT(POSTMAN) :</b>
  in postman even if you signin but not provide token then on (http://localhost:5000/api/cart/) you will get token not valid error , you can test it on postman
