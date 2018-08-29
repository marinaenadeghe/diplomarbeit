/*
* Idee:
* suche das passende Element und füge alle Festivals hinzu
* nötig: Festivalangaben
* filter nach datum / Kanton: will ich im php lösen und dann einfach passenden string bzw objekt via js in HTML
*
* Todo: gemerkte festivals in ticketbestellen - entweder hier oder seperat (fix out of scope)
* */


/*
Da Codeschnipsel auf der Festivalseite:
check ob id xy vorhanden, falls ja dann ausführen
 */

let festivaluebersicht = document.getElementById('festivaluebersicht');
if (festivaluebersicht !==null) {

    /*
    Für die Filterfunktionen
     */
    let filterDatum = document.querySelector('.filter__datum')

    //für die Filterfunktion nach Kanton
    let ktAG = document.querySelector('#AG')
    let ktAR = document.querySelector('#AR')
    let ktAI = document.querySelector('#AI')
    let ktBL = document.querySelector('#BL')
    let ktBS = document.querySelector('#BS')
    let ktBE = document.querySelector('#BE')
    let ktFR = document.querySelector('#FR')
    let ktGE = document.querySelector('#GE')
    let ktGL = document.querySelector('#GL')
    let ktGR = document.querySelector('#GR')
    let ktJU = document.querySelector('#JU')
    let ktLU = document.querySelector('#LU')
    let ktNE = document.querySelector('#NE')
    let ktNW = document.querySelector('#NW')
    let ktOW = document.querySelector('#OW')
    let ktSG = document.querySelector('#SG')
    let ktSH = document.querySelector('#SH')
    let ktSZ = document.querySelector('#SZ')
    let ktSO = document.querySelector('#SO')
    let ktTG = document.querySelector('#TG')
    let ktTI = document.querySelector('#TI')
    let ktUR = document.querySelector('#UR')
    let ktVD = document.querySelector('#VD')
    let ktVS = document.querySelector('#VS')
    let ktZG = document.querySelector('#ZG')
    let ktZH = document.querySelector('#ZH')


    let alleKantone = [ktAG, ktAR, ktAI, ktBL, ktBS, ktBE, ktFR, ktGE, ktGL,ktGR, ktJU, ktLU, ktNE, ktNW, ktOW, ktSG, ktSH, ktSZ, ktSO, ktTG, ktTI, ktUR, ktVD, ktVS, ktZG, ktZH]


    //AlleFestivals



    /*
    Eventlistener für Filterfunktionen
     */
    filterDatum.addEventListener('click', sortDatum)

    for (let i=0;  i < alleKantone.length; ++i) {
        if (alleKantone[i] != null) {
            alleKantone[i].addEventListener('click', sortKantone)
        }
    }

}