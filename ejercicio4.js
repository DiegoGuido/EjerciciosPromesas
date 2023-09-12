console.log("EJERCICIO 4 -----------");
function chainPromises(number) {

    for (let index = 1; index <= number; index++) {
        let time = index*1000
             new Promise((resolve, reject)=> {
                setTimeout(()=>{
                    resolve(index)
                }, time)
            }).then(console.log)
    }

    return new Promise((resolve, reject) => {
        let time = number*1000
        setTimeout(()=>{
            resolve("Todas las promesas se resolvieron")
        }, time)
    })
}

chainPromises(9).then((res) => {
    console.log(res);
})