class itemSimple{

    constructor(nom, descripcio, dataCreacio, dataUltModificacio){
        this.nom = nom;
        this.descripcio = descripcio;
        this.dataCreacio = dataCreacio;
        this.dataModificacio = dataUltModificacio;
    }

}

class itemVisual extends itemSimple{

    constructor(nom, descripcio, dataCreacio, dataUltModificacio, imatge){
        super(nom, descripcio, dataCreacio, dataUltModificacio);
        this.imatge = imatge;
    }
    
}