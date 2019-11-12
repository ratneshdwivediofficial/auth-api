const express = require('express');
const app = express();

//import routes
const authRoute = require('./routes/auth');

//Route Middleware
app.use('/api/user', authRoute);

app.listen(3000, ()=> console.log("up and running on port 3000"));