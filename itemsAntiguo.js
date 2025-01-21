class Item {

    constructor(nom, descripcio, tipus) {

        this.nom = nom;
        this.descripcio = descripcio;
        this.tipus = tipus;
        this.dataCreacio = new Date();
        this.dataModificacio = this.dataCreacio;

    }
  
    actualitzar(dades) {

        this.descripcio = descripcio
        this.dataModificacio = new Date()
        if (this.tipus === "visual") {

            this.imatge = dades.imatge

        }

    }

}
  
class ItemSimple extends Item {

    constructor(nom, descripcio) {

        super(nom, descripcio, 'simple')

    }

}
  
  
class ItemVisual extends Item {

    constructor(nom, descripcio, imatge) {

        super(nom, descripcio, 'visual')
        this.imatge = imatge

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
            this.guardar();

        }

    }

    actualitzarItem(nom, dades) {

        let item = this.items.find(i => i.nom === nom);
        if (!item) {
            document.getElementById("error").innerHTML = "Error: L'item no existeix"
        }

        item.actualitzar(dades)
        this.guardar()

    }

    eliminarItem(nom) {

        this.items = this.items.filter(item => item !== nom)
        this.guardarItems()

    }

    filtrarItems(input) {
        if (!input)    {
            return this.items
        }

        inputMinuscules = input.toLowerCase()
        return this.items.filter(i => i.nom.toLowerCase().includes(inputMinuscules))
    }

    guardar() {

        localStorage.setItem('items', JSON.stringify(this.items));

    }
}