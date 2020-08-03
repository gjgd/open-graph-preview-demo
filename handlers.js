const fs = require('fs');

const homeHtml = fs.readFileSync('./index.html').toString();

module.exports.main = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: homeHtml,
  };
};
