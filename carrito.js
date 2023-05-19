    const mirarCarrito = () =>{
        contenedorProducto.innerHTML=""
        contenedorProducto.style.display = "flex"
        const headerCarrito = document.createElement("div")
        headerCarrito.className = "headerCarrito"
        headerCarrito.innerHTML = `
            <h1 class="tituloHeader">Carrito</h1>
        `
        contenedorProducto.append(headerCarrito)

        const btnCarrito = document.createElement("h1")
        btnCarrito.innerText = "X"
        btnCarrito.className = "btnCarrito"
        btnCarrito.addEventListener("click",()=>{
        contenedorProducto.style.display="none"


    })
    headerCarrito.append(btnCarrito)


    carrito.forEach((producto)=>{
        let contenedorCarrito = document.createElement("div")
        contenedorCarrito.className = "contenedorCarrito"
        contenedorCarrito.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>$${producto.precio * producto.cantidad}</p>
        <span id="eliminarProducto${producto.id}" class="eliminarProducto">❌</span>
        `
    
    contenedorProducto.append(contenedorCarrito)
    
    const eliminarBtn = document.querySelector("#eliminarProducto"+ producto.id)
    eliminarBtn.addEventListener("click",() => eliminarProducto(producto.id))
    
    const BorrarProducto = document.querySelector("#eliminarProducto" + producto.id)
     BorrarProducto.addEventListener("click", () =>{
        Swal.fire({
            icon:`warning`,
            text:`¡¡Eliminaste el producto!!`,
            showConfirmButton: false,
            background:'#000',
            color:"#fff",
            timer: 1500,

        })
     })
  
   })

    const total=carrito.reduce((acc,e) => acc + e.precio*e.cantidad,0)

    const totalCompra= document.createElement("div")
    totalCompra.className ="totalCompra"
    totalCompra.innerHTML =`Total a pagar: $${total}
    `
    contenedorProducto.append(totalCompra)


}

const eliminarProducto = (id)=>{
    const index = carrito.findIndex((producto) => producto.id == id)
    carrito.splice(index,1)
    saveLocal()
    mirarCarrito()
    contadorCarrito()
}
 
verCarrito.addEventListener("click", mirarCarrito)

const contadorCarrito = () =>{
    cantidadCarrito.style.display = "block"
    cantidadCarrito.innerText = carrito.length
}





