var fs=require("fs");
const sudo=require('sudo-js');
const shell=require('shelljs');
const base=require("./basecli");
var command='';
const test= (project)=>{
 var monJson = JSON.parse(fs.readFileSync(project+"/package.json","UTF-8")).devDependencies;
 var myJson = JSON.parse(fs.readFileSync(project+"/package.json","UTF-8")).dependencies;
 console.log(myJson);
 console.log(monJson);

 //test devdependencies
 if(monJson !== undefined){
 if(monJson["angular"]!== undefined){
      command='npm run angular';
     shell.exec(command);
} 
if ((monJson["mongoose"]!== undefined)||(monJson["mongodb"]!== undefined)){
      command='npm run mongo';
     shell.exec(command);
 }
if(monJson["mysql"]!== undefined || monJson["mysql2"]!== undefined){
     command='npm run mysql';
     shell.exec(command,(code,stdout,stderr)=>{
     base.run('mysql');
     })
 }
// if((monJson["ut-mssql"]!== undefined)||(monJson["mssql"]!== undefined )||(monJson["mssql2"]!== undefined)||(monJson["mssql-pool-patch"]!= undefined)||(monJson["mssql-plus"]!== undefined)||(monJson["@jonstuebe/mssql"]!== undefined)||(monJson["ce-mssql"]!== undefined)){
//      command='npm run mssql';
//      shell.exec(command,(code,stdout,stderr)=>{
//         command='node basecli.js mssql';
//         shell.exec(command);
//         })

if((monJson["pg"]!== undefined)||(monJson["postgres"]!== undefined)||(monJson["postgresql"]!== undefined)){
    command='npm run postgres';
    shell.exec(command,(code,stdout,stderr)=>{
        base.run('pg');
        //fichier.sql
        })
}
if(monJson["couchbase"]!== undefined){
    command="npm run couchbase";
    shell.exec(command);
    //fichier.txt
}
if((monJson["level"]!== undefined)||(monJson["levelup"]!== undefined)||(monJson["leveldb"])){
    command="npm run leveldb";
    shell.exec(command);
    //fichier.txt
}
if((monJson["sqlite"]!== undefined)||(monJson["sqlite3"]!== undefined)||(monJson["better-sqlite3"]!== undefined)){
    command="npm run sqlite";
    shell.exec(command);
    //fichier.sql
}
if((monJson["cassandra-driver"]!== undefined)||(monJson["express-cassandra"]!== undefined)||(monJson["node-cassandra-cql"]!== undefined)||(monJson["cql-client"]!== undefined)||(monJson["connect-cassandra-cql"]!== undefined)){
    command='npm run cassandra';
    shell.exec(command);
    //fichier.txt
}
if((monJson["Neo4j"]!== undefined)||(monJson["neo4j-driver"]!== undefined)||(monJson["node-neo4j"]!== undefined)){
    command='npm run Neo4j';
    shell.exec(command);
    //fichier 
}
if(monJson["redis"]!== undefined){
    command='npm run redis';
    //fichier.txt
}
}

//test dependencies
if (myJson!== undefined){
if(myJson["angular"]!== undefined){
    command='npm run angular';
    shell.exec(command);

}
if ((myJson["mongoose"]!== undefined)||(myJson["mongodb"]!== undefined)){
    command='npm run mongo';
    shell.exec(command);

}
if(myJson["mysql"]!== undefined || myJson["mysql2"]!== undefined){
   command='npm run mysql';
   shell.exec(command);
   base.run('mysql');
   //fichier.sql
}
// if((myJson["ut-mssql"]!== undefined)||(myJson["mssql"]!== undefined )||(myJson["mssql2"]!== undefined)||(myJson["mssql-pool-patch"]!= undefined)||(myJson["mssql-plus"]!== undefined)||(myJson["@jonstuebe/mssql"]!== undefined)||(myJson["ce-mssql"]!== undefined)){
//    command='npm run mssql';
//    shell.exec(command);
//    command='node basecli.js mssql';
//    shell.exec(command);
// }
if((myJson["pg"]!== undefined)||(myJson["postgres"]!== undefined)||(myJson["postgresql"]!== undefined)){
  command='npm run postgres';
   shell.exec(command);
   base.run('pg');
   //fichier.sql

}
if(myJson["couchbase"]!== undefined){
    command="npm run couchbase";
    shell.exec(command);
    //fichier.txt
}
if((myJson["level"]!== undefined)||(myJson["levelup"]!== undefined)||(myJson["leveldb"]!== undefined)){
    command="npm run leveldb";
    shell.exec(command);
    //fichier.txt
}
if((myJson["sqlite"]!== undefined)||(myJson["sqlite3"]!== undefined)||(myJson["better-sqlite3"]!== undefined)){
    command="npm run sqlite";
    shell.exec(command);
    //fichier.db
}
if((myJson["cassandra-driver"]!== undefined)||(myJson["express-cassandra"]!== undefined)||(myJson["node-cassandra-cql"]!== undefined)||(myJson["cql-client"]!== undefined)||(myJson["connect-cassandra-cql"]!== undefined)){
    command='npm run cassandra';
    shell.exec(command);
    //fichier.txt
}
if((myJson["Neo4j"]!== undefined)||(myJson["neo4j-driver"]!== undefined)||(myJson["node-neo4j"]!== undefined)){
    command='npm run Neo4j';
    shell.exec(command);
    //fichier.txt
}
if(myJson["redis"]!== undefined){
    command='npm run redis';
    shell.exec(command);
    //fichier.txt
}
}

 }
 module.exports.test=test;