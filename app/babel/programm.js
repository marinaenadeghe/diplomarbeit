'use strict';

/*
Da Codeschnipsel auf der Festivalseite:
check ob id tagesprogramm vorhanden, falls ja dann ausführen
 */

var tagesprogramm = document.getElementById('tagesprogramm');
if (tagesprogramm !== null) {

    /*
    zu Beginn nur Inhalt von Freitag anzeigen: _programm.scss
     */

    var programm = function programm() {
        // zeigt button vom Tag: console.log(this)
        //ist der passende Tag : console.log(this.id)

        if (this.id == 'freitag') {

            /*
            damit klar ist welcher Tag aktiv: class btn... berücksichtigen
             */
            //button  class btnweiss entfernen
            freitag.classList.remove('btnweiss');
            samstag.classList.remove('btnschwarz');
            sonntag.classList.remove('btnschwarz');

            //button mit class btnschwarz setzten
            freitag.classList.add('btnschwarz');
            samstag.classList.add('btnweiss');
            sonntag.classList.add('btnweiss');

            /*
            passendes div mit Progamm anzeigen:
            falsche display none
            richtiges display block oder inline...
             */
            show_samstag.style.display = 'none';
            show_sonntag.style.display = 'none';

            show_freitag.style.display = 'block';
        } else if (this.id == 'samstag') {

            /*
            damit klar ist welcher Tag aktiv: class btn... berücksichtigen
             */
            //button  class btnweiss entfernen
            freitag.classList.remove('btnschwarz');
            samstag.classList.remove('btnweiss');
            sonntag.classList.remove('btnschwarz');

            //button mit class btnschwarz setzten
            freitag.classList.add('btnweiss');
            samstag.classList.add('btnschwarz');
            sonntag.classList.add('btnweiss');

            /*
            passendes div mit Progamm anzeigen:
            falsche display none
            richtiges display block oder inline...
             */
            show_freitag.style.display = 'none';
            show_sonntag.style.display = 'none';

            show_samstag.style.display = 'block';
        } else if (this.id == 'sonntag') {

            /*
            damit klar ist welcher Tag aktiv: class btn... berücksichtigen
            */
            //button  class btnweiss entfernen
            freitag.classList.remove('btnschwarz');
            samstag.classList.remove('btnschwarz');
            sonntag.classList.remove('btnweiss');

            //button mit class btnschwarz setzten
            freitag.classList.add('btnweiss');
            samstag.classList.add('btnweiss');
            sonntag.classList.add('btnschwarz');

            /*
            passendes div mit Progamm anzeigen:
            falsche display none
            richtiges display block oder inline...
             */
            show_freitag.style.display = 'none';
            show_samstag.style.display = 'none';

            show_sonntag.style.display = 'block';
        } else {
            console.log('Platzhalter weitere Wochentage');
        }
    };

    //hole Wochentag - damit Inhalt bei click angezeigt wird
    var freitag = document.querySelector('#freitag');
    var samstag = document.querySelector('#samstag');
    var sonntag = document.querySelector('#sonntag');

    //hole Inhalt der angezeigt wird bzw. soll
    var show_freitag = document.querySelector('#show_freitag');
    var show_samstag = document.querySelector('#show_samstag');
    var show_sonntag = document.querySelector('#show_sonntag');

    freitag.addEventListener('click', programm);
    samstag.addEventListener('click', programm);
    sonntag.addEventListener('click', programm);
}