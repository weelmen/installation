const sudo=require('sudo-js');
const shell=require('shelljs');
sudo.setPassword('liverpool');
var command=['sudo', 'npm','install','-g','@angular/cli'];
sudo.exec(command, function(err, pid, result) {
    console.log(result);
    if(err!=null){
        command=['sudo','npm','bin','-g'];
        sudo.exec(command, function(err, pid, result) {
            if(result!=""){
                command=['sudo','npm','rm','-g','@angular/cli'];
                sudo.exec(command, function(err, pid, result) {
                    if(result!=""){
                        command=['sudo','npm','cache','clear'];
                        sudo.exec(command, function(err, pid, result) {
                            if(result==""){
                                command=['sudo','npm','install','-g','@angular/cli'];
                                sudo.exec(command, function(err, pid, result) {
                                    console.log('angular installed !');

                                });
                            }
                    
                        });
                    }
                });
            }
        });
    }

    console.log('Angular Cli installed !');
    // command = 'ng new RORA && cd RORA';
    // shell.exec(command, function(err, pid, result) {
            
    //         shell.cd('RORA');
    //         console.log('RORA project created !');
    //         console.log(result);
    //                 command = ['ng','serve'];
    //                 sudo.exec(command, function(err, pid, result) {
    //                 console.log("Server Started !");
    //                 });
                
        
    //         });
 });