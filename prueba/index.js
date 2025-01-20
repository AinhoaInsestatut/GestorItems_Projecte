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

        this.items = JSON.parse(localStorage.getItem('items')) || [];
        this.mostraItems();
        
    }

    desaItems() {

        localStorage.setItem('items', JSON.stringify(this.items));

    }

    afegeixItem(item) {
        if (this.items.some(existing => existing.nom === item.nom)) {

            alert('Ja existeix un ítem amb aquest nom!');
            return;

        }
        this.items.push(item);
        this.desaItems();
        this.mostraItems();
    }

    eliminaItem(nom) {

        this.items = this.items.filter(item => item.nom !== nom);
        this.desaItems();
        this.mostraItems();

    }

    mostraItems() {

        const llistaItems = document.getElementById('item-list');
        llistaItems.innerHTML = '';
        
        this.items.forEach(item => {

            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            const detallsItem = document.createElement('div');
            detallsItem.innerHTML = `
                <strong>${item.nom}</strong><br>
                <span>Creat: ${item.dataCreacio}</span><br>
                <span>Última modificació: ${item.ultimaModificacio}</span>
            `;

            const botoEliminar = document.createElement('button');
            botoEliminar.textContent = 'Eliminar';
            botoEliminar.onclick = () => this.eliminaItem(item.nom);

            itemDiv.appendChild(detallsItem);
            itemDiv.appendChild(botoEliminar);
            llistaItems.appendChild(itemDiv);

        });
    }
}

const gestor = new GestorItems();

document.getElementById('guardar').addEventListener('click', () => {

    const nom = document.getElementById('item-name').value;
    const descripcio = document.getElementById('item-description').value;
    const url = document.getElementById('item-url').value;

    if (!nom) {

        alert('El nom és obligatori!');
        return;

    }

    const nouItem = new Item(nom, descripcio, url);
    gestor.afegeixItem(nouItem);

    document.getElementById('item-name').value = '';
    document.getElementById('item-description').value = '';
    document.getElementById('item-url').value = '';
});

document.getElementById('cercar').addEventListener('input', (e) => {

    const consulta = e.target.value.toLowerCase();
    const itemsFiltrats = gestor.items.filter(item =>

        item.nom.toLowerCase().includes(consulta)

    );

    const llistaItems = document.getElementById('item-list');
    llistaItems.innerHTML = '';
    itemsFiltrats.forEach(item => {

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <strong>${item.nom}</strong><br>
            <span>Creat: ${item.dataCreacio}</span><br>
            <span>Última modificació: ${item.ultimaModificacio}</span>
        `;

        const botoEliminar = document.createElement('button');
        botoEliminar.textContent = 'Eliminar';
        botoEliminar.onclick = () => gestor.eliminaItem(item.nom);

        itemDiv.appendChild(botoEliminar);
        llistaItems.appendChild(itemDiv);

    });
});