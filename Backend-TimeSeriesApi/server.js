const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 5000;
const cors = require('cors');


// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }));
  
mongoose.Promise = global.Promise;

// connection creation and creation a new db

mongoose.connect('mongodb://127.0.0.1:27017/timeSeries').then(db =>{
    
    console.log('MONGO connected');

}).catch(error => console.log(error));

//Middlewares

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Import routes
const timeSeriesRoutes = require("./src/routes/timeSeriesRoute");

// route Middlewares
app.use("/api/timeseries", timeSeriesRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});