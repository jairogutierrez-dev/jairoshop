import data from "../data/data.json";

//ponemos con minuscula porque esa una funcion no un componente, recibimos la informacion de forma asincronica
export const pedirDatos = () => {

    //promesa que devuele los datos que traemos del json
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}


//funcion que nos entregue productso segun los ingresamos
export const pedirItemPorId = (id) => {
    //recibimos un id de un productos y solo devolvemos ese producto
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }

    })
}