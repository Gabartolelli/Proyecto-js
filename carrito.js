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
        <p>$${producto.precio}</p>
        <span id = "eliminarProducto${producto.id}" class="eliminarProducto">❌</span>
        `
    
    contenedorProducto.append(contenedorCarrito)
    
})

const total=carrito.reduce((acc,e) => acc + e.precio,0)

    const totalCompra= document.createElement("div")
    totalCompra.className ="totalCompra"
    totalCompra.innerHTML =`Total a pagar: $${total}
    `
    contenedorProducto.append(totalCompra)


}
    
const eliminarProducto = (id)=>{
    const eliminarBtn=document.querySelector("#eliminarProducto" + id)
    eliminarBtn.addEventListener("click",()=>{
        const index = productos.findIndex((producto) => producto.id == id)
        productos.splice(index,1)
    })
}

verCarrito.addEventListener("click", mirarCarrito)

eliminarProducto(0)


