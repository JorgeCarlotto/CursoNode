let http = require('http').createServer(webServer);
let form = require('fs').readFileSync('assets/form.html');
const { parse } = require('path/posix');
let querystring = require('querystring');
let util = require ('util');
let dataString = ''   // va a guardar la info q envia el formulario

function webServer(req, res){

    if(req.method == 'GET'){
        res.writeHead(200,{'Content-Type' : 'text/html'}) // manda a la cabecera cuando se ejecuta get //abrimos el formulario
        res.end(form)       // 
    }

    if(req.method == 'POST'){   //con esto hacemos lo que queremos ej: mandar info base de datos,  // ahora imprime en pantalla los datos 
        
        req
        .on('data',function(data){ // mientras halla datos los va almacenando en la variable dataString
            dataString += data
        })
        .on('end',function(){  // cuando termina de recibir datos !
            //let dataObject = querystring.parse(dataString)  // busca la forma de pasar  a JSon
            let dataJSON = util.inspect(dataObject)
            let templeString = 
            `Los datos que enviaste por POST como string son: ${dataString} ,
            Los datos que enviaste por POST como objeto son: ${dataObject},
            Los datos que enviaste por POST como JSON son: ${dataJSON}`;
            console.log(templeString);
            res.end(templeString)  // envia al navegador web
        })
    }
}

http.listen(3000)


console.log('Servidor corriendo en http://localhost:3000/')