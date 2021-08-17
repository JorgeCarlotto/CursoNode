// https://es.wikipedia.org/wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)   Observer (patrón de diseño)

var EventEmitter = require('events').EventEmitter;
var pub = new EventEmitter()

pub.on('myevent',function(message){
        console.log(message)
})

pub.once('myevent',function(message){
    console.log('Se emite la primera vez:'+ message)
})

pub.emit('myevent','Soy un emisor de eventos')
pub.emit('myevent','volviendo a emitir ')
//pub.removeAllListeners('myevent')
pub.emit('myevent','volviendo a emitir por tercera vez ')
