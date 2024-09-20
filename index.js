

import { kepekLista } from './kepek.js';
import Jatekter from './jatekter.js';
import Kartya from './Kartya.js';



const divElem = $(".kepTarolo");
const kivElem = $(".kisKepek");

new Jatekter(kepekLista, divElem);


$(window).on("image", (event) => {
    const kivalasztottKep = event.detail;
    console.log("Kiválasztott kép:", kivalasztottKep);

    
    kivElem.empty();
    new Kartya(kivalasztottKep, kivElem, false);
});
