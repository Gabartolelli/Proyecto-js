const tarjetas = document.getElementById("tarjetas")
const verCarrito = document.getElementById("verCarrito")
const contenedorProducto = document.getElementById("contenedorProducto")

const productos=[
    {
        id:1,
        nombre:" Guardapolvo",
        precio:5000,
        img:"./assets/img/guardapolvo.png"
    },
    {
        id:2,
        nombre:"Ambo",
        precio:4500,
        img:"./assets/img/ambo.jpg"


    },
    {
        id:3,
        nombre:"Gastronomia",
        precio:6000,
        img:"./assets/img/saco chef.jpg"


    },
    {
        id:4,
        nombre:"Magisterio",
        precio:5500,
        img:"./assets/img/ponchos-magist-cat.jpg"


    }
]

let carrito = []

productos.forEach((producto) => {
    let tarjeta = document.createElement("div")
    tarjeta.className="tarjeta"
    tarjeta.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>`

    tarjetas.append(tarjeta)

    let agregarCarrito = document.createElement("button")
    agregarCarrito.innerText = "Agregar al carrito"
    agregarCarrito.className = "agregar"
    
    tarjeta.append(agregarCarrito)

    agregarCarrito.addEventListener("click",()=>{
        carrito.push({
            id:producto.id,
            img:producto.img,
            nombre:producto.nombre,
            precio:producto.precio
        })
    })
});

verCarrito.addEventListener("click", ()=>{
    contenedorProducto.innerHTML=""
    contenedorProducto.style.display = "flex"
    const headerCarrito = document.createElement("div")
    headerCarrito.className = "headerCarrito"
    headerCarrito.innerHTML = `
        <h1 class="tituloHeader">Carrito</h1>
        `

    contenedorProducto.append(headerCarrito)

    const btnCarrito = document.createElement("button")
        btnCarrito.innerHTML = `
        <button class="btnCarrito">X</button>
        `
    btnCarrito.addEventListener("click",()=>{
        contenedorProducto.style.display="none"
    })
    contenedorProducto.append(btnCarrito)

    carrito.forEach((producto)=>{
        let contenedorCarrito = document.createElement("div")
        contenedorCarrito.className = "contenedorCarrito"
        contenedorCarrito.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        `
    
    contenedorProducto.append(contenedorCarrito)
    
})
const total=carrito.reduce((acc,e) => acc + e.precio,0)

    const totalCompra= document.createElement("div")
    totalCompra.className ="totalCompra"
    totalCompra.innerHTML =`Total a pagar: $${total}
    `
    contenedorProducto.append(totalCompra)
})


/*
class Producto {
    constructor(nombre,talle,precio){
        this.nombre = nombre
        this.talle = talle
        this.precio = parseFloat(precio) 
    }
}

const productos = JSON.parse(localStorage.getItem("productos")) ?? []

const crearProducto = () =>{
    const formularioCrear = document.querySelector("#crearProducto")
    formularioCrear.addEventListener("submit",(e)=>{
        e.preventDefault()
        const datos = e.target.children
        const producto = new Producto(datos["nombre"].value,datos["talle"].value,datos["precio"].value)
        productos.push(producto)
        localStorage.setItem("productos",JSON.stringify(productos))
        formularioCrear.reset()
    })
}



const ContenedorProductos = document.querySelector("#productos")
productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.innerHTML = `
        <img src="./assets/img/tv-with-wide-screen.jpg" alt="">
        <h3>${producto.nombre}</h3>
        <input type="text" name="talle" value="${producto.talle}">
        <p> "$"${producto.precio}</p>
        <button class="btn">Agregar al carrito</button>`
ContenedorProductos.append(tarjetaProducto)
})

const verProductos = () =>{
    const ContenedorProductos = document.querySelector("#productos")
    productos.forEach(producto => {
        const tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "producto"
        tarjetaProducto.innerHTML = `
            <img src="./src/img/tv-with-wide-screen.jpg" alt="">
            <form class="editar">
                <input type="text" name="nombre" value="${producto.nombre}">
                <input type="text" name="talle" value="${producto.talle}">
                <input type="number" name="precio" value="${producto.precio}">
                <button class="btn" type="submit">Editar</button>
            </form>
            <button class="btn">Borrar</button>`
    ContenedorProductos.append(tarjetaProducto)
    })
    
}
crearProducto()
verProductos()
/*
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

*/


    
/*
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
*/
