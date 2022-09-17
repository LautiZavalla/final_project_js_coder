// ----->  JAVASCRIPT CREW ONE PRESUPUESTO <-----

// -----> DECLARACION DE CLASES <-----

class Rubros {
    constructor(rubroID, rubro, valorMO, valorMAT){
        this.id = rubroID
        this.rubro = rubro,
        this.valorMO = valorMO,
        this.valorMAT = valorMAT
    }
}

// -----> VARIABLES <-----

// -----> DECLARACION DE LOS PRECIOS DE MATERIAL Y MANO DE OBRA DE CADA RUBRO <-----
// ---> La idea es que el propietario o los que controlen el sitio web entren a esta sección para modificar los precios de cada rubro a medida que varia.
// ---> MO significa Mano de obra / MAT significa Materiales ----> Cada precio equivale al valor del m2 del mismo.
// ---> Para cambiar el precio dependiendo el rubro y sector, revisar la sección OBJETOS <---

let precioMO = 0
let precioMat = 0
let sumaPrecio = 0
// -----> FUNCIONES <-----
// --> Funcion para calcular el presupuesto en btnCalcular previamente asignado en DOM.

function CalcularPrespuesto(){
    let InputNombre = document.getElementById("nombreUser")
    let InputEmail = document.getElementById("exampleInputEmail1")
    let InputRubro = document.getElementById("selectRubro")
    let InputM2 = document.getElementById("m2User")
    localStorage.setItem("Correo usuario", InputEmail.value)   //-----> Seteamos para guardar en el local storage el correo electronico ingresado por el usuario.
    if(InputRubro.value == 1){
                            nombreRubro = rubro1.rubro
                            precioMO = rubro1.valorMO
                            precioMat = rubro1.valorMAT
                            finMO = precioMO * InputM2.value
                            finMat = precioMat * InputM2.value
                            sumaPrecio = precioMO + precioMat
                            precioFinal = sumaPrecio * InputM2.value
                            let rubroJSON = JSON.stringify(rubro1)
                            localStorage.setItem("Rubro seleccionado", rubroJSON) //-----> A través de JSON guardamos el objeto del rubro seleccionado según el input colocado por el usuario.
                            
                            Swal.fire({
                                title: `${InputNombre.value} hemos creado tu presupuesto!`,
                                text: `Usted a seleccionado el rubro ${nombreRubro}, la cantidad ingresada de m2 es: ${InputM2.value}, el valor del material sería de ${finMat} USD, el valor de la mano de obra sería de ${finMO} USD, quedando el presupuesto un valor total de ${precioFinal} USD`,
                                footer: `Se lo estaremos enviando a su correo ${InputEmail.value}`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })
    }else if(InputRubro.value == 2){
                            nombreRubro = rubro2.rubro
                            precioMO = rubro2.valorMO
                            precioMat = rubro2.valorMAT
                            finMO = precioMO * InputM2.value
                            finMat = precioMat * InputM2.value
                            sumaPrecio = precioMO + precioMat
                            precioFinal = sumaPrecio * InputM2.value
                            let rubroJSON = JSON.stringify(rubro2)
                            localStorage.setItem("Rubro seleccionado", rubroJSON) 

                            Swal.fire({
                                title: `${InputNombre.value} hemos creado tu presupuesto!`,
                                text: `Usted a seleccionado el rubro ${nombreRubro}, la cantidad ingresada de m2 es: ${InputM2.value}, el valor del material sería de ${finMat} USD, el valor de la mano de obra sería de ${finMO} USD, quedando el presupuesto un valor total de ${precioFinal} USD`,
                                footer: `Se lo estaremos enviando a su correo ${InputEmail.value}`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })
    }else if(InputRubro.value == 3){
                            nombreRubro = rubro3.rubro
                            precioMO = rubro3.valorMO
                            precioMat = rubro3.valorMAT
                            finMO = precioMO * InputM2.value
                            finMat = precioMat * InputM2.value
                            sumaPrecio = precioMO + precioMat
                            precioFinal = sumaPrecio * InputM2.value
                            let rubroJSON = JSON.stringify(rubro3)
                            localStorage.setItem("Rubro seleccionado", rubroJSON) .

                            Swal.fire({
                                title: `${InputNombre.value} hemos creado tu presupuesto!`,
                                text: `Usted a seleccionado el rubro ${nombreRubro}, la cantidad ingresada de m2 es: ${InputM2.value}, el valor del material sería de ${finMat} USD, el valor de la mano de obra sería de ${finMO} USD, quedando el presupuesto un valor total de ${precioFinal} USD`,
                                footer: `Se lo estaremos enviando a su correo ${InputEmail.value}`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })
    }else if(InputRubro.value == 4){
                            nombreRubro = rubro4.rubro
                            precioMO = rubro4.valorMO
                            precioMat = rubro4.valorMAT
                            finMO = precioMO * InputM2.value
                            finMat = precioMat * InputM2.value
                            sumaPrecio = precioMO + precioMat
                            precioFinal = sumaPrecio * InputM2.value
                            let rubroJSON = JSON.stringify(rubro4)
                            localStorage.setItem("Rubro seleccionado", rubroJSON)

                            Swal.fire({
                                title: `${InputNombre.value} hemos creado tu presupuesto!`,
                                text: `Usted a seleccionado el rubro ${nombreRubro}, la cantidad ingresada de m2 es: ${InputM2.value}, el valor del material sería de ${finMat} USD, el valor de la mano de obra sería de ${finMO} USD, quedando el presupuesto un valor total de ${precioFinal} USD`,
                                footer: `Se lo estaremos enviando a su correo ${InputEmail.value}`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })
    }else if(InputRubro.value == 5){
                            nombreRubro = rubro5.rubro
                            precioMO = rubro5.valorMO
                            precioMat = rubro5.valorMAT
                            finMO = precioMO * InputM2.value
                            finMat = precioMat * InputM2.value
                            sumaPrecio = precioMO + precioMat
                            precioFinal = sumaPrecio * InputM2.value
                            let rubroJSON = JSON.stringify(rubro5)
                            localStorage.setItem("Rubro seleccionado", rubroJSON) 

                            Swal.fire({
                                title: `${InputNombre.value} hemos creado tu presupuesto!`,
                                text: `Usted a seleccionado el rubro ${nombreRubro}, la cantidad ingresada de m2 es: ${InputM2.value}, el valor del material sería de ${finMat} USD, el valor de la mano de obra sería de ${finMO} USD, quedando el presupuesto un valor total de ${precioFinal} USD`,
                                footer: `Se lo estaremos enviando a su correo ${InputEmail.value}`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })   
    }else if(InputRubro.value == 6){
                            nombreRubro = rubro6.rubro
                            precioMO = rubro6.valorMO
                            precioMat = rubro6.valorMAT
                            finMO = precioMO * InputM2.value
                            finMat = precioMat * InputM2.value
                            sumaPrecio = precioMO + precioMat
                            precioFinal = sumaPrecio * InputM2.value
                            let rubroJSON = JSON.stringify(rubro6)
                            localStorage.setItem("Rubro seleccionado", rubroJSON) 

                            Swal.fire({
                                title: `${InputNombre.value} hemos creado tu presupuesto!`,
                                text: `Usted a seleccionado el rubro ${nombreRubro}, la cantidad ingresada de m2 es: ${InputM2.value}, el valor del material sería de ${finMat} USD, el valor de la mano de obra sería de ${finMO} USD, quedando el presupuesto un valor total de ${precioFinal} USD`,
                                footer: `Se lo estaremos enviando a su correo ${InputEmail.value}`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })  
    }else if(InputRubro.value == 7){
                            nombreRubro = rubro7.rubro
                            precioMO = rubro7.valorMO
                            precioMat = rubro7.valorMAT
                            finMO = precioMO * InputM2.value
                            finMat = precioMat * InputM2.value
                            sumaPrecio = precioMO + precioMat
                            precioFinal = sumaPrecio * InputM2.value
                            let rubroJSON = JSON.stringify(rubro7)
                            localStorage.setItem("Rubro seleccionado", rubroJSON) 

                            Swal.fire({
                                title: `${InputNombre.value} hemos creado tu presupuesto!`,
                                text: `Usted a seleccionado el rubro ${nombreRubro}, la cantidad ingresada de equipos es: ${InputM2.value}, el valor del material sería de ${finMat} USD, el valor de la mano de obra sería de ${finMO} USD, quedando el presupuesto un valor total de ${precioFinal} USD`,
                                footer: `Se lo estaremos enviando a su correo ${InputEmail.value}`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })  
    }else{
                            nombreRubro = rubro8.rubro
                            precioMO = rubro8.valorMO
                            precioMat = rubro8.valorMAT
                            finMO = precioMO * InputM2.value
                            finMat = precioMat * InputM2.value
                            sumaPrecio = precioMO + precioMat
                            precioFinal = sumaPrecio * InputM2.value
                            let rubroJSON = JSON.stringify(rubro8)
                            localStorage.setItem("Rubro seleccionado", rubroJSON) 

                            Swal.fire({
                                title: `${InputNombre.value} hemos creado tu presupuesto!`,
                                text: `Usted a seleccionado el rubro ${nombreRubro}, la cantidad ingresada de equipos es: ${InputM2.value}, el valor del material sería de ${finMat} USD, el valor de la mano de obra sería de ${finMO} USD, quedando el presupuesto un valor total de ${precioFinal} USD`,
                                footer: `Se lo estaremos enviando a su correo ${InputEmail.value}`,
                                icon: 'success',
                                confirmButtonText: 'OK'
                              })
}
}

// ------> DOM <------
// ----> Agrego un evento al botón de calcular presupuesto de manera semántica.

let botonCalcular = document.getElementById("btnCalcular")

botonCalcular.addEventListener("click", CalcularPrespuesto)
// ------> OBJETOS <------

const rubro1 = new Rubros(1, "durlock", 30, 35,)
const rubro2 = new Rubros(2, "revestimiento durlock", 20, 15, 2)
const rubro3 = new Rubros(3, "mampostería", 15, 20, 3)
const rubro4 = new Rubros(4, "revoque sobre mampostería", 10, 5, 4)
const rubro5 = new Rubros(5, "pintura interior", 10, 10, 5)
const rubro6 = new Rubros(6, "pintura exterior", 15, 10, 6)
const rubro7 = new Rubros(7, "instalación aires acondicionados", 25, 30, 7)
const rubro8 = new Rubros(8, "services aires acondicionados", 10, 5, 8)

// -----> ARRAY <-----
// ---> Cargo el array con los rubros creados anteriormente.

let rubrosCrewOne = [rubro1, rubro2, rubro3, rubro4, rubro5, rubro6, rubro7,rubro8]

// -----> Fetch <-----
// -----> Aca realizo un fetch, obteniendo el valor del dolar oficial, setean un timeout con un sweetalert que le avise al usuario el precio el dolar.
fetch("https://api-dolar-argentina.herokuapp.com/api/dolaroficial")
.then(response => response.json())
.then(data => {
    setTimeout(() => Swal.fire({
        title: `PRECIO DEL DOLAR`,
        text: `El precio del dolar actualmente es de ${data.compra} ARS`,
        icon: 'info',
        confirmButtonText: 'OK'
      }), 10000)
})

