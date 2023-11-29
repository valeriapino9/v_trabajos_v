//array con los usuarios
var wedkJeany = [
    {
        id: 1,
        nombre: "yhina",
        email: "yhina12@gmail.com",
        cargo: "developer",
        sueldo: 7000
    },
    {
        id: 2,
        nombre: "Nelly",
        email: "Nelly88@gmail.com",
        cargo: "asistente",
        sueldo: 5000
    },
    {
        id: 3,
        nombre: "Kevir",
        email: "Kevir11p@gmail.com",
        cargo: "manager",
        sueldo: 550
    },
    {
        id: 3,
        nombre: "Saul",
        email: "Saul78@gmail.com",
        cargo: "trabajador",
        sueldo: 450
    },
];

// buscar un usuario por nombre
function buscarusuario() {
    var nombreUsuariobuscar = prompt("Introduce el nombre del usuario a buscar:");
    
    // verificar si existe un usuario con el nombre proporcionado
    var usuarioEncontrado = wedkJeany.some(function(usuario) {
        return usuario.nombre === nombreUsuariobuscar;
    });
    
    if (usuarioEncontrado) {
        alert("existe");
    } else {
        alert("no existe");
    }
}

// ...

// Función para mostrar usuarios desarrolladores
function mostrar_devele_personas() {
    var desarrolladores = wedkJeany.filter(function(usuario) {
        return usuario.cargo === "develepersonas";
    });

    if (desarrolladores.length > 0) {
        var resultadoHTML = "<h2>Usuarios Develepersonas:</h2><ul>";
        desarrolladores.forEach(function(usuario) {
            resultadoHTML += "<li>ID: " + usuario.id + ", Nombre: " + usuario.nombre + ", Email: " + usuario.email + "</li>";
        });
        resultadoHTML += "</ul>";
        document.getElementById("resultado").innerHTML = resultadoHTML;
    } else {
        document.getElementById("resultado").innerHTML = "No hay usuarios desarrolladores en el array.";
    }
}
// ...

// Función para mostrar los datos de un usuario por nombre
function mostrarUsuario() {
    var nombreUsuarioABuscar = document.getElementById("nombreUsuario").value;
    
    var usuarioEncontrado = wedkJeany.find(function(usuario) {
        return usuario.nombre === nombreUsuarioABuscar;
    });

    if (usuarioEncontrado) {
        var resultadoHTML = "<p>ID: " + usuarioEncontrado.id + "</p>";
        resultadoHTML += "<p>Nombre: " + usuarioEncontrado.nombre + "</p>";
        resultadoHTML += "<p>Email: " + usuarioEncontrado.email + "</p>";
        resultadoHTML += "<p>Cargo: " + usuarioEncontrado.cargo + "</p>";
        resultadoHTML += "<p>Sueldo: " + usuarioEncontrado.sueldo + "</p>";
        document.getElementById("resultado").innerHTML = resultadoHTML;
    } else {
        document.getElementById("resultado").innerHTML = "El usuario no fue encontrado.";
    }
}