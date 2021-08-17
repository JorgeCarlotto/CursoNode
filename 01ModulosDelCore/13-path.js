/*
PATH: 
https://nodejs.org/api/path.html

Contiene utilidades para manejar y transformar las rutas de los directorios y archivos a formato cadena .
 EL sitema de archivos no es consultado para comprobar si los caminos son validos  ( asegurar de dar la ruta correcta)*/

 let http = require('http').createServer(webServer)
 let path = require('path')
 let urls = [
     {
         route: '',
         output: '<h2>Home</h2>'
     },
     {
        route: 'acerca',
        output: '<h2>Acerca</h2>'
     },
     {
        route: 'contacto',
        output: '<h2>Contacto</h2>'
     }
 ]
 function webServer(req, res){

    let message = '<h1>Hola Node.Js </h1>'
    let pathURL = path.basename(req.url)     //basename = regresa la ultima porcion de la ruta similar al comando base UNIX

    urls.forEach(function(pos){
        if(pos.route == pathURL){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(message + pos.output)
        }
    })
    if(!res.finished){    //finished propiedad de  http.request(options[,callback]) ## ver la doc!!!
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end('<h1>Error 404 : Not Found Lagarto</h1>')
    }
 }

 http.listen(3000)

 console.log('Servidor corriendo en http://localhost:3000/')

 // nota: ejecuto el servidor ....Lo que escribo en la barra de navega de mi navegador lo ejecuta en la consola