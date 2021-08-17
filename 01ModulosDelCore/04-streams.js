/*
Strems  es un EventEmiter
    'Chorros' de imformacion que se transmiten en 'Pedazos'(Chunks).
    3 tipos : Lectura / Escritura / Duplex (permite lectura y escritura.)   
    Instancias de EventEmitter
    Acceso asíncrono I
    Es raro crear streams directamente
    Pero muchos recursos nos ofrecen este interfaz
    Detras de muchos mecanismos de Node.js
        stdin/stdout
        request de HTTP
        Sockets
        Manipulacion de ficheros/imagenes.
 */

var fs = require('fs')
var readStream = fs.createReadStream('assets/nombres.txt');
var writeStream = fs.createWriteStream('assets/nombres_copia.txt')

// readStream.pipe(writeStream)    // METODO pipe necesita un destino y las opciones que va a ejecutar ...es como tuberia permite desencadenar proceso de lectura y escritura de archivos. 

// readStream.on('data',function(chunk){ //on es un metodo. addEventListener   permite asignar eventos a ciertas funciones  // 'data' mientra aya datos
//     console.log(     
//         'He leido:',
//         chunk.length,
//         'caracteres'
//     ) 

// })   
// readStream.on('end',function(){
//     console.log('termine de leer el archivo')
// })    


readStream.pipe(writeStream)

readStream
    .on('data',function(chunk){ 
    console.log(     
        'He leido:',
        chunk.length,
        'caracteres'
    ) 
}) 
    .on('end',function(){
    console.log('termine de leer el archivo')
}) 
