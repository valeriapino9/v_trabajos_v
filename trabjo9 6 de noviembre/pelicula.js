// Objeto literal 
const peliculaDrama = {
    titulo: "Mi primer amor",
    director: "Rob Reiner",
    genero: "Drama",
    duracion: 90,

    //Creamos un metodo 
    NuevaPelicula: function(NuevaPelicula){
        this.genero.push(NuevaPelicula);
    },
  };
  const peliculaTerror = {
    titulo: "Háblame",
    director: "Rhys Frake-Waterfield",
    genero: "Terror",
    duracion: 74,
  };
  const peliculaComedia = {
    titulo: "Hazme el favor",
    director: "Gene Stupnitsky",
    genero: "Comedia",
    duracion: 105,
  };

  function Pelicula(titulo, director, genero, duracion, fechaEstreno){
      this.titulo = titulo;
      this.director = director;
      this.genero = genero;
      this.duracion = duracion;
    }
  //Prototipo peliculas
  Pelicula.prototype.NuevaPelicula = function(NuevaPelicula){
    this.genero.push(NuevaPelicula);
  }

  //Instanciar peliculas 
  const drama = new Pelicula(
    "Mi primer amor", 
    "Rob Reiner", 
    "Drama", 
    90);
    
  const terror = new Pelicula(
    "Háblame",
    "Rhys Frake-Waterfield", 
    "Terror",
    74);

  const comedia = new Pelicula(
    "Hazme el favor",
    "Gene Stupnitsky", 
    "Comedia", 
    105);

  console.log(drama);
  console.log(terror);
  console.log(comedia);
