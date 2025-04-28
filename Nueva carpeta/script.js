let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  
  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = "<li>Tu carrito está vacío.</li>";
  } else {
    carrito.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - $${item.precio}`;
      const eliminarBtn = document.createElement("button");
      eliminarBtn.textContent = "Eliminar";
      eliminarBtn.onclick = () => eliminarDelCarrito(index);
      li.appendChild(eliminarBtn);
      lista.appendChild(li);
    });
  }

  totalCarrito.textContent = total;
}

function eliminarDelCarrito(index) {
  const item = carrito.splice(index, 1)[0];
  total -= item.precio;
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  mostrarCarrito();
}
