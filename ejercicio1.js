console.log("EJERCICIO 1 -----------");

function firstPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(Math.floor((Math.random() * 10) + 1))
        }, 2000)
    })
}

function secondPromise(number){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(number*number)
        }, 3000)
    })
}

function thirdPromise(number){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(Math.sqrt(number))
        }, 1000)
        
    })
}

firstPromise().then(
    res => {
        secondPromise(res).then(
            res => thirdPromise(res).then(
                console.log
            )
        )
    }
)

