
export const listarArray = (list) => {
    return new Promise((resolve, reject) => {
        //se simula lo que tardaria una peticion a una api
        setTimeout(()=>{
            resolve(list)
            // reject("Rechazado")
        }, 500)

    })
}