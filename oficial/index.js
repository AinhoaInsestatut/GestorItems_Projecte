class Item {

    constructor(nom, descripcio, url) {
        this.nom = nom;
        this.descripcio = descripcio;
        this.url = url || null;
        this.dataCreacio = new Date().toLocaleString();
        this.ultimaModificacio = this.dataCreacio;
    }

}

class GestorItems {

    constructor() {

        this.items = []
        this.mostraItems()
    }

    desaItems() {

        localStorage.setItem('items', JSON.stringify(this.items))

    }

    afegeixItem(item) {

        let existeix = this.items.find(i => i.nom === item.nom);
        if (existeix) {

            alert('Existeix un ítem amb aquest nom!');
            return;
        }

        this.items.push(item)
        this.desaItems()
        this.mostraItems()
    }

    eliminaItem(nom) {
        this.items = this.items.filter(item => item.nom !== nom)
        this.desaItems()
        this.mostraItems()
    }

    mostraItems() {

        let llistaItems = document.getElementById('llistatItems')
        llistaItems.innerHTML = ''

        for (let item of this.items) {

            let itemDiv = `
                <div class="item">
                    <strong>${item.nom}</strong><br>
                    <span>Creat: ${item.dataCreacio}</span><br>
                    <span>Última modificació: ${item.ultimaModificacio}</span>
                    <button onclick="gestor.eliminaItem('${item.nom}')">Eliminar</button>
                </div>
            `

            llistaItems.innerHTML += itemDiv 
        }
    }

    cercarItems(consulta) {

        consulta = consulta.toLowerCase()

        let itemsFiltrats = this.items.filter(item =>

            item.nom.toLowerCase().includes(consulta)

        )

        let llistaItems = document.getElementById('llistatItems')
        llistaItems.innerHTML = ''

        for (let item of itemsFiltrats) {

            let itemDiv = `
                <div class="item">
                    <strong>${item.nom}</strong><br>
                    <span>Creat: ${item.dataCreacio}</span><br>
                    <span>Última modificació: ${item.ultimaModificacio}</span>
                    <button onclick="gestor.eliminaItem('${item.nom}')">Eliminar</button>
                </div>
            `

            llistaItems.innerHTML += itemDiv
        }
    }

    crearItem(event) {

        event.preventDefault()

        let nom = document.getElementById('nom').value
        let descripcio = document.getElementById('descripcio').value
        let url = document.getElementById('imatge').value

        if (!nom) {

            alert('El nom és obligatori!')

        }

        let nouItem = new Item(nom, descripcio, url)
        this.afegeixItem(nouItem)

        document.getElementById('formulari').reset()
    }
}

let gestor = new GestorItems();