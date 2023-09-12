console.log("EJERCICIO 3 -----------");
let functions = [
    waitResolve("Resuelto"),
    sumarLento(2, 4),
    sumarRapido(3, 5)
]

function waitResolve(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, 2000)
    })
}

function sumarLento(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2)
        },
            2000)
    })
}

function sumarRapido(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2)
        },
            1000)
    })
}


function promesasParalelas(functions) {
    return new Promise((resolve, reject) => {
        Promise.all(functions).then((res)=> {
            resolve(res)
        })
    })
}


promesasParalelas(functions).then((res)=>{
    console.log(res);
})