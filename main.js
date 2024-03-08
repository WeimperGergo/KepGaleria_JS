import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.querySelector(".galeria");


/* írd bele az összeálíltott html képsorozatot */
//let kepTartalom = htmlOsszeAllit(KEPEK);
galeriaELEM.innerHTML = htmlOsszeAllit(KEPEK);


/*2. feladat  A .nagykep divben lévő img elem megfogása */
/* A .nagykep div megfogása */
const nagyKEPELEM = document.querySelector(".nagykep img");


/*3. feladat  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kisKEPELEM = document.querySelectorAll(".kep img");
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let i = 0; i < kisKEPELEM.length; i++) {
    //kisKEPELEM[i].addEventListener("click", kepCsere);
        kisKEPELEM[i].addEventListener(
        "click", function (event){
        /* Így is lehet használni, név nélkül a függvényt */
        nagyKEPELEM.src=event.target.src;
        // ELEM.forráskód := Kiváltó esemény forráskódja
        gombIndex = i;
        // Az indexet mindig átállítjuk a gombok funkcionalitása érdekében
        }
    );
}



/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
function kepCsere(event){
    /* Bármely html elem bármely attributumát meg tujuk fogni ELEM.attributumnev */
    nagyKEPELEM.src=event.target.src;
    gombIndex = i;
    // ELEM.forráskód := Kiváltó esemény forráskódja
}



/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
const balGOMBELEM = document.querySelector(".bal");
const jobbGOMBELEM = document.querySelector(".jobb");
let gombIndex = 0;
balGOMBELEM.addEventListener("click", function (){
    if(0 < gombIndex){
        gombIndex--;
        nagyKEPELEM.src=kisKEPELEM[gombIndex].src;
    } 
    /*gombIndex--;
    gombIndex = kisKEPELEM.length;
    nagyKEPELEM.src=kisKEPELEM[gombIndex].src;*/
    //gombIndex = kisKEPELEM.length % gombIndex;
});
jobbGOMBELEM.addEventListener("click", function (){
    /*if(gombIndex < kisKEPELEM.length){
        gombIndex++;
        nagyKEPELEM.src=kisKEPELEM[gombIndex].src;
    }*/
    gombIndex++;
    gombIndex = gombIndex % kisKEPELEM.length;
    nagyKEPELEM.src=kisKEPELEM[gombIndex].src;
});

