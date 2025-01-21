function renderitzarItems(filtre = '') {

    llistaItems.innerHTML = '';
    const items = gestor.filtrarItems(filtre);
  
    items.forEach(item => {

        const li = document.createElement('li');
        li.innerHTML = `
            ${item.tipus === "visual" ? `<img src="${item.urlImatge}" alt="${item.nom}" />` : ''}
            <strong>${item.nom}</strong>
            <p>${item.descripcio}</p>
            <p>Creat: ${item.dataCreacio}</p>
            <p>Modificat: ${item.dataModificacio}</p>
            <button onclick="editarItem('${item.nom}')">Editar</button>
            <button onclick="eliminarItem('${item.nom}')">Eliminar</button>
        `;
        llistaItems.appendChild(li);

    })
}
  
formulari.addEventListener('submit', e => {

    e.preventDefault();
  
    const nom = document.getElementById('nom').value;
    const descripcio = document.getElementById('descripcio').value;
    const tipus = tipusItem.value;
    const urlImatge = document.getElementById('urlImatge').value;
  
    try {
        if (nomEditant) {
            gestor.actualitzarItem(nomEditant, { descripcio, urlImatge });
            nomEditant = null;
        } else {
            const nouItem = tipus === "visual"
            ? new ItemVisual(nom, descripcio, urlImatge)
            : new ItemSimple(nom, descripcio);
            gestor.afegirItem(nouItem);
        }
        formulari.reset();
        renderitzarItems();
    } catch (error) {
        alert(error.message);
    }
    
});
  