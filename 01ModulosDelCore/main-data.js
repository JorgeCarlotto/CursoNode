let name = 'Jorge';
let email = 'jorgemcarlotto@gmail.com';
let _phone = '1155840072'; // el estardar dice q si el dato es privado la variable debe ponerce guion bajo antes;
let edad = 32

module.exports.name = name; // module.exports.CUALQUIERcOSA = variable que quiero exportar
module.exports.email = email;    // CUALQUIERcOSA Es el nombre que voy a usar en mi archivo externo!!!!
//_phone es un archivo privado ! los desarrolladores no quieren hacerlo publico a otras app, solo lo queremos usar aca.
module.exports.años = edad; 