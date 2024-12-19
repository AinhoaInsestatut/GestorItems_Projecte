class Gestor {

    itemSimple = [
        {"nom" : "", "descripció" : "", "dataCreacio" : "", "dataModificacio" : "" },
        {"nom" : "", "descripció" : "", "dataCreacio" : "", "dataModificacio" : "" },
        
    ]

    itemVisual = [
        {"nom" : "", "descripció" : "", "url" : "", "dataCreacio" : "", "dataModificacio" : "" },
        {"nom" : "", "descripció" : "", "url" : "", "dataCreacio" : "", "dataModificacio" : "" },
    
    ]

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

    crearItem() {

    }

    modificarItem() {

    }

    eliminarItem() {

    }


}
