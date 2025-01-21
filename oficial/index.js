class Item {

    constructor(nom, descripcio, url) {
        this.nom = nom;
        this.descripcio = descripcio;
        this.url = url || null;
        this.dataCreacio = new Date();
        this.ultimaModificacio = this.dataCreacio;
    }

}

class GestorItems {

    constructor() {

        this.items = []
        this.itemEditant = null
        this.tipus = null
        this.mostraItems()

    }

    desaItems() {

        localStorage.setItem('items', JSON.stringify(this.items));

    }

    afegeixItem(item) {

        if (this.items.find(i => i.nom === item.nom)) {

            alert('Existeix un ítem amb aquest nom')
            return

        }
        this.items.push(item);
        this.desaItems();
        this.mostraItems();

    }

    eliminaItem(nom) {

        this.items = this.items.filter(item => item.nom !== nom)
        this.desaItems();
        this.mostraItems();

    }

    mostraItems() {

        let llistaItems = document.getElementById('llistatItems')
        llistaItems.innerHTML = ''

        for (let item of this.items) {

            
            if (item.url !== null) {

                this.tipus = "Visual"
                
            } else {
                
                this.tipus = "Simple"

            }
            let itemDiv = `

                <div class="item">
                    <img src="${item.url}" width="20%"><br>
                    <strong>${item.nom}</strong><br>
                    <span>Tipus: ${this.tipus}</span><br>
                    <span>Creat: ${item.dataCreacio}</span><br>
                    <span>Ultima modificació: ${item.ultimaModificacio}</span>

                    <button onclick="gestor.eliminaItem('${item.nom}')">Eliminar</button>
                    <button onclick="gestor.editarItem('${item.nom}')">Editar</button>
                </div>

            `
            llistaItems.innerHTML += itemDiv;
        }
    }

    cercarItems(itemATrobar) {

        itemATrobar = itemATrobar.toLowerCase();
        let itemsFiltrats = this.items.filter(item =>

            item.nom.toLowerCase().includes(itemATrobar)

        )

        let llistaItems = document.getElementById('llistatItems')
        llistaItems.innerHTML = ''

        for (let item of itemsFiltrats) {

            let itemDiv = `
                <div class="item">
                    <img src="${item.url}" width="20%"><br>
                    <strong>${item.nom}</strong><br>
                    <span>Tipus: ${this.tipus}</span><br>
                    <span>Creat: ${item.dataCreacio}</span><br>
                    <span>Ultima modificació: ${item.ultimaModificacio}</span>

                    <button onclick="gestor.eliminaItem('${item.nom}')">Eliminar</button>
                    <button onclick="gestor.editarItem('${item.nom}')">Editar</button>
                </div>
            `
            llistaItems.innerHTML += itemDiv

        }
    }

    crearOEditarItem() {

        let nom = document.getElementById('nom').value
        let descripcio = document.getElementById('descripcio').value
        let url = document.getElementById('imatge').value

        if (!nom) {

            alert('El nom és obligatori')
            return
        }

        if (this.itemEditant) {

            let item = this.items.find(i => i.nom === this.itemEditant)
            if (item) {

                item.descripcio = descripcio
                item.url = url
                item.ultimaModificacio = new Date()
                this.desaItems()
                this.mostraItems()
                this.itemEditant = null
                this.netejaFormulari()
                
            }
            
        } else {
            
            let nouItem = new Item(nom, descripcio, url)
            this.afegeixItem(nouItem)
            this.netejaFormulari()

        }
    }

    editarItem(nom) {

        let item = this.items.find(i => i.nom === nom)
        if (item) {

            this.itemEditant = nom 
            document.getElementById('nom').value = item.nom
            document.getElementById('descripcio').value = item.descripcio
            document.getElementById('imatge').value = item.url || ''

        }
    }

    netejaFormulari() {

        document.getElementById('nom').value = ''
        document.getElementById('descripcio').value = ''
        document.getElementById('imatge').value = ''

    }
}

let gestor = new GestorItems()
