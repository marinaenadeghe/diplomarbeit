/*
Überlegung: eigentlich wird das Startdatum des Festivals mit dem Festival
erfasst
- es macht keinen Sinn das Datum aus dem HTML zu nehmen
- das Datum soll von der Festival-Klasse kommen
- da aktuell keine solche Klasse existiert, macht es wenig Sinn hier herum zu basteln


Annahmen:
- mehr als 60 Tage: Zeige Datum
- Dazwischen: Countdown
- danach: Datum

Da aktuell dieser Teil einfach funktionieren soll, quick & dirty Variante
weiter unten wird countdown('mm/dd/yyyy hh/mm/ss AM') angepasst
https://codeburst.io/a-countdown-timer-in-pure-javascript-f3cdaae1a1a3
 */


/*
Da Codeschnipsel auf der Festivalseite:
check ob id xy vorhanden, falls ja dann ausführen
 */

let remaining_time = document.getElementById('remaining-time');
if (remaining_time !==null) {

    function countdown(endDate) {
        let days, hours, minutes, seconds;

        endDate = new Date(endDate).getTime();

        if (isNaN(endDate)) {
            return;
        }

        setInterval(calculate, 1000);

        function calculate() {
            let startDate = new Date();
            startDate = startDate.getTime();

            let timeRemaining = parseInt((endDate - startDate) / 1000);

            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);

                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);

                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);

                seconds = parseInt(timeRemaining);

                if (parseInt(days, 10) >= 60) {
                    document.getElementById("remaining-time").innerHTML = value
                }

                else if (parseInt(days, 10) >= 2) {
                    document.getElementById("remaining-time").innerHTML = parseInt(days, 10) + " Tage";
                } else {
                    if (("0" + hours).slice(-2) >= 2) {
                        document.getElementById("remaining-time").innerHTML = ("0" + hours).slice(-2) + ':' + ("0" + minutes).slice(-2) + " Stunden";
                    } else if (("0" + hours).slice(-2) < 1) {
                        document.getElementById("remaining-time").innerHTML = ("0" + minutes).slice(-2) + " Minuten";
                    } else {
                        document.getElementById("remaining-time").innerHTML = value
                    }
                }

            }
        }
    }


//hier kommt die Zeit für den countdown('mm/dd/yyyy hh/mm/ss AM') rein (evtl. hier mit id selektor oder so)
    (function () {
        countdown('09/30/2018 11:00:00 AM');
    }());
}