var syscalls = require('syscalls');
var stdout = 1;

//create an accepting socket and save that file descriptor 
var acceptingFd = syscalls.socket(syscalls.AF_INET,syscalls.SOCK_STREAM,0);

//bind the accepting socket to a port and host
syscalls.bind(acceptingFd,3000,"0.0.0.0");

//listen on the uri and have a max kernal buffer of 100
syscalls.listen(acceptingFd,100);

//log that we are ready and listening
syscalls.write(stdout,"listening on port 3000\n");

while(true){ 
  //Accepting any incoming socket connections on that port
  var connfd = syscalls.accept(acceptingFd);

  //log new connection
  syscalls.write(stdout,'accepted new connection\n');

  //read up to a kb of data
  var socketData = syscalls.read(connfd,1024);
  //log data 
  syscalls.write(stdout,'recevied data ' + socketData + '\n');
  //write to connected socket
  syscalls.write(connfd,'bye\n');
  //close connected socket
  syscalls.close(connfd);
}

