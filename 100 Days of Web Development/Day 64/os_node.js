const os = require("os"); //importing OS module
console.log(os.arch()); //returns the architecture of the system
const cpu = os.cpus(); //returns the CPU details of the system
console.log(cpu); //returns the CPU details of the system
console.log(os.freemem(), "bytes"); //returns the free memory of the system
console.log(os.homedir()); //returns the home directory of the system
console.log(os.hostname()); //returns the hostname of the system
console.log(os.loadavg()); //returns the load average of the system
/*Returns an array containing the 1, 5, and 15 minute load averages.
The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.
The load average is a Unix-specific concept. On Windows, the return value is always [0, 0, 0].*/
console.log(os.networkInterfaces()); //returns the network interfaces of the system
console.log(os.platform()); //returns the platform of the system
console.log(os.release()); //returns the release of the system
console.log(os.tmpdir()); //returns the temporary directory of the system
console.log(os.totalmem(), "bytes"); //returns the total memory of the system
console.log(os.type()); //returns the type of the system
console.log(os.userInfo()); //returns the user information of the system
console.log(os.version()); //returns the version of the system