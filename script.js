class Gestor {

    itemsSimples = [];
    itemsVisuales = [];

    constructor(itemSimple, itemVisual) {
        this.itemsSimples = itemSimple;
        this.itemVisual = itemVisual;
    }
    
    llistarItem() {
       if (this.itemsSimples && this.itemsVisuales) {
            console.log(this.itemsSimples);
            console.log(this.itemsVisuales);
        } else {
            console.log("No existe ningún item.");
        }
    }

    modificarItem(dataCreacio) {
        nomMod = document.getElementById("nombreNou")
        descripcioMod = document.getElementById("descNou")
        dataModificacio = new Date()
        if () {
            this.itemsSimples = {"nom" : nomMod, "descripció" : descripcioMod, "dataCreacio" : dataCreacio, "dataModificacio" : dataModificacio }
        }
    }
    crearItem() {
        nom = document.getElementById("nombre").textContent
        descripcio = document.getElementById("descripcio").textContent
        dataCreacio = new Date()
        if(this) {
            this.itemsSimples.push({"nom" : nom, "descripció" : descripcio, "dataCreacio" : dataCreacio, "dataModificacio" : dataCreacio })
        }
    }
    

    eliminarItem() {

    }


}
