export default class Kartya {
    //Készíts egy Kartya osztályt, amely egyetlen kép megjelenítésére szolgál. 
#kep = {}
#szuloElem;

constructor(kep, szuloElem, nagyKepElem) {
    this.#kep = kep;
    this.szuloElem = szuloElem;
    this.kepElem = $(".kivalaszt:last");

    this.#kepLetrehoz();
    this.#esemenyKezelo();
   
    
  
    
    
};

#esemenyKezelo(){
    this.kepElem.on('click', () => {
       
       console.log(this);

       const e = new CustomEvent("kivalaszt", {detail:this.#kep});
       window.dispatchEvent(e);
       
    });

}

#kepLetrehoz() {
    this.szuloElem.append(`
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="kisKep kivalaszt">
                <div class="img-body">
                    <h3 class="img-title">${this.#kep.cim}</h3>
                    <img class="image" src="${this.#kep.eleresiUt}" alt="${this.#kep.cim}">
                    <p class="img-leir">${this.#kep.leiras}</p>
                </div>
            </div>
        </div>
    `);
};


//     nagyKepLetrehoz() {
//         const nagyKepElem = $(`<div class="nagyKep">
//             <h3>${this.#kep.cim}</h3>
//             <img src="${this.#kep.eleresiUt}" alt="${this.#kep.cim}">
//             <p>${this.#kep.leiras}</p>
//         </div>`);

        
//         $(".kepTarolo").html(nagyKepElem);
//     }
}






