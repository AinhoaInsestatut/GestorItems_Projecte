class Gestor {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('items')) || []; // Cargar de Local Storage
        this.renderItems();
    }

    saveItems() {
        localStorage.setItem('items', JSON.stringify(this.items));
    }

    renderItems(filter = "") {
        const itemList = document.getElementById("itemList");
        itemList.innerHTML = "";

        const filteredItems = this.filterItems(filter);
        filteredItems.forEach(item => {
            const div = document.createElement("div");
            div.className = "item";

            // Crear contenido dinámico
            if (item.imatge) {
                const img = document.createElement("img");
                img.src = item.imatge;
                img.alt = item.nom;
                div.appendChild(img);
            }

            const title = document.createElement("h3");
            title.textContent = item.nom;
            div.appendChild(title);

            const creationDate = document.createElement("p");
            creationDate.textContent = `Data Creació: ${item.dataCreacio}`;
            div.appendChild(creationDate);

            const modificationDate = document.createElement("p");
            modificationDate.textContent = `Última Modificació: ${item.dataModificacio}`;
            div.appendChild(modificationDate);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.onclick = () => this.deleteItem(item.nom);
            div.appendChild(deleteButton);

            itemList.appendChild(div);
        });
    }

    crearItem(item) {
        if (this.items.some(i => i.nom === item.nom)) {
            alert("El nom ja existeix. Tria un altre.");
            return;
        }
        this.items.push(item);
        this.saveItems();
        this.renderItems();
    }

    modificarItem(nom, nouNom, novaDescripcio, novaImatge) {
        const item = this.items.find(i => i.nom === nom);
        if (item) {
            item.nom = nouNom;
            item.descripcio = novaDescripcio;
            item.imatge = novaImatge || item.imatge;
            item.dataModificacio = new Date().toISOString();
            this.saveItems();
            this.renderItems();
        }
    }

    deleteItem(nom) {
        this.items = this.items.filter(item => item.nom !== nom);
        this.saveItems();
        this.renderItems();
    }

    filterItems(filter) {
        if (!filter) return this.items;
        return this.items.sort((a, b) => {
            if (a.nom === filter) return -1;
            if (b.nom === filter) return 1;
            if (a.nom.startsWith(filter)) return -1;
            if (b.nom.startsWith(filter)) return 1;
            return a.nom.includes(filter) ? -1 : 1;
        }).filter(item => item.nom.includes(filter));
    }
}

const gestor = new Gestor();

document.getElementById("cerca").addEventListener("input", e => {
    gestor.renderItems(e.target.value);
});

document.getElementById("crearItemForm").addEventListener("submit", e => {
    e.preventDefault();
    const nom = document.getElementById("nombre").value;
    const descripcio = document.getElementById("descripcio").value;
    const imatge = document.getElementById("imatge").value;

    const nouItem = imatge
        ? new itemVisual(nom, descripcio, new Date().toISOString(), new Date().toISOString(), imatge)
        : new itemSimple(nom, descripcio, new Date().toISOString(), new Date().toISOString());

    gestor.crearItem(nouItem);
    e.target.reset(); // Limpiar formulario
});