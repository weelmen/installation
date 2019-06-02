require('dotenv').config();
const sudo=require('sudo-js');
const shell=require('shelljs');
sudo.setPassword(process.env.ROOT_PASSWORD);
var command=['sudo', 'apt-get', 'update'];
sudo.exec(command,(err,pid,result)=>{
    //console.log(result);
    if(err == null ){
        command=['sudo', 'apt-get', 'install', 'sqlite3'];
        sudo.exec(command,(err,pid,result)=>{
            //console.log(result);
            if(err == null){
                command='sqlite3 --version';
                shell.exec(command,(code,stdout,stderr)=>{
                    console.log("SQLite installed , Version ="+stdout);
                    if(code == 0){
                        command=['sudo', 'apt-get', 'install', 'sqlitebrowser','-y'];
                        sudo.exec(command,(err,pid,result)=>{
                            //console.log(result);
                            if(err == null){
                                console.log('Browser Installed now !');
                            }
                        })
                    }
                })

            }
        })
    }
})