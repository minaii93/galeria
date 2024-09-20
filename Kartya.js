export default class Kartya {
    //Készíts egy Kartya osztályt, amely egyetlen kép megjelenítésére szolgál. 
#kep = {}

constructor(kep, szuloElem, esemenyKezelo) {
    this.#kep = kep;
    this.szuloElem = szuloElem;
    this.#kepLetrehoz();
    this.#esemenyKezelo();
    
    
};

#esemenyKezelo(){
    this.szuloElem.find('.image:last').on('click', () => {
       
       console.log(this);

       const e = new CustomEvent("image", {detail:this.#kep});
       window.dispatchEvent(e);
    });

}

#kepLetrehoz(){
    this.szuloElem.append(`<div class="col-lg-3 col-md-4 col-sm6 col-xs12">
        <div class = "kisKep">
            <div class= "img-body">
             <h3 class= "img-title">${this.#kep.cim}</h3>
            <img class = "image" src="${this.#kep.eleresiUt}" alt="${this.#kep.cim}>
            <p class = "img-leir">${this.#kep.leiras}</p>
        
        
        </div>
        
        
        
        
        </div>`)
};
}