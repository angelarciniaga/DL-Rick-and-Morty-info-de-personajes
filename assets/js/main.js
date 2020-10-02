
const llamadoPersonajes =(() => {

    //variables privadas
    let URL_BASE = 'https://rickandmortyapi.com/api/character/';
    let resultado = document.getElementById('resultado');
    let todosUserIDs = respuesta.map(datos => datos.userId);
    //console.log(todosUserIDs);
    let userId = new Set(todosUserIDs);
    //console.log(userId);
    let idUser = [...userId];
    //console.log(idUser);

    let request = async (url) => {
        let result = await fetch(url);
        datos = await result.json();
        return datos;
    }

    let getUser = async (id) => {
        let urlId = `${URL_BASE}/${id}`;
        return request(urlId);
    }

    Promise.all(idUser.map(id => getUser(id))).then(resp => {
        resp.forEach(element => {
            resultado.innerHTML += `
            <div class="my-2 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                <div class="card mx-2">
                <img src="${element.image}" class="card-img-top" alt="${element.name}">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                    </button>
                </div>
                </div>
            </div>
            `;
        });
    })
}).catch(error => console.error(error));