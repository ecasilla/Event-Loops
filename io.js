var syscalls = require('syscalls');

var fdread   = 0;
var fdout    = 1;
var fderror  = 2;
var fdfile   = 3;
var fdsocket = 4;
syscalls.write(fdout,'Welcome to Syscalls please type something then hit enter \n');
var data = syscalls.read(fdread,1024)
syscalls.write(fdout,'You wrote ' + data.toString());

