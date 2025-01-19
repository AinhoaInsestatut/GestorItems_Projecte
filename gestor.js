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
            item.dataModificacio = new Date().toISOString();
    
        }
        this.guardaDades();
    }

    modificarItem(dataCreacio) {
        nomMod = document.getElementById("nombreNou")
        descripcioMod = document.getElementById("descNou")
        dataModificacio = new Date()
        if (this) {
            this.items = {"nom" : nomMod, "descripció" : descripcioMod, "dataCreacio" : dataCreacio, "dataModificacio" : dataModificacio }
        }
    }
    crearItem(item) {

        if(this.items.find(i => i.nom === item.nom)) {

            console.log("Ja existeix un item amb aquest nom.");
            return;

        }
        this.items.push({"nom" : nom, "descripció" : descripcio, "dataCreacio" : dataCreacio, "dataModificacio" : dataCreacio })
        this.guardarItems();
    }
    

    eliminarItem(nom) {
        this.items = this.items.filter(item => item !== nom);
        this.guardarItems();
    }


}

