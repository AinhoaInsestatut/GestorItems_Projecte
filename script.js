class Gestor {

    itemSimple = [];
    itemVisual = [];

    constructor(itemSimple, itemVisual) {
        this.itemSimple = itemSimple;
        this.itemVisual = itemVisual;
    }
    
    llistarItem() {
       if (this.itemSimple && this.itemVisual) {
            console.log(this.itemSimple);
            console.log(this.itemVisual);
        } else {
            console.log("No existe ningún item.");
        }
    }

    modificarItem(dataCreacio) {
        
        dataModificacio = new Date()
        if () {
            this.itemSimple. = {"nom" : nomMod, "descripció" : descripcioMod, "dataCreacio" : dataCreacio, "dataModificacio" : dataModificacio }
        }
    }
    crearItem() {
        nom = document.getElementById("nombre").textContent
        descripcio = document.getElementById("descripcio").textContent
        dataCreacio = new Date()
        if(this) {
            this.itemSimple.push({"nom" : nom, "descripció" : descripcio, "dataCreacio" : dataCreacio, "dataModificacio" : dataCreacio })
        }
    }
    

    eliminarItem() {

    }


}
