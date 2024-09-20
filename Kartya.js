// export default class Kartya {
//     //Készíts egy Kartya osztályt, amely egyetlen kép megjelenítésére szolgál. 

export default class Kartya {
    #kep = {}

    constructor(kep, szuloElem, isSmallImage = true) {
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.#kepLetrehoz(isSmallImage);
        if (isSmallImage) {
            this.#esemenyKezelo(); 
        }
    }

    #esemenyKezelo() {
        this.szuloElem.find('.image:last').on('click', () => {
            const e = new CustomEvent("image", { detail: this.#kep });
            window.dispatchEvent(e);
        });
    }

    #kepLetrehoz(isSmallImage) {
        const sizeClass = isSmallImage ? "col-lg-3 col-md-4 col-sm-6" : "col-12"; 
        this.szuloElem.append(`
            <div class="${sizeClass}">
                <div class="kisKep">
                    <div class="img-body">
                        <h3 class="img-title">${this.#kep.cim}</h3>
                        <img class="image" src="${this.#kep.eleresiUt}" alt="${this.#kep.cim}">
                        <p class="img-leir">${this.#kep.leiras}</p>
                    </div>
                </div>
            </div>
        `);
    }
}







