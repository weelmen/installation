var mysql = require('mysql');
var sudop = require('sudo-prompt');
var Connection = require('tedious').Connection;
const pg = require('pg');
var redis = require("redis");
const sudo=require("sudo-js");
const shell=require("shelljs");
var databaseName=process.argv[2];
var UserName=process.argv[3];
var UserPWD=process.argv[4];
sudo.setPassword('liverpool');
//Mysql Connection
if(process.argv[5]==='mysql'){
  //creat a new user
   var command=`mysql -u root -p -e "create user '${UserName}'@'localhost' IDENTIFIED WITH mysql_native_password BY '${UserPWD}';"`;
   shell.exec(command);
   command=` mysql -u root -p -e "GRANT ALL PRIVILEGES ON *.* TO '${UserName}'@'localhost' IDENTIFIED BY '${UserPWD}';"`;
   shell.exec(command);
   command='mysql -u root -p -e "flush privileges;"';
   shell.exec(command);
   // connection
var client= mysql.createConnection({
    host     : 'localhost',
    user     : UserName,
    password : UserPWD
  });
  client.connect(err =>{
    if(err) throw err;
    else {
      console.log("Connected..")
      //creat a new data base
      client.query(`CREATE DATABASE ${databaseName}`, function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
    }
  });
}





//PG Connection
if(process.argv[5]==='pg'){
  //icone 
  var options = {
    name: 'Electron',
    icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
  };
  //Creat a new user
  sudop.exec('-u postgres psql -c "create user '+UserName+' with encrypted password \''+UserPWD+'\'"', options,
  function(error, stdout, stderr) {
    if (error) throw error;
    console.log('stdout: ' + stdout);
    shell.exec('sudo -u postgres psql -c "create database '+databaseName+'"',(code,stdout,stderr)=>{
      if(stderr) throw stderr;
          console.log(stdout);
      if(code===0){
        shell.exec('sudo -u postgres psql -c "GRANT permissions ON DATABASE '+databaseName+' TO '+UserName+';"',(code,stdout,stderr)=>{
          if(stderr) throw stderr;
          console.log(stdout);
          if(code===0){
          const config = {
          host: 'localhost',
          // Do not hard code your username and password.
          // Consider using Node environment variables.
          user: UserName,     
          password: UserPWD,
          database: databaseName,
          port: 5432,
          ssl: true
        };
        const client = new pg.Client(config);
        client.connect(err =>{
          if(err) throw err;
          else {
            console.log("DB Connected..");
          }
        })
      }

        })
      }
      
    })
  }
);
  
}


//redis Connection
// if (process.argv[5]==='redis'){
// var client = redis.createClient(6380, UserName,
//   {auth_pass : UserPWD, tls: {servername: 'localhost'}});
//   console.log('DB Connected..');
// }

