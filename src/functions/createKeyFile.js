const fs = require('fs')
const path = require('path')

function createKeyFile(key) {
  const filePath = path.resolve('./src/keys');
  const data = JSON.stringify({
    "smmry_api_key" : key
  });
  try{
    fs.writeFileSync(filePath + '/keys.json', data);
  }catch(ex){}
}

module.exports = createKeyFile