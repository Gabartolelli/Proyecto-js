
const carrito = []
let total = 0
const ambo = () =>{
    const nombre = ("Ambo")
    const talle = prompt( "Ingrese su talle: S/M/L/XL/XXL")
    const color = prompt("Ingrese color (blanco/negro)")
    const precio = 2500
    carrito.push({
        nombre:nombre,
        talle:talle,
        color:color,
        precio:precio
    })
}
const guardapolvo = () =>{
    const nombre= ("Guardapolvo")
    const talle = prompt( "Ingrese su talle: S/M/L/XL/XXL")
    const color = prompt("Ingrese color (rojo/azul)")
    const precio = 3500
    carrito.push({
        nombre:nombre,
        talle:talle,
        color:color,
        precio:precio
    })
}
const magisterio = () =>{
    const nombre =("Magisterio")
    const talle = prompt( "Ingrese su talle: S/M/L/XL/XXL")
    const color = prompt("Ingrese color")
    const precio = 3000
    carrito.push({
        nombre:nombre,
        talle:talle,
        color:color,
        precio:precio
    })
}
const overol = () =>{
    const nombre = ("Overol")
    const talle = prompt( "Ingrese su talle: S/M/L/XL/XXL")
    const color = prompt("Ingrese color (azul/gris)")
    const precio = 5000
    carrito.push({
        nombre:nombre,
        talle:talle,
        color:color,
        precio:precio
    })
}
const verProductos = () =>{
    carrito.forEach((producto)=>{
         alert("usted ha comprado: "+ producto.nombre +" talle: "+ producto.talle+" color: "+ producto.color + " precio: " +producto.precio)
     })
 }
 const totalCarrito = () =>{
 total = carrito.reduce((total,producto,codigoPostal) => total+ producto.precio+codigoPostal,0)
 }




    

const vender = (producto) =>{
    
    while(producto){
        const accion = prompt ("Seleccione el producto que desea comprar: 1:Ambo/2:Guardapolvo infantil/3:Magisterio/4:Overoles.")
   
    switch(accion){
        case "1":
            ambo()
            break
        case "2":
            guardapolvo()
            break
        case "3":
            magisterio()
            break
        case "4":
            overol ()
            break
        default:
            alert("Producto inexistente")
    } 
    producto = confirm ("¿desea seguir comprando?")
}
}
vender (true)
verProductos()
totalCarrito()






const envioRegional = 1500
const envioNacional = 2000
const cp = () =>{
    let codigoPostal
    do{
    
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
        alert("Gracias por su compra "+ nombreApellido + " el costo de envio es "+ envioRegional)
    }
    else if (codigoPostal > 4000 && codigoPostal<= 9500){
        alert("Gracias por su compra "+ nombreApellido + " el costo de envio es "+ envioNacional)
    }
    else {
        alert("El codigo postal no pertenece a la Republica argentina")
    }
    continuar= confirm ("¿desea editar algun dato?")
}
alert("total a pagar: $"+ total)
alert("Muchas gracias por su compra, su producto sera despachado en breve")

