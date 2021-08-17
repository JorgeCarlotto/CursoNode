class Clock{
    constructor(){

        setInterval(()=>{
            this.theTime() 
        },1000)

    }
    
        theTime(){
        let date = new Date ();
        //let hrsAmPM = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours();
        // let hrs = addZero( hrsAMpm);  // si queres usar AM Pm borra la variable de abajo hrs y remplaza por esta linea
        let hrs = addZero( date.getHours());
        let min = addZero( date.getMinutes());
        let sec = addZero( date.getSeconds());
        //let ampm = ( date.getHours() < 12) ? 'am' : 'pm' ; me pasa a PM 
        //let msg = hrs + ':'+ min +':'+ sec //+ ampm:
        let msg =`${hrs}:${min}:${sec}` //falta ${ampm} 

        function addZero(num){
            return (num < 10) ? ('0'+num) : num
        }
    
        console.log(msg)
    }
    
}

module.exports = Clock