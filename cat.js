var syscalls = require('syscalls');

var files = process.argv.slice(2);
var kb = 1024;
var fdread   = 0;
var fdout    = 1;
var fderror  = 2;
var fdfile   = 3;
var fdsocket = 4;
files.map(function(path) {
 var filedes = syscalls.open(path,syscalls.O_RDONLY);
 var contents; 
 while ((contents = syscalls.read(filedes,kb)).length > 0 ){
  syscalls.write(fdout,'your file contains \n ' + contents.toString());
 }
 syscalls.close(filedes);
});



