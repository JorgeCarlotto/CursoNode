let http = require('http').createServer(webServer);
let fs = require('fs');
let index = fs.createReadStream('assets/index.html')


function webServer (req,res)
{
        res.writeHead(200,{'Content-Type':'text/html'})
        index.pipe(res)
}


http.listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')