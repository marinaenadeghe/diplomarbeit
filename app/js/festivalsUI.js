/*
* Idee:
* suche das passende Element und füge alle Festivals hinzu
*
* Todo: später gemerkte festivals in ticketbestellen - entweder hier oder seperat
* */


/*
Da Codeschnipsel auf der Festivalseite:
check ob id xy vorhanden, falls ja dann ausführen
 */

let festivaluebersicht = document.getElementById('festivaluebersicht');

if (festivaluebersicht !== null) {

/*
Kanton (=kt): bei click -> storage -> aus DB holen, abfüllen
 */
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


    let alleKantone = [ktAG, ktAR, ktAI, ktBL, ktBS, ktBE, ktFR, ktGE, ktGL, ktGR, ktJU, ktLU, ktNE, ktNW, ktOW, ktSG, ktSH, ktSZ, ktSO, ktTG, ktTI, ktUR, ktVD, ktVS, ktZG, ktZH]


    /*
    Eventlistener für Filterfunktionen via DB (fkt in storageFestivals):
     */
    //Todo: Umbau wenn array wirklich von DB kommt

    for (let i = 0; i < alleKantone.length; ++i) {
        if (alleKantone[i] != null) {
            alleKantone[i].addEventListener('click', sortKantone)
        }
    }



    /*
    Datum: bei click an storage für Sortierung, dann Inhalt ul löschen,
    dann abfüllen (soll über DB laufen
     */
    let filterDatum = document.querySelector('.filter__datum')
    filterDatum.addEventListener('click', () => {
        sortDatum();
        document.querySelector('#css_uebersicht').innerHTML = '';
        abfuellen();
    });


    //Todo sowas für filter Musikrichung, style anhand allFMS


    //Todo: wenn von DB läuft, löschen
    //aktuellstes zuerst bei initial Abfüllung
    alleFestivals.sort(function (a, b) {
        a = new Date(a.beginn);
        b = new Date(b.beginn);
        return a < b ? -1 : a > b ? 1 : 0;
    });




//Festivals in HTML einfügen (-> extract -> method -> funktion abfüllen), diese für gefiltertes wieder abfüllen

    function abfuellen() {

        alleFestivals.forEach(function (Festival) {

            //Datumsausgabe soll so was sein: 20. Jul - 23. Jul 2018
            let beginn = datumFormatierenBeginn(Festival.beginn)
            let ende = datumFormatierenEnde(Festival.ende)

            let liMusicStyle = Festival.musikrichtung

            //Verlinkung zur Detailseite
            let detailSeite = zurDetailseite(Festival.id)

            //Todo: verschiedene Festivalbilder

            //Musikfilter: class & svg
            let liFilterMusik = musikIcon(Festival.musikrichtung)

            let liName = festivalName(Festival.name)

            let liOrt = festivalLocation(Festival.ort, Festival.kanton)

            let liDatum = festivalDatum(beginn, ende)

            //merken (ist das ganze listenelement)
            let merken = festivalMerken(Festival.gemerkt)


            let ul = document.querySelector('#css_uebersicht')

            let li = document.createElement('li')
            li.classList = 'festival__list--item festival__list--' + liMusicStyle;

            li.innerHTML = (detailSeite + liFilterMusik + liName + liOrt + liDatum + merken);

            ul.appendChild(li);

        });
    }


    //Datumsformatierung für die UI
    function datumFormatierenBeginn(datum) {

        let date = new Date(datum);

        let day = date.getDate()
        let month = date.getMonth() + 1
        month = monatskuerzel(month)

        return (day + '. ' + month)
    }

    function datumFormatierenEnde(datum) {
        let date = new Date(datum);

        let day = date.getDate()
        let month = date.getMonth() + 1
        month = monatskuerzel(month)

        let year = date.getFullYear()

        return (day + '. ' + month + ' ' + year)
    }

    function monatskuerzel(month) {

        if (month == 1){
            month = 'Jan';
        }else if(month == 2){
            month = 'Feb';
        }else if(month == 3){
            month = 'Mar';
        }else if(month == 4){
            month = 'Apr';
        }else if(month == 5){
            month = 'Mai';
        }else if(month == 6){
            month = 'Jun';
        }else if(month == 7){
            month = 'Jul';
        }else if(month == 8){
            month = 'Aug';
        }else if(month == 9){
            month = 'Sep';
        }else if(month == 10){
            month = 'Okt';
        }else if(month == 11){
            month = 'Nov';
        }else if(month == 12){
            month = 'Dez';
        }else {
            console.log('hi')
        }
        return(month)
    }

    //da einheitliches Festivalbild hier inkl.
    function zurDetailseite(id) {
        return ('<a href="festival_' + id + '.html">\n' +
            '                    <ul>\n' +
            '\n' +
            '                        <li class="teaser__liste item__hidden--tablet">\n' +
            '                            <span role="img" aria-label="Festivalbild"> </span>\n' +
            '                        </li>')
    }

    //Function Musicicon für richtiges svg
    function musikIcon(musicStyle) {

        if (musicStyle === 'indie') {
            return ('' +
                '<li class="filter filter__music filter__music--indie">' +
                '<svg width="20px" height="15px" viewBox="0 0 20 15" version="1.1"\n' +
                '                                 xmlns="http://www.w3.org/2000/svg"  <title>music_indie</title>\n' +
                '                                <desc>Created with Sketch.</desc>\n' +
                '                                <defs></defs>\n' +
                '                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                '                                    <g class="icon__music icon__music--indie"\n' +
                '                                       transform="translate(-14.000000, -17.000000)">\n' +
                '                                        <g transform="translate(14.000000, 17.000000)">\n' +
                '                                            <path d="M19.9956137,11.4430794 C19.9956137,11.9978172 19.471021,12.5224959 18.9162402,12.5224959 C18.2066919,12.5224959 17.7852631,12.8665194 17.1789218,13.4169569 C16.5725805,13.9673944 15.7598252,14.8360535 14.4439356,14.8360535 C13.1280459,14.8360535 12.3109903,13.9673944 11.7089493,13.4169569 C11.102565,12.8622191 10.706938,12.5224959 9.99743269,12.5224959 C9.28788436,12.5224959 8.89225742,12.8665194 8.28591612,13.4169569 C7.67957482,13.9673944 6.86681946,14.8360535 5.55092983,14.8360535 C4.2350402,14.8360535 3.41798455,13.9673944 2.81594354,13.4169569 C2.20960224,12.8622191 1.81397529,12.5224959 1.10442696,12.5224959 C0.549689178,12.5224959 0.0250534434,12.023619 0.0250534434,11.4430794 C0.0250534434,10.8625399 0.549689178,10.3637059 1.10442696,10.3895077 C2.57942743,10.3895077 3.60289714,11.2324081 4.26084196,11.8387064 C4.91878677,12.4450907 5.2628102,12.7073655 5.57673159,12.7073655 C5.89065297,12.7073655 6.20887464,12.4450477 6.86681946,11.8387064 C7.52476427,11.2323651 8.55253428,10.3895077 10.0232345,10.3895077 C11.4939346,10.3895077 12.4959029,11.2324081 13.1796064,11.8387064 C13.8375943,12.4450907 14.1816177,12.7073655 14.4955391,12.7073655 C14.8094605,12.7073655 15.1276821,12.4450477 15.7856269,11.8387064 C16.4435718,11.2323651 17.4713418,10.3895077 18.9419989,10.3895077 C19.471021,10.3637059 19.9956137,10.8926419 19.9956137,11.4430794 L19.9956137,11.4430794 Z M1.07436792,2.12864499 C1.78391625,2.12864499 2.17954319,2.44256637 2.78588449,2.99730416 C3.39222579,3.55204194 4.20498115,4.41640081 5.52087078,4.41640081 L5.75738689,4.41640081 C6.93996744,4.31319379 7.67961782,3.52193989 8.25585707,2.99730416 C8.7804928,2.52427194 9.15031799,2.20605026 9.73085754,2.12864499 C9.80826281,2.12864499 9.88996837,2.10284323 9.9931754,2.10284323 C10.7027237,2.10284323 11.0983507,2.41676461 11.704692,2.9715024 C11.8638028,3.10481148 12.0186134,3.25962202 12.203569,3.44453462 C12.7582637,3.91756684 13.4420533,4.41640081 14.4397213,4.41640081 L14.6762374,4.41640081 C15.8588179,4.31319379 16.5984253,3.52193989 17.1747076,2.99730416 C17.6993433,2.52427194 18.0691685,2.20605026 18.649708,2.12864499 C18.7271133,2.12864499 18.8088189,2.10284323 18.9120689,2.10284323 C19.045378,2.10284323 19.2001455,2.07704147 19.3076528,2.02543796 C19.3592564,1.9996362 19.4410049,1.97383444 19.4926084,1.92223093 C19.7806851,1.73731833 19.9914424,1.39759519 19.9914424,1.05357176 C19.9914424,0.920262682 19.9656407,0.765452137 19.9140371,0.657944815 L19.9140371,0.657944815 C19.8624336,0.524635735 19.7806851,0.421428705 19.677521,0.313921382 C19.6259175,0.262317867 19.574314,0.210714352 19.5184102,0.180612302 C19.4668067,0.154810545 19.4152032,0.10320703 19.3334976,0.0774052723 C19.2560923,0.0516035149 19.2001455,0.0258017574 19.1227833,0.0258017574 C19.045378,6.11108377e-16 18.9894742,6.11108377e-16 18.9121119,6.11108377e-16 L18.649751,6.11108377e-16 C17.3338614,0.10320703 16.387797,0.84285741 15.7556539,1.41909666 C15.1751144,1.94373239 14.861193,2.23615231 14.5730734,2.28775583 C14.5214698,2.28775583 14.4956681,2.31355758 14.4698663,2.31355758 C14.3924611,2.31355758 14.3107555,2.28775583 14.2333502,2.26195407 C14.0742394,2.1845488 13.863525,2.05123972 13.6270089,1.81472361 C13.4936568,1.71151658 13.3388893,1.5782075 13.1797785,1.41909666 C12.5218336,0.812755359 11.4940636,0 10.0233635,0 L9.76104559,0 C8.44515596,0.10320703 7.49909152,0.84285741 6.86694847,1.41909666 C6.28640892,1.94373239 5.97248754,2.23615231 5.68436792,2.28775583 C5.6327644,2.28775583 5.60696264,2.31355758 5.58116089,2.31355758 C5.50375562,2.31355758 5.42205005,2.28775583 5.34464478,2.26195407 C5.26723951,2.23615231 5.15973218,2.15874704 5.05652515,2.10284323 C4.8458108,1.96953415 4.60929469,1.73301804 4.26527126,1.44489842 C3.60732644,0.838557117 2.57955644,0.0258017574 1.10885626,0.0258017574 L1.00564923,0.0258017574 L1.00564923,0.0258017574 C0.45091145,0.0516035149 -0.0479225272,0.580539542 0.00368098764,1.13097703 C-0.0308073615,1.68141453 0.519630131,2.15444675 1.07436792,2.12864499 L1.07436792,2.12864499 Z M18.8904814,5.18185295 L18.6281206,5.18185295 C17.3122309,5.28505998 16.3661665,6.05051212 15.7340234,6.60094961 C15.1534839,7.12558535 14.8395625,7.41800526 14.5514429,7.46960878 C14.4998394,7.46960878 14.4740376,7.49541054 14.4482359,7.49541054 C14.3450718,7.49541054 14.2117197,7.44380702 14.0784107,7.36210146 C13.8418946,7.22879238 13.5537749,6.99227627 13.158148,6.60094961 C12.5002032,5.99460831 11.4724762,5.1517509 10.001776,5.1517509 L9.73945812,5.1517509 C8.42356849,5.25495793 7.47750405,6.02041007 6.845361,6.57084756 C6.26482145,7.0954833 5.95090007,7.38790321 5.66278045,7.43950673 C5.61117693,7.43950673 5.58537517,7.46530849 5.55957342,7.46530849 C5.45636639,7.46530849 5.32305731,7.41374797 5.18974823,7.33199941 C5.13814471,7.30619765 5.0865412,7.28039589 5.03063739,7.25459413 C4.81992304,7.12128505 4.58340693,6.88476894 4.23938349,6.59664932 C3.58143868,5.99030802 2.55366868,5.14745061 1.0829685,5.14745061 C0.528230716,5.14745061 0.00359498179,5.64628459 0.00359498179,6.22682413 C0.00359498179,6.80736367 0.528230716,7.30619765 1.0829685,7.28039589 C1.79251683,7.28039589 2.18814378,7.62441932 2.79448508,8.17485682 C3.40082638,8.7295946 4.21358174,9.59395347 5.52947137,9.59395347 L5.76598748,9.59395347 C6.94856803,9.49078945 7.68821841,8.69949255 8.26445766,8.17485682 C8.63428285,7.83083338 8.94820423,7.56851552 9.29222766,7.43950673 C9.36963293,7.41370497 9.42553674,7.38790321 9.50294201,7.36210146 C9.58034728,7.3362997 9.66205285,7.3362997 9.73945812,7.31049794 C9.81686339,7.31049794 9.89856896,7.28469618 10.001776,7.28469618 C10.7113243,7.28469618 11.1069513,7.62871962 11.7132926,8.17915711 C11.8724034,8.31246619 12.0272139,8.46727673 12.2121265,8.65218933 C12.7668643,9.12522155 13.4506539,9.62405552 14.4482789,9.62405552 L14.684795,9.62405552 C15.8673755,9.5208915 16.6070259,8.7295946 17.1833081,8.20495887 C17.5531333,7.86093543 17.8670117,7.59861757 18.2110351,7.46960878 C18.2884834,7.44376402 18.3443872,7.41800526 18.4217495,7.39220351 C18.4991118,7.36640175 18.5808603,7.36640175 18.6582656,7.34059999 C18.7356709,7.34059999 18.8173764,7.31479823 18.9205835,7.31479823 C19.4753213,7.31479823 20,6.81596426 20,6.26122647 C19.9956137,5.70648869 19.471021,5.18185295 18.8904814,5.18185295 L18.8904814,5.18185295 Z"></path>\n' +
                '                                        </g>\n' +
                '                                    </g>\n' +
                '                                </g>\n' +
                '                            </svg>\n' +
                '</li>')
        } else if (musicStyle === 'jazz') {
            return (' <li class="filter filter__music filter__music--jazz">' +
                '<svg width="20px" height="18px" viewBox="0 0 20 18" version="1.1"\n' +
                '                                 xmlns="http://www.w3.org/2000/svg"  <title>music_jazz</title>\n' +
                '                                <desc>Created with Sketch.</desc>\n' +
                '                                <defs></defs>\n' +
                '                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                '                                    <g class="icon__music icon__music--jazz"\n' +
                '                                       transform="translate(-14.000000, -15.000000)">\n' +
                '                                        <g transform="translate(14.000000, 15.000000)">\n' +
                '                                            <path d="M14.1142857,17.3563429 C12.2738286,17.3563429 10.432,16.6555429 9.0304,15.2553143 C7.29417143,13.5204571 4.47314286,13.5218286 2.74102857,15.2553143 C2.2048,15.7915429 1.33805714,15.7915429 0.801828571,15.2553143 C0.2656,14.7190857 0.2656,13.8523429 0.801828571,13.3161143 C3.60365714,10.5142857 8.16502857,10.5142857 10.9696,13.3161143 C12.7044571,15.0496 15.5254857,15.0482286 17.2589714,13.3161143 C17.7952,12.7798857 18.6619429,12.7798857 19.1981714,13.3161143 C19.7344,13.8523429 19.7344,14.7190857 19.1981714,15.2553143 C17.7979429,16.6555429 15.9561143,17.3563429 14.1142857,17.3563429 Z M14.1142857,11.8706286 C12.2738286,11.8706286 10.432,11.1698286 9.0304,9.7696 C7.29417143,8.03474286 4.47314286,8.03611429 2.74102857,9.7696 C2.2048,10.3058286 1.33805714,10.3058286 0.801828571,9.7696 C0.2656,9.23337143 0.2656,8.36662857 0.801828571,7.8304 C3.60365714,5.02857143 8.16502857,5.02857143 10.9696,7.8304 C12.7044571,9.56388571 15.5254857,9.56251429 17.2589714,7.8304 C17.7952,7.29417143 18.6619429,7.29417143 19.1981714,7.8304 C19.7344,8.36662857 19.7344,9.23337143 19.1981714,9.7696 C17.7979429,11.1698286 15.9561143,11.8706286 14.1142857,11.8706286 Z M14.1142857,6.38491429 C12.2738286,6.38491429 10.432,5.68411429 9.0304,4.28388571 C7.29417143,2.54902857 4.47314286,2.5504 2.74102857,4.28388571 C2.2048,4.82011429 1.33805714,4.82011429 0.801828571,4.28388571 C0.2656,3.74765714 0.2656,2.88091429 0.801828571,2.34468571 C3.60365714,-0.455771429 8.16502857,-0.458514286 10.9696,2.34468571 C12.7044571,4.07817143 15.5254857,4.0768 17.2589714,2.34468571 C17.7952,1.80845714 18.6619429,1.80845714 19.1981714,2.34468571 C19.7344,2.88091429 19.7344,3.74765714 19.1981714,4.28388571 C17.7979429,5.68411429 15.9561143,6.38491429 14.1142857,6.38491429 Z"></path>\n' +
                '                                        </g>\n' +
                '                                    </g>\n' +
                '                                </g>\n' +
                '                            </svg>' +
                '</li>\n' +
                '                       ')
        } else if (musicStyle === 'electronic') {
            return ('<li class="filter filter__music filter__music--electronic">\n' +
                '                        <svg width="20px" height="16px" viewBox="0 0 20 16" version="1.1"\n' +
                '                             xmlns="http://www.w3.org/2000/svg" <title>music_electronic</title>\n' +
                '                            <desc>Created with Sketch.</desc>\n' +
                '                            <defs></defs>\n' +
                '                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                '                                <g class="icon__music icon__music--electronic"\n' +
                '                                   transform="translate(-14.000000, -16.000000)">\n' +
                '                                    <g transform="translate(14.000000, 16.000000)">\n' +
                '                                        <path d="M19.2690405,12.8779366 L0.713728923,12.8779366 C0.520318305,12.8779366 0.353114982,12.9486299 0.211806498,13.0898994 C0.0706542421,13.2310516 1.77635684e-15,13.3983721 1.77635684e-15,13.5916265 L1.77635684e-15,15.0190062 C1.77635684e-15,15.2122606 0.0706542421,15.3795811 0.211845555,15.5210458 C0.353271211,15.6620419 0.520552648,15.7327742 0.71376798,15.7327742 L19.2690796,15.7327742 C19.4621777,15.7327742 19.6296545,15.6620419 19.7709629,15.5210458 C19.9121152,15.3796202 19.9828476,15.2122997 19.9828476,15.0190062 L19.9828476,13.5916265 C19.9828476,13.3983721 19.9121152,13.2310516 19.7709629,13.0898603 C19.6296154,12.9485909 19.4621387,12.8779366 19.2690405,12.8779366 Z M19.2690405,8.59599273 L4.99579,8.59599273 C4.80237938,8.59599273 4.63517606,8.66672508 4.49390663,8.80799451 C4.35259815,8.94910771 4.28206108,9.11658443 4.28206108,9.30976071 L4.28206108,10.7371014 C4.28206108,10.9303558 4.35263721,11.0978325 4.49390663,11.2388676 C4.63529323,11.380137 4.80249656,11.4510256 4.99579,11.4510256 L19.2690405,11.4510256 C19.4621387,11.4510256 19.6296154,11.3801761 19.7709239,11.2388676 C19.9120761,11.0978716 19.9828085,10.9303948 19.9828085,10.7371014 L19.9828085,9.30976071 C19.9828085,9.11662349 19.9120761,8.94914677 19.7709239,8.80799451 C19.6296154,8.66656886 19.4621387,8.59599273 19.2690405,8.59599273 Z M19.2690405,4.31408788 L2.14114771,4.31408788 C1.94773709,4.31408788 1.78045566,4.38466401 1.63926434,4.52593343 C1.49799492,4.66712475 1.42741879,4.83440618 1.42741879,5.02769963 L1.42741879,6.45511842 C1.42741879,6.64833375 1.49799492,6.81573236 1.63926434,6.9568065 C1.78061188,7.09807593 1.94773709,7.16884734 2.14114771,7.16884734 L19.2690405,7.16884734 C19.4621387,7.16884734 19.6296154,7.09807593 19.7709239,6.9568065 C19.9120761,6.81573236 19.9828085,6.64833375 19.9828085,6.45511842 L19.9828085,5.02769963 C19.9828085,4.83428901 19.9120761,4.6671638 19.7709239,4.52593343 C19.6296154,4.38466401 19.4621387,4.31408788 19.2690405,4.31408788 Z M19.7709239,0.243755183 C19.6296545,0.102681041 19.4621777,0.0319096273 19.2690405,0.0319096273 L6.42320879,0.0319096273 C6.22979817,0.0319096273 6.06251674,0.102681041 5.92132542,0.243755183 C5.780056,0.38502461 5.70940175,0.552384161 5.70940175,0.74563855 L5.70940175,2.17305734 C5.70940175,2.36631173 5.780056,2.53351505 5.92132542,2.67482353 C6.06267296,2.8160539 6.22991534,2.88666909 6.42320879,2.88666909 L19.2690405,2.88666909 C19.4621387,2.88666909 19.6296154,2.81601485 19.7709239,2.67482353 C19.9120761,2.53355411 19.9828085,2.36635078 19.9828085,2.17305734 L19.9828085,0.74563855 C19.9827694,0.552384161 19.9120761,0.385141781 19.7709239,0.243755183 Z"></path>\n' +
                '                                    </g>\n' +
                '                                </g>\n' +
                '                            </g>\n' +
                '                        </svg>' +
                '</li>\n')

        } else if (musicStyle === 'hiphop') {
            return (' <li class="filter filter__music filter__music--hiphop">\n' +
                '<svg width="20px" height="23px" viewBox="0 0 20 23" version="1.1"\n' +
                '                                 xmlns="http://www.w3.org/2000/svg" <title>music_hiphop</title>\n' +
                '                                <desc>Created with Sketch.</desc>\n' +
                '                                <defs></defs>\n' +
                '                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                '                                    <g class="icon icon__music icon__music--hiphop"\n' +
                '                                       transform="translate(-14.000000, -13.000000)">\n' +
                '                                        <g transform="translate(14.000000, 13.000000)">\n' +
                '                                            <path d="M1.42857143,4.28571429 C0.639642857,4.28571429 0,4.92526786 0,5.71428571 L0,17.1428571 C0,17.9317857 0.639642857,18.5714286 1.42857143,18.5714286 C2.2175,18.5714286 2.85714286,17.9317857 2.85714286,17.1428571 L2.85714286,5.71428571 C2.85714286,4.92526786 2.2175,4.28571429 1.42857143,4.28571429 Z M5.71428571,7.14285714 C4.92535714,7.14285714 4.28571429,7.78241071 4.28571429,8.57142857 L4.28571429,14.2857143 C4.28571429,15.0746429 4.92535714,15.7142857 5.71428571,15.7142857 C6.50321429,15.7142857 7.14285714,15.0746429 7.14285714,14.2857143 L7.14285714,8.57142857 C7.14285714,7.78241071 6.50321429,7.14285714 5.71428571,7.14285714 Z M10,0 C9.21107143,0 8.57142857,0.639553571 8.57142857,1.42857143 L8.57142857,21.4285714 C8.57142857,22.2175 9.21107143,22.8571429 10,22.8571429 C10.7889286,22.8571429 11.4285714,22.2175 11.4285714,21.4285714 L11.4285714,1.42857143 C11.4285714,0.639553571 10.7889286,0 10,0 Z M14.2857143,3.57142857 C13.4967857,3.57142857 12.8571429,4.21098214 12.8571429,5 L12.8571429,17.8571429 C12.8571429,18.6460714 13.4967857,19.2857143 14.2857143,19.2857143 C15.0746429,19.2857143 15.7142857,18.6460714 15.7142857,17.8571429 L15.7142857,5 C15.7142857,4.21098214 15.0746429,3.57142857 14.2857143,3.57142857 Z M18.5714286,7.14285714 C17.7825,7.14285714 17.1428571,7.78241071 17.1428571,8.57142857 L17.1428571,14.2857143 C17.1428571,15.0746429 17.7825,15.7142857 18.5714286,15.7142857 C19.3603571,15.7142857 20,15.0746429 20,14.2857143 L20,8.57142857 C20,7.78241071 19.3603571,7.14285714 18.5714286,7.14285714 Z"></path>\n' +
                '                                        </g>\n' +
                '                                    </g>\n' +
                '                                </g>\n' +
                '                            </svg>\n' +
                '</li>\n' +
                '')

        } else if (musicStyle === 'poprock') {
            return ('  <li class="filter filter__music filter__music--poprock">   <svg width="24px" height="19px" viewBox="0 0 24 19" version="1.1"\n' +
                '                             xmlns="http://www.w3.org/2000/svg" <title>music_poprock</title>\n' +
                '                            <desc>Created with Sketch.</desc>\n' +
                '                            <defs></defs>\n' +
                '                            <g class="icon icon__music icon__music--poprock" stroke="none" stroke-width="1" fill="none"\n' +
                '                               fill-rule="evenodd">\n' +
                '                                <g transform="translate(-12.000000, -14.000000)">\n' +
                '                                    <g transform="translate(12.000000, 14.000000)">\n' +
                '                                        <path d="M23.2993412,0.238917647 C22.6405176,-0.184611765 21.7934588,0.0506823529 21.3699294,0.709505882 L14.7346353,11.5330353 L12.2405176,8.28597647 C11.6287529,7.48597647 10.4522824,7.53303529 9.93463529,8.38009412 L7.06404706,13.1800941 L5.7464,11.4389176 C5.13463529,10.6389176 3.91110588,10.6859765 3.39345882,11.5330353 L0.193458824,16.8506824 C-0.324188235,17.7448 0.240517647,18.9683294 1.36992941,18.9683294 C1.84051765,18.9683294 2.31110588,18.7330353 2.59345882,18.3095059 L4.71110588,14.7800941 L6.02875294,16.5683294 C6.64051765,17.3683294 7.86404706,17.3212706 8.38169412,16.4742118 L11.2522824,11.6271529 L13.7464,14.8742118 C14.3581647,15.6742118 15.5346353,15.5800941 16.0522824,14.7800941 L23.7699294,2.16832941 C24.1934588,1.50950588 23.9581647,0.662447059 23.2993412,0.238917647 L23.2993412,0.238917647 Z"></path>\n' +
                '                                    </g>\n' +
                '                                </g>\n' +
                '                            </g>\n' +
                '                        </svg>\n' +
                '</li>\n' +
                '                   ')

        } else {
            console.log('musikrichtung nicht definiert')
        }
    }

    function festivalName(name) {
        return ('<li class="filter filter__name">\n' +
            '                            <h3>' + name + '</h3>\n' +
            '                        </li>')

    }

    function festivalLocation(ort, kanton) {
        return ('<li class="filter filter__detail--ort">' + ort + ' ' + kanton + '</li>')
    }

    //format ist eigentlich 13. Aug - 15. Aug 2018
    function festivalDatum(start, ende) {
        return ('<li class="filter filter__detail--datum">' + start + ' - ' + ende + '</li>')
    }

    //prüfen ob Festival gemerkt = true ist
    function festivalMerken(festivalMerken) {
        if (festivalMerken === true) {
            return ('<li class="filter filter__merken">\n' +
                '                        <p>\n' +
                '                            <svg width="24px" height="23px" viewBox="0 0 24 23" version="1.1"\n' +
                '                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                '                                <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->\n' +
                '                                <title>detail_merken_filled</title>\n' +
                '                                <desc>Created with Sketch.</desc>\n' +
                '                                <defs></defs>\n' +
                '                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                '                                    <g class="icon__gemerkt"\n' +
                '                                       transform="translate(-12.000000, -12.000000)">\n' +
                '                                        <g transform="translate(12.000000, 12.000000)">\n' +
                '                                            <path d="M12.2412,0.9096 L15.2148,7.9476 L22.8276,8.6016 C23.3556,8.6472 23.5704,9.306 23.1696,9.6528 L17.3952,14.6556 L19.1256,22.098 C19.2456,22.6152 18.6852,23.022 18.2316,22.7472 L11.6892,18.8016 L5.1468,22.7472 C4.692,23.0208 4.1328,22.614 4.2528,22.098 L5.9832,14.6556 L0.2076,9.6516 C-0.1932,9.3048 0.0204,8.646 0.5496,8.6004 L8.1624,7.9464 L11.136,0.9096 C11.3424,0.42 12.0348,0.42 12.2412,0.9096 L12.2412,0.9096 Z"></path>\n' +
                '                                        </g>\n' +
                '                                    </g>\n' +
                '                                </g>\n' +
                '                            </svg>\n' +
                '                            <span class="item__hidden gemerkt">gemerkt</span>\n' +
                '                        </p>\n' +
                '                    </li>               ' +
                '                    </ul>\n' +
                '                </a>\n' +
                '            ')
        } else {
            return ('                        <li class="filter filter__merken">\n' +
                '                            <p>\n' +
                '                                <svg width="24px" height="23px" viewBox="0 0 24 23" version="1.1"\n' +
                '                                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
                '                                    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->\n' +
                '                                    <title>detail_merken</title>\n' +
                '                                    <desc>Created with Sketch.</desc>\n' +
                '                                    <defs></defs>\n' +
                '                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                '                                        <g class="icon__merken"\n' +
                '                                           transform="translate(-12.000000, -13.000000)">\n' +
                '                                            <g transform="translate(12.000000, 13.000000)">\n' +
                '                                                <path d="M12.3763636,0.428181818 L14.8609091,8.14254545 L22.9729091,8.13381818 C23.3105455,8.13381818 23.5876364,8.40218182 23.5876364,8.73981818 C23.5876364,8.93890909 23.484,9.12054545 23.3367273,9.23345455 L23.3367273,9.23345455 L16.7656364,13.9865455 L19.2850909,21.7003636 C19.3887273,22.0205455 19.2158182,22.3581818 18.8956364,22.4623636 C18.6878182,22.5316364 18.4625455,22.4798182 18.3070909,22.35 L11.796,17.5963636 L5.24236364,22.3756364 C4.96527273,22.5747273 4.58454545,22.5141818 4.39418182,22.2458182 C4.27309091,22.0810909 4.24690909,21.8732727 4.30745455,21.7003636 L4.29872727,21.7003636 L6.82690909,13.9865455 L0.255818182,9.23290909 C-0.0212727273,9.03381818 -0.0818181818,8.65309091 0.117272727,8.38418182 C0.247090909,8.20254545 0.446181818,8.11581818 0.654,8.13327273 L8.72290909,8.142 L11.2161818,0.427636364 C11.3198182,0.107454545 11.6574545,-0.066 11.9781818,0.0294545455 C12.1772727,0.0992727273 12.3152727,0.246 12.3763636,0.428181818 L12.3763636,0.428181818 L12.3763636,0.428181818 Z M13.8392727,8.93836364 L11.796,2.59254545 L9.744,8.93890909 L9.744,8.93890909 C9.666,9.18981818 9.43254545,9.36327273 9.16418182,9.36327273 L2.49763636,9.354 L7.89981818,13.2589091 L7.89981818,13.2589091 C8.10763636,13.4149091 8.20309091,13.6832727 8.11636364,13.9429091 L6.04745455,20.2805455 L11.424,16.3587273 C11.6318182,16.2027273 11.9263636,16.194 12.1510909,16.35 L17.5358182,20.2805455 L15.4750909,13.9690909 C15.3796364,13.7181818 15.4576364,13.4236364 15.6829091,13.2589091 L21.0938182,9.354 L14.4447273,9.36272727 C14.1769091,9.38018182 13.926,9.20672727 13.8392727,8.93836364 L13.8392727,8.93836364 L13.8392727,8.93836364 Z"></path>\n' +
                '                                            </g>\n' +
                '                                        </g>\n' +
                '                                    </g>\n' +
                '                                </svg>\n' +
                '\n' +
                '                                <span class="item__hidden merken">merken </span>\n' +
                '                            </p>\n' +
                '                        </li>            ' +
                '                   </ul>\n' +
                '                </a>\n' +
                '            ')
        }

    }

// initiales abfuellen
    abfuellen();

}

