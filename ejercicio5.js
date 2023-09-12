console.log("EJERCICIO 5 -----------");
let cancelada = true

let cancel = () => { cancelada = false}
function ejercicio4(){
    return new Promise((resolve, reject)=> {
        // setTimeout(()=>{
        //     cancel()
        // }, 2000)
        setTimeout(()=>{
            if(cancelada){
                resolve("Resuelta")
            }else{
                reject("No se pudo resolver")
            }
        }, 5000)
    })
}

ejercicio4().then(console.log).catch(console.log)