/* URL modulo que tiene varias utilidades para la resolucion y analisis de URL, por ejemplo si una url se nos devuelve en forma de objeto con
url.pase(urlStr[,parseQueryString][slashesDenoteHost]) la podemos analizar y pasar a texto. 

documentacion : nodejs.org/api/url.html*/

/*QueryString es un modulo q nos va a permitir propocionar el manejo optimo de los obj de url convertirlos a consultas de cadena de texto

documentacion : nodejs.org/api/querystring.html*/


 let http = require('http').createServer(webServer);
 let path = require('path');
 let url = require('url');

 let urls = [
     {
         id : 1,
         route: '',
         output: '<h2>Home</h2>'
     },
     {
        id : 2,
        route: 'acerca',
        output: '<h2>Acerca</h2>'
     },
     {
        id : 3,
        route: 'contacto',
        output: '<h2>Contacto</h2>'
     }
 ]
 function webServer(req, res){

    let message = '<h1>Hola Node.Js </h1>';
    let pathURL = path.basename(req.url);
    let id = url.parse(req.url,true).query.id   //trata de optener el id de la url  ---- parametro true evalua en automatico querystring ... ver : url.parse(urlString[, parseQueryString[, slashesDenoteHost]])     //query permite analizar el paso de parametro en este caso busco el parametro ID  

    console.log(`path : ${pathURL} ,id:${id} `)
    

    urls.forEach(function(pos){
        if(pos.route == pathURL || pos.id == id){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(message + pos.output)
        }
    })
    if(!res.finished){   
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end('<h1>Error 404 : Not Found Lagarto</h1>')
    }
 }

 http.listen(3000)

 console.log('Servidor corriendo en http://localhost:3000/')

