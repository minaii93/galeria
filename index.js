
import { kepekLista } from './kepek.js';

import Jatekter from './jatekter.js';
import Kartya from './Kartya.js';


const kivalasztottKep = [];

const divElem = $(".kepTarolo");
const kivElem = $(".kisKepek");

new Jatekter(kepekLista,divElem);

 $(window).on("image", (event)=>{
    console.log(event.detail);
    kivalasztottKep.push(event.detail);
    console.log(kivalasztottKep);
    divElem.empty();
    new Kartya(kivalasztottKep,divElem);
 }
)