export default class Personajes {
    constructor(id) {
        let _id = id;
        this.getId = () => _id;
        this.setId = (idNuevo) => _id = idNuevo;

    }

    get id(){
        return this.get_id();
    }

    set id(idNuevo){
        this.setId(idNuevo);
    }
}


//let Per = new Personajes(id);

