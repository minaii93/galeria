
import { kepekLista } from './kepek.js';

import Jatekter from './jatekter.js';

const kivalasztottKep = [];

const divElem = $(".kepTarolo");
const kivElem = $(".kisKepek");

new Jatekter(kepekLista,divElem);

// $(window).on("kivalaszt")