const sudo=require('sudo-js');
const shell=require('shelljs');
sudo.setPassword('liverpool');
var command=['sudo','apt','update'];
sudo.exec(command, (err,pid,result)=>{
    
    if(result!=""){
        command=['sudo','apt','install','redis-server','-y'];
        sudo.exec(command,(err,pid,result)=>{
           
            if(err==null){
                command=['ss','-an','|','grep','6379'];
                sudo.exec(command, (err,pid,result)=>{
                    
                    if(err==null){
                        command=['sudo','ufw','allow','proto','tcp','from','192.168.121.0/24','to','any','port','6379'];
                        sudo.exec(command, (err,pid,result)=>{
                            console.log('Redis installed');
                           
                       
                        });

                                        
                      }
                });
              }
        });
                 
            
     }
});



