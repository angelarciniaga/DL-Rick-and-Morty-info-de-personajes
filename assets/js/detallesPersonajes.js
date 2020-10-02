import Personajes from "./personajes";

export default class DetallesPersonajes extends Personajes {
    constructor(id, name, status, species, gender, created, origin, location, episode) {
        super(id);
        let _name = name;
        let _status = status;

        this.getName = () => _name;
        this.setName = (nuevoName) => _name = nuevoName;
        
        this.getStatus = () => _status;
        this.setStatus = (nuevoStatus) => _status = nuevoStatus;

        this.species = species;
        this.gender = gender;
        this.created = created;
        this.origin = origin;
        this.location = location;
        this.episode = episode;
    }

    get name(){
        return this.getName();
    }
    set name(nuevoName){
        this.setName(nuevoName);
    }

    get status(){
        return this.getStatus();
    }
    set status(nuevoStatus){
        this.setStatus(nuevoStatus)
    }

    infoModal(){
        return resultados.innerHTML `
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ul>
                    <li>Status: </li>
                    <li>Species: </li>
                    <li>Type: </li>
                    <li>Location: </li>
                    <li>Created: </li>
                    <li>Episode: </li>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
        `
    }
}