var http = require('http');
var fs = require('fs');


http.createServer((req, res)=> {
  var readStream = fs.createReadStream(__dirname+'/files/report.csv')
  readStream.on('open', ()=> {
    res.setHeader('Access-Control-Allow-Origin','*');
    readStream.pipe(res);
  });

  readStream.on('error',(err)=> {
    res.end(err);
  });
}).listen(8080,()=> {
    console.log("Server ready")
});