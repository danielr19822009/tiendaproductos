 // Arrays para guardar 
    const arrayproductos = [];
    const arrayprecios = [];

    // Captura el evento submit del formulario
    document.querySelector("#form-producto").addEventListener("submit", (evento) => {
      evento.preventDefault();

      // Capturar valores de input
      const nombre = document.querySelector("#nombreproducto").value;
      const precio = parseFloat(document.querySelector("#precioproducto").value);
      const iva = parseFloat(document.querySelector("#valor_iva").value);

      
      arrayproductos.push(nombre);
      arrayprecios.push(precio);

      // Mostrar en consola
      console.log("Productos:", arrayproductos);
      console.log("Precios:", arrayprecios);
      console.log("IVA:", iva);

      // Actualizar lista en el HTML
      mostrarProductos(iva);

      // Limpiar formulario
      document.querySelector("#form-producto").reset();
    });

    // Función para mostrar productos y precios con IVA
    function mostrarProductos(iva) {
      const lista = document.querySelector("#lista-productos");
      lista.innerHTML = ""; // Limpiar antes de mostrar

      for (let i = 0; i < arrayproductos.length; i++) {
        const precioConIva = arrayprecios[i] + (arrayprecios[i] * iva / 100);
        const li = document.createElement("li");
        li.textContent = `${arrayproductos[i]} - $${arrayprecios[i].toFixed(2)} (IVA incluido: $${precioConIva.toFixed(2)})`;
        lista.appendChild(li);
      }
    }