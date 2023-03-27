let nombreApellido
let domicilio 
let localidad 
const envioRegional = 1500
const envioNacional = 2000

const CP = () =>{
    codigoPostal = parseInt(prompt("Ingrese su codigo postal"))
    return codigoPostal
}
let continuar = true

while (continuar){
    nombreApellido = prompt ("Ingrese su nombre y apellido")
    domicilio = prompt ("Ingrese su domicilio")
    localidad = prompt ("Ingrese su lucalidad")
    CP()
    if(codigoPostal <= 4000){
        alert ("Gracias por su compra "+ nombreApellido + " el costo de envio es "+ envioRegional)
}
    else if (codigoPostal > 4000 && codigoPostal<= 9500){
    alert ("Gracias por su compra "+ nombreApellido + " el costo de envio es "+ envioNacional)
}
    else {
    alert("El codigo postal no pertenece a la Republica argentina")

}
continuar= confirm ("¿desea editar algun dato o confirma los ya puesto?")
}