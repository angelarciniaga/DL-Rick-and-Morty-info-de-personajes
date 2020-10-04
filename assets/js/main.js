import DetallesPersonajes from "./detallesPersonajes.js";

//Función IIFE
let llamadaPersonajes = (() => {
    const urlApi = 'https://rickandmortyapi.com/api/character/';
    const resultados = document.getElementById('resultado');
    let datosPersonajes;
  
    let obtenerPersonajes = async () =>{
      try{
        let respuesta = await fetch(urlApi);
        let datos = await respuesta.json();
        datosPersonajes = datos;
        console.log(datosPersonajes);
        return datos;
      }
      catch(error){
        console.error(error);
      }
    };
  
    return {
      mostrar: async () => {
        const personajes = await obtenerPersonajes();
        const respuestaPersonajes = await personajes.results;
        respuestaPersonajes.forEach(e => {
          resultados.innerHTML += `
            <div class="my-2 text-center col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <img src="${e.image}" class="card-img-top" alt="${e.name}">
                <div class="card-body">
                    <h5 class="card-title text-color-dark">${e.name}</h5>
                    <h5 class="card-title text-color-dark">${e.species}</h5>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Ver más
                    </button>
                </div>
            </div>
          `
        });
      }
    }
})();
  
llamadaPersonajes.mostrar();

setTimeout(function () {
  $( "div" ).removeClass( "spinner-border" )
},1900);

setTimeout(function () {
  let numeroPersonajes = this.results;
  document.getElementById('cantidadPersonajes').innerHTML = numeroPersonajes
},2000)


