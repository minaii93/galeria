export default class Kartya {
    //Készíts egy Kartya osztályt, amely egyetlen kép megjelenítésére szolgál. 
#kep = {}

constructor(kep, szuloElem) {
    this.#kep = kep;
    this.szuloElem = szuloElem;
    this.#kepLetrehoz();
    this.#esemenyKezelo();
    
    
};

#esemenyKezelo(){

};

#kepLetrehoz(){
    this.szuloElem.append(`<div class="col-lg-4 col-md-3", col-sm2, col-xs-1>
        <div class = "kisKep">
            <div class= "img-body">
            <h3 class= "img-title">${this.#kep.cim}</h3>
            <img class = "image" src="${this.#kep.eleresiUt}" alt="${this.#kep.cim}>
            <p class = "img-leir">${this.#kep.leiras}</p>
        
        
        </div>
        
        
        
        
        </div>`)
};
}