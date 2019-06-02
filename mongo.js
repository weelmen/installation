const sudo=require('sudo-js');
sudo.setPassword('liverpool');
var command=['node', '-v'];
console.log(process.argv[2]);
sudo.exec(command, function(err, pid, result) {
    console.log("node version "+result);
    if (result==""){
        var command=['sudo', 'apt','update'];
        sudo.exec(command, function(err, pid, result){
            console.log("update done !");
        });
        command=['sudo', 'apt','install','nodejs'];
        sudo.exec(command, function(err, pid, result){
            console.log("node installed !");
        });
        command=['sudo', 'apt','install','npm'];
        sudo.exec(command, function(err, pid, result){
            console.log("npm installed !");
        });
        command=['node', '-v'];
        sudo.exec(command, function(err, pid, result){
            console.log("node version :"+result);
        });

    }



        command=['sudo','apt-key','--keyserver','hkp://keyserver.ubuntu.com:80','--recv','9DA31620334BD75D9DCB49F368818C72E52529D4'];
        sudo.exec(command, function(err, pid, result) {
            if(result!=""){
            command=['echo','"deb','[','arch=amd64,arm64',']','https://repo.mongodb.org/apt/ubuntu','xenial/mongodb-org/4.0 multiverse"','|','sudo','tee','/etc/apt/sources.list.d/mongodb-org-4.0.list'];
            sudo.exec(command, function(err, pid, result) {
                if(result!=""){
                command=['sudo','apt-get','update'];
                sudo.exec(command, function(err, pid, result) {
                    if(result!=""){
                    command=['sudo','apt-get','install','-y','mongodb-org'];
                    sudo.exec(command, function(err, pid, result) {
                        if(result!=""){
                            console.log('Mongo installed !');
                            command=['echo','"mongodb-org','hold"','|','sudo','dpkg','--set-selections'];
                            sudo.exec(command, function(err, pid, result) {
                                if(result!=""){
                                    command=['echo','"mongodb-org-server','hold"','|','sudo','dpkg','--set-selections'];
                                    sudo.exec(command, function(err, pid, result) {
                                        if(result!=""){
                                            command=['echo','"mongodb-org-shell','hold"','|','sudo','dpkg','--set-selections'];
                                            sudo.exec(command, function(err, pid, result) {
                                                if(result!=""){
                                                    command=['echo','"mongodb-org-mongos','hold"','|','sudo','dpkg','--set-selections'];
                                                    sudo.exec(command, function(err, pid, result) {
                                                        if(result!=""){
                                                            command=['echo','"mongodb-org-tools','hold"','|','sudo','dpkg','--set-selections'];
                                                            sudo.exec(command, function(err, pid, result) {
                                                                if(result!=""){
                                                                    console.log("Package is installed");
                                                                }

                                                            });
                                                        }

                                                    });
                                                }

                                            });

                                        }
                                    });

                                }
                            });
                        }

                    });

                        }
                    });
                }
        });
            }  
        });

    
});