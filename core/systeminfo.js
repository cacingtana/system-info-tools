const ip = require('os');

const systemDate = () => {
  let ts = Date.now();
  let date_ob = new Date(ts);

  return {
    "date": date_ob.getDate(),
    "month": date_ob.getMonth() + 1,
    "year": date_ob.getFullYear(),
  }
}

const systemIp = () => {
  const interfaces =  ip.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return {
          "ip": alias.address,
          "mac": alias.mac,
        };
    }
  }
}




module.exports = {systemDate, systemIp };

