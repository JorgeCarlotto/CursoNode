var myData = require('./main-data'); // recursos publicos name and email. el _phone el guion es para que los desarrolladores sepan q es privado.(buenas practicas)
var Clock = require ('./clock-es6');
var cucu = new Clock();
//console.log(myData.name,myData.email,myData._phone,myData.años);



cucu.on('tictac',function(){
    cucu.theTime()
})

