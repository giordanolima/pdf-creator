const fs = require('fs')
const path = require('path')
function checkKeyFile() {
  const filePath = path.resolve('./src/keys');
  try{
    fs.statSync(filePath + '/keys.json');
    return true;
  }catch(ex) {
    return false;
  }
}

module.exports = checkKeyFile