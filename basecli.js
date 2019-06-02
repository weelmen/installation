const shell = require("shelljs");
const dotenv =require ('dotenv');
const result = dotenv.config();
 

if (result.error) {
  throw result.error
}
 
  const cmd =(DataBaseName,DataBaseUsername,UsernamePWD,base)=>{
    var command= "node connection.js "+DataBaseName+" "+DataBaseUsername+" "+UsernamePWD+ " "+base;
    shell.exec(command);

  }
  
  const run = async (base) => {

    const DataBaseName =result.parsed.DB_NAME ;
    const DataBaseUsername = result.parsed.DB_Username ;
    const UsernamePWD = result.parsed.DB_PASSWORD ;
    cmd(DataBaseName,DataBaseUsername,UsernamePWD,base);
    // create the file
    // show success message
  };
  module.exports.run=run; 