//Clase Padre
export default class Personajes {
    constructor(id) {
        let _id = id;
        this.getId = () => _id;
        this.setId = (idNuevo) => _id = idNuevo;

    }
//Métodos
    getId(){
        return this.get_id();
    }

    setid(idNuevo){
        this.setId(idNuevo);
    }
}

