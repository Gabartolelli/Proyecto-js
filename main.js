
const envioRegional = 1500
const envioNacional = 2000

const cp = () =>{
    do{
    let codigoPostal
    codigoPostal = parseInt(prompt("Ingrese su codigo postal"))
    }while (isNaN (codigoPostal))
    return codigoPostal
}
let continuar = true

while (continuar){
    const nombreApellido = prompt ("Ingrese su nombre y apellido")
    const domicilio = prompt ("Ingrese su domicilio")
    const localidad = prompt ("Ingrese su lucalidad")
    const codigoPostal = cp()
    if(codigoPostal <= 4000){
        alert ("Gracias por su compra "+ nombreApellido + " el costo de envio es "+ envioRegional)
}
    else if (codigoPostal > 4000 && codigoPostal<= 9500){
    alert ("Gracias por su compra "+ nombreApellido + " el costo de envio es "+ envioNacional)
}
    else {
    alert("El codigo postal no pertenece a la Republica argentina")

}
continuar= confirm ("¿desea editar algun dato?")
}
alert("Su envio esta siendo procesado")