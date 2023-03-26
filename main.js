const codigoPostal = (mensaje) => {
    let CP
    do{
        CP = parseInt ( prompt (mensaje))
     }while (isNaN (CP))
}
let costoEnvio = true
while (costoEnvio){
let nombreApellido = prompt ("Ingrese su nombre y apellido")
let domicilio = prompt ("Ingrese su domicilio")
let localidad = prompt ("Ingrese su localidad")
let CP = codigoPostal ("ingrese su codigo postal")
let provincia = prompt ("Ingrese su provincia")
const envioRegional = 1500.00
const envioNacional = 2000.00

if(CP <= 4000) {
    alert("Gracias por su compra "+ nombreApellido + " su costo de envio es de "+ envioRegional)
    
}

else if (CP> 4000){
    alert("Gracias por su compra "+ nombreApellido + " su costo de envio es de "+ envioNacional)
}
break

}
