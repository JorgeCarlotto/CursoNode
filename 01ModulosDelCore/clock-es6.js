
var Clock = (function(){
    var EventEmitter = require('events').EventEmitter
    var inherits = require('util').inherits
    
    var Clock = function(){
        //var self = this
    
        setInterval(()=>{
            //console.log('hola')
            //self.emit('tictac')
            this.emit('tictac') 
        },1000)
    }
    
    inherits(Clock,EventEmitter);
    
    Clock.prototype.theTime = function (){
        var date = new Date ();
        //var hrsAmPM = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours();
        // var hrs = addZero( hrsAMpm);  // si queres usar AM Pm borra la variable de abajo hrs y remplaza por esta linea
        var hrs = addZero( date.getHours());
        var min = addZero( date.getMinutes());
        var sec = addZero( date.getSeconds());
        //var ampm = ( date.getHours() < 12) ? 'am' : 'pm' ; me pasa a PM 
        //var msg = hrs + ':'+ min +':'+ sec //+ ampm:
        msg =`${hrs}:${min}:${sec}` //falta ${ampm} 

        function addZero(num){
            return (num < 10) ? ('0'+num) : num
        }
    
        console.log(msg)
    }
    return Clock
})()

module.exports = Clock;

