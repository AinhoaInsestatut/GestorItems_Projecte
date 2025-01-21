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

        this.items = [] || localStorage.getItem('items')
        this.mostraItems()
        
    }

    desaItems() {

        localStorage.setItem('items', JSON.stringify(this.items))

    }

    afegeixItem(item) {

        let existeix = this.items.find(i => i.nom === item.nom)
        if (existeix) {

            alert('Existeix un item amb aquest nom')
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

        let llistaItems = document.getElementById('llistaItems')
        llistaItems.innerHTML = ''

        for (let i = 0; i < this.items.length; i++) {

            let item = this.items[i];
            let itemDiv = document.createElement('div')

            itemDiv.className = 'item'
            itemDiv.innerHTML = `

                <strong>${item.nom}</strong><br>
                <span>Creat: ${item.dataCreacio}</span>
                <br>
                <span>Última modificació: ${item.ultimaModificacio}</span>
                
            `
                
            let botoEliminar = document.createElement('button')
            botoEliminar.textContent = 'Eliminar'

            botoEliminar.addEventListener('click', () => {

                this.eliminaItem(item.nom)

            })

            itemDiv.append(botoEliminar)
            llistaItems.append(itemDiv)

        }
    }
}

let gestor = new GestorItems()

document.getElementById('guardar').addEventListener('click', () => {

    let nom = document.getElementById('nomItem').value
    let descripcio = document.getElementById('descripcioItem').value
    let url = document.getElementById('urlImatge').value

    if (!nom) {

        alert('El nom és obligatori!')
        return;

    }

    let nouItem = new Item(nom, descripcio, url)
    gestor.afegeixItem(nouItem)

    document.getElementById('nomItem').value = ''
    document.getElementById('descripcioItem').value = ''
    document.getElementById('urlImatge').value = ''

})

document.getElementById('cercar').addEventListener('input', (e) => {

    let consulta = e.target.value.toLowerCase()
    let itemsFiltrats = gestor.items.filter(item =>

        item.nom.toLowerCase().includes(consulta)

    )

    let llistaItems = document.getElementById('llistaItems')
    llistaItems.innerHTML = ''

    for (let item of itemsFiltrats) {

        let itemDiv = document.createElement('div')
        itemDiv.className = 'item'
        itemDiv.innerHTML = `
            <strong>${item.nom}</strong><br>
            <span>Creat: ${item.dataCreacio}</span><br>
            <span>Última modificació: ${item.ultimaModificacio}</span>
        `

        let botoEliminar = document.createElement('button')
        botoEliminar.textContent = 'Eliminar'
        botoEliminar.addEventListener('click', () => gestor.eliminaItem(item.nom))

        itemDiv.append(botoEliminar)
        llistaItems.append(itemDiv)

    }

})