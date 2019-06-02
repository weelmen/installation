const sudo=require('sudo-js');
const shell=require('shelljs');
sudo.setPassword('liverpool');
var command=['sudo','apt-get','update'];
sudo.exec(command, (err,pid,result)=>{
    if(result!=""){
        command=['sudo','apt','install','postgresql','postgresql-contrib','-y'];
        sudo.exec(command,(err,pid,result)=>{
            console.log(result);
            if(stderr!=null){
                command=['sudo','apt-get', '--fix-broken','install','-y'];
                sudo.exec(command, (err,pid,result)=>{
                    console.log(result);
                    if(result!=""){
                        console.log("PostgreSQL Installed !");
                    }
                });
            }
                command=['sudo','-i','-u','postgres'];
                sudo.exec(command, (err,pid,result)=>{
                    console.log(result);
                })
            

        })

    }
});