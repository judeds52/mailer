const pg = require("pg");
// var connection = "postgres://finch:finchtech@142.93.222.149:5432/postgres";
var connection ={
      host: '192.168.0.103',
      user: 'postgres',     
      password: 'jdjd5252',
      database: 'finch',
      port: 4000,
      
  };
var db = new pg.Client(connection);
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to postresql database..... :-P");
  }
});

module.exports = db;