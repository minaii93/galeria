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

};

#kepLetrehoz(){
    this.szuloElem.append(`
        
        `)
};
}