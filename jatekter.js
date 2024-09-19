//Készíts egy Játéktér osztályt, mely a kisképek megjelenítésére szolgál. 4 kép legyen egymás mellett alapértelmezetten, majd 3, majd 2, mobilnézetben a galériaképek egymás alatt helyezkedjenek el. 

//A játéktér felett legyen az éppen aktuális nagy kép. Ehhez használd a már meglévő Kartya osztályt. 
import Kartya from "./Kartya.js";
export default class Jatekter{
#kisKepekLista = [];
constructor(kisKepekLista, szuloElem){
    this.#kisKepekLista = kisKepekLista;

    this.szuloElem = szuloElem;
    this.szuloElem.empty();

    this.#kartyaMutat();
}

#kartyaMutat(){
    this.#kisKepekLista.forEach((kep) => {

        new Kartya (kep, this.szuloElem)
    });
};
};