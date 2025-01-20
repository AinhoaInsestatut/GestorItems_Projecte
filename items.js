class Item {

    constructor(nom, descripcio) {

        this.nom = nom;
        this.descripcio = descripcio;
        this.dataCreacio = new Date();
        this.dataModificacio = this.dataCreacio;

    }
  
    actualitzarItemSimple(descripcio) {

        this.descripcio = descripcio
        this.dataModificacio = new Date()

    }

}
  
class ItemSimple extends Item {

    constructor(nom, descripcio) {

        super(nom, descripcio)

    }

}
  
  
class ItemVisual extends Item {

    constructor(nom, descripcio, imatge) {

        super(nom, descripcio)
        this.imatge = imatge

    }
  
    actualitzarItemVisual(descripcio, imatge) {

        super.actualitzarItemSimple(descripcio)
        if (imatge !== undefined) {

            this.imatge = imatge

        }
        this.dataModificacio = new Date()

    }
}

class gestorItems {

    constructor() {
        this.items = []
    }
    
    creaItem(item) {

        if (this.items.find(i => i.nom === item.nom)) {

            document.getElementById("error").innerHTML = "Error: L'item ja existeix"

        } else {

            this.items.push(item)
            guardar();

        }

    }

    actualitzarItem(nom, dades) {
        let item = this.items.find(i => i.nom === nom);
        if (!item) {
            document.getElementById("error").innerHTML = "Error: L'item no existeix"
        }

        if (!item.imatge) {

            item.actualitzarItemVisual(dades.descripcio, dades.imatge)

        } else {

            item.actualitzarItemSimple(dades.descripcio)

        }
    }

    guardar() {

        localStorage.setItem('items', JSON.stringify(this.items));

    }
}