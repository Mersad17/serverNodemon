const mysql = require('mysql');

class DBManager{
    db;
    constructor(){
        this.db = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database:'classicmodels'
          });
          this.db.connect((err) =>{
            if(err) throw err;
            console.log('Mysql Connected...');
          });
    }

    getDB(){
        return this.db;
    }
}

module.exports = DBManager;