class Gestor {

    items = [];

    constructor(items) {
        this.items = items;
    }
    
    llistarItem() {
       if (this.items) {
            console.log(this.items);
        } else {
            console.log("No existe ningún item.");
        }
    }

    modificarItem(dataCreacio) {
        nomMod = document.getElementById("nombreNou")
        descripcioMod = document.getElementById("descNou")
        dataModificacio = new Date()
        if (this) {
            this.items = {"nom" : nomMod, "descripció" : descripcioMod, "dataCreacio" : dataCreacio, "dataModificacio" : dataModificacio }
        }
    }
    crearItem() {
        nom = document.getElementById("nombre").textContent
        descripcio = document.getElementById("descripcio").textContent
        dataCreacio = new Date()
        if(this) {
            this.items.push({"nom" : nom, "descripció" : descripcio, "dataCreacio" : dataCreacio, "dataModificacio" : dataCreacio })
        }
    }
    

    eliminarItem() {
        if()    {
            this.items.slice(0, this.items.length)
        }
    }


}
