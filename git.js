const sudo=require('sudo-js');
const shell=require('shelljs');
const install=require('./install');
const dotenv =require ('dotenv');
const res = dotenv.config();
sudo.setPassword(process.env.ROOT_PASSWORD);
var repertoire;
//install git
var command=['sudo','apt-get','update'];
sudo.exec(command, async function(err, pid, result) {
    if(result!=''){
        command=['sudo','apt-get','install','git','-y'];
        sudo.exec(command, function(err, pid, result) {
            if(result!=''){
               

    }
})
    }
})
//clone the project

 
if (res.error) {
  throw res.error
}
const url =res.parsed.CLIENT_URL;
command='git clone '+url + ' project';
shell.exec(command);
var para =(url).split('/');
repertoire=(para[para.length-1]).split('.');
//test that if the project have the package.json file and install all the dependencies
command='cd project';
shell.exec(command, (code,stdout,stderr)=>{
    if(code==0) {
    command='ls package.json';
shell.exec(command, (code, stdout, stderr)=>{
    if(stdout!=''){
        command='cd project && npm i --save';
        shell.exec(command,(code,stdout,stderr)=>{
          console.log(stdout);
          if(stdout!=''){
            console.log('Dependencies Installed !');
            install.test('project');
        }
        });

        
    }
    if(stdout==''){
        console.log('Project Incompatible Sorry !');
    }
})
}
}); 
module.exports=repertoire;