
// Single Thread.

function singleThread(){

    console.log('----------------------------')
    console.log('EL PROCESO DE NODE,JS')
    console.log('Id del proseso.......... ' + process.pid)
    console.log('Titulo...................' + process.title)
    console.log('Directorio del proceso....' + process.execPath)
    console.log('Directorio Actual.........' + process.cwd())
    console.log('Version de Node...........' + process.version)
    console.log('version de dependencias....' + process.versions)
    console.log('Plataforma (S.O)...........' + process.platform)
    console.log('Arquitectura (S.O).........' + process.arch)
    console.log('Tiempo Activo de NODE......' + process.uptime())
    console.log('Argumentos del procesos....' + process.argv)  
    console.log('----------------------------')
}

singleThread();

