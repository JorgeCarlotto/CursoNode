/*
Buffers      SON COMO LOS ARRAYS PERO DEL BACK dentro de esto puedo mandar cualquier tipo de obj
    Una tira de bytes ( datos binarios)
    Similar a un array de enteros    
    Tamaño fijo 
    Manipular datos directamente.
        Sockets  (  )
        Streamns (Permiten enviar informacion)
        Implementar protocolos complejos (Protocolos conocidos)
        Manipulacion de Ficheros/ imagenes  
        Criptografía 
*/

var buf = new Buffer (100),
    buf2= new Buffer (26),
    str = '\u00bd + \u00bc = \u00be',
    i = 0

buf.write('abcd',0,4,'ascii'); // en en la documentacion. buf.write(string[, offset[, length]][, encoding])


console.log(buf);
console.log(buf.toString("ascii"));
console.log(str);
console.log(str.length); // xq? 9. Ok. en ascII se cuentan los caracteres. ej: \u00bd = 1Caracter.  
//console.log(Buffer.byteLenght(str,'utf8')); //Esto no me resulto supuestamente tiene que mostrar los bytes que ocupa str.



  

for ( var i = 0 ; i<buf2.length;i++){   // el buffer es como un arreglo
     // 97 en ASCII es a.
    buf2[i] = i + 97  
}
console.log ( buf2.toString('ascii'));// esto imprime el abecedario usando ASCII