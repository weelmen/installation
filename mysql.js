const sudo=require('sudo-js');
const shell=require('shelljs');
sudo.setPassword('liverpool');
var command=['sudo','apt-get', 'update'];
sudo.exec(command,(err,pid,result)=>{
    console.log(result);
    if(result!=""){
        command=['sudo', 'apt-get' ,'install', 'mysql-server','-y'];
        sudo.exec(command,(err,pid,result)=>{
            console.log(result);
            if(result!=""){
              command=['sudo','mysql_secure_installation','y'];
                sudo.exec(command,(err,pid,result)=>{
                    if(result!=""){
                        command=['sudo', 'ufw','allow', 'mysql'];
                        sudo.exec(command,(err,pid,result)=>{
                            console.log(result);
                            if(result!=""){
                                command=['systemctl', 'start', 'mysql'];
                                sudo.exec(command,(err,pid,result)=>{
                                    if(result==""){
                                        console.log(result);
                                        command=['systemctl', 'enable', 'mysql'];
                                        sudo.exec(command,(err,pid,result)=>{
                                            if(result==""){
                                                console.log('MySql Server is installed now !');
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }

                })
            }
        });
    }
        
    
});