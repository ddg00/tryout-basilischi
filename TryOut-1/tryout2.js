if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

const https = require('https');
const url = process.argv[2] ;
const options = {method: 'HEAD', host: url};
const regex = /(<\s*title[^>]*>(.+?)<\s*\/\s*title)>/gi;

https.get(url, function (res) {
  contentType = ""+res.headers['content-type'];
  if(contentType.includes("text/html")){
    console.log("The result is HTML");
    res.on('data', function (chunk) {
        var str=chunk.toString();
        var match = regex.exec(str);
        if (match && match[2]) {
          console.log("The title is"+match[2]);
        }
    });
  }

});
