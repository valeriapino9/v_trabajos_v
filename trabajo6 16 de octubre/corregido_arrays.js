// METODOS PARA EL RECORRIDO DE ARRAYS


        var objetos = [
            { nombre: "Bici", precio: 3000 },
            { nombre: "TV", precio: 2500 },
            { nombre: "Libro", precio: 320 },
            { nombre: "celular", precio: 10000 },
            { nombre: "laptop", precio: 2000 },
            { nombre: "teclado", precio: 500 },
            { nombre: "audifonos", precio: 200 }
        ];

        // Método 1: Método filter 
        var productosCaros = objetos.filter(function(objeto) {
            return objeto.precio <=400;
        });
        console.log("Productos Caros:", productosCaros);

        // Método 2: Método map 
        var nombresProductos = objetos.map(function(objeto) {
            return objeto.nombre;
        });
        console.log("Nombres de Productos:", nombresProductos);

        // Método 3: Método find 
        var productoEncontrado = objetos.find(function(objeto) {
            return objeto.nombre === "TV";
        });
        console.log("Producto Encontrado:", productoEncontrado);

        // Método 4: Método forEach 
        objetos.forEach(function(objeto) {
            console.log("Producto: " + objeto.nombre + ", Precio: " + objeto.precio);
        });

        // Método 5: Método some 
        var existeobjetos = objetos.some(function(objeto) {
            return objeto.precio < 250;
        });
        console.log( existeobjetos);