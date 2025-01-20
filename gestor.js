class itemSimple{

    constructor(nom, descripcio, dataCreacio, dataUltModificacio){
        this.nom = nom;
        this.descripcio = descripcio;
        this.dataCreacio = new Date;
        this.dataModificacio = this.dataCreacio;
    }

}

class itemVisual extends itemSimple{

    constructor(nom, descripcio, dataCreacio, dataUltModificacio, imatge){
        super(nom, descripcio, dataCreacio, dataUltModificacio);
        this.imatge = imatge;
    }
    
}

class Gestor {

    constructor() {
        this.items = [];
    }
    
    guardarItems() {
        localStorage.setItem('items', JSON.stringify(this.items));
    }

    actualitzaItem(nom, nouDades) {
        let item = this.items.find(i => i.nom === nom);
        if (item) {

            if (nouDades.nom !== null) {
                item.nom = nouDades.nom
            }
            if (nouDades.descripcio !== null) {

                item.descripcio = nouDades.descripcio
            }
            if (nouDades.imatge !== null) {
                item.imatge = nouDades.imatge
            }
            item.dataModificacio = new Date();
    
        }
        this.guardaDades();
    }

    crearItem(item) {

        if(this.items.find(i => i.nom === item.nom)) {

            console.log("Ja existeix un item amb aquest nom.");
            return;

        } else {

            new itemSimple = {
                nom: document.getElementById('nom'),
                descripcio: document.getElementById('descripcio'),
                imatge: document.getElementById('imatge'),
                dataCreacio: new Date(),
                dataModificacio: dataCreacio
            }
        }


        this.items.push(item);
        this.guardarItems();
    }
    

    eliminarItem(nom) {
        this.items = this.items.filter(item => item !== nom);
        this.guardarItems();
    }


}

