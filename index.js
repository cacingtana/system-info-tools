
const {systemDate, systemIp} = require('./core/systeminfo');
const computerName = require('computer-name')
var osu = require('node-os-utils');
var mem = osu.mem;
var cpu = osu.cpu;

async function logInOrder() {
    // fetch all the URLs in parallel
    const textPromises = urls.map(async url => {
      const response = await fetch(url);
      return response.text();
    });
    
  }
  


async function getRam() {
  let result = await mem.info();
  return result.usedMemMb;
}

async function getCpu() {
  let result = await cpu.free();
  return result;
}

systemInfo = {
    "computer-name": computerName(),
    "network": systemIp(),
    "RAM": getRam(),
    "CPU": getCpu(),
    "systemDate": systemDate(),
};


console.log(systemInfo);








