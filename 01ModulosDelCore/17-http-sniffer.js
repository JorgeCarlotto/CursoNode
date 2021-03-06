let http = require('http');
let options={
    host : 'www.mediotiempo.com',
    port:80,
    path:'/'
};
let htmlCode = '';

function httpClient(res){

    console.log(`El sitio ${options.host} ha respondido.Codigo de Estado ${res.statusCode}`);
    res.on('data',function(data){
        htmlCode += data
        console.log(data, data.toString())
    })
}

function httpError(err){

    console.log(`El sitio ${options.host} no respondió.Codigo de Estado ${err.code}.Error${err.message}`);
}

function webServer(req, res){

    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(htmlCode)
}

//instancia cliente http
http
    .get(options,httpClient)
    .on('error',httpError)

// instancia de servidor 
http
    .createServer(webServer)
    .listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')    
