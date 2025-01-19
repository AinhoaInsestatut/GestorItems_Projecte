class itemSimple{

    constructor(nom, descripcio, dataCreacio, dataUltModificacio){
        this.nom = nom;
        this.descripcio = descripcio;
        this.dataCreacio = new Date;
        this.dataModificacio = this.dataCreacio;
    }

}

class itemVisual extends itemSimple{

    constructor(nom, descripcio, dataCreacio, dataUltModificacio, imatge){
        super(nom, descripcio, dataCreacio, dataUltModificacio);
        this.imatge = imatge;
    }
    
}