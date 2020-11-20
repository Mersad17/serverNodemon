//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();

 
const port = 3003;
//mySql
//Create connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'classicmodels'
});
//connect to database
con.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});


//Loads the handlebars module
const handlebars = require('express-handlebars');
const { createConnection } = require('net');
//Set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Set public folder as static folder for static file
app.use(express.static('public'))
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    //the default Layout
    defaultLayout: 'planB',
    //new configuration parameter
partialsDir: __dirname + '/views/partials/'
    }));

// Weed Effect ! I mean CRUD Effect !!!
// Weed Effect ! I mean CRUD Effect !!!
// Weed Effect ! I mean CRUD Effect !!!
// Weed Effect ! I mean CRUD Effect !!!

//route for homepage

    


    app.get('/', (req, res) => {
    let sql = `SELECT * FROM  customers`;
      let query = con.query(sql, (err, results) => {
        if(err) throw err;
        res.render('main',{layout : 'index',
        results: results
      });
    });
  });




        
        app.listen(port, () => console.log(`App listening to port ${port}`));