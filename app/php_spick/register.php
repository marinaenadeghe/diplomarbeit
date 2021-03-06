<?php

session_start();

$pdo = new PDO('mysql:host=localhost;dbname=festival_lovers', 'root', 'root');

/*
 * Idee: prüfen ob schon eingeloggt
 * wenn nein
 * prüfen ob login schon vorhanden
 * -> falls ja: Fehlermeldung? oder zurück?
 * -> unbedingt password hashen
 * falls registrieren ok:
 * 1. überprüfen ob im localStorage Daten von FMS (=Favorite Music Style) vorhanden
 *      falls ja, ebenfalls speichern
 * 2. geklappt: laut styleguide ins dashboard,
 * da dies nicht vorhanden -> ticketuebersicht.html (kann dann "merken")
 */

?>

<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!--favicon - for fun-->
<!--
    <link rel="apple-touch-icon" sizes="180x180" href="../images/assets/favicon_package_v0.16/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../images/assets/favicon_package_v0.16/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../images/assets/favicon_package_v0.16/favicon-16x16.png">
    <link rel="manifest" href="../images/assets/favicon_package_v0.16/site.webmanifest">
    <link rel="mask-icon" href="../images/assets/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">

-->    <title>register</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

    <!--für den slider-->
    <link rel='stylesheet prefetch' href='http://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css'>

    <!-- inject:css -->
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <link rel="stylesheet" type="text/css" href="../css/main.min.css">
    <!-- endinject -->

</head>
<body>
<header>
    <!--nav links anpassen, ggf nochmals hineinkopieren-->
    <!--overlay aus index rüber kopieren, aufpassen mit links-->
    <!--suche und icon zuerst richtig-->
    <!--login overlay-->
    <!--ticket overlay-->
    <!--original aus index rüber kopieren, aufpassen mit links-->

    <nav>

        <!--Inhalt des Overlays gelöscht-->


        <!--Nav-Teil - immer sichtbar -  id, menu & entsprechendes icon anders -->


        <ul class="nav container nav__top nav__top--original">
            <li  class="nav nav__menu item">
                <a href="../index.html" id="zurueckFMS">
                    <p class="container">
                        <svg class="icon icon__nav icon__nav--menu" width="24px" height="24px" viewBox="0 0 24 24"
                             version="1.1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                            <title>navigation_zurück</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g class="icon__nav--menu" id="navigation_zurück"
                                   transform="translate(-12.000000, -12.000000)">
                                    <g transform="translate(24.000000, 24.000000) rotate(-90.000000) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"
                                       id="Shape">
                                        <path d="M23.7521515,11.4010327 L12.5989673,0.247848537 C12.454389,0.103270224 12.2271945,0 12,0 C11.7728055,0 11.545611,0.103270224 11.4010327,0.247848537 L0.247848537,11.4010327 C-0.082616179,11.7314974 -0.082616179,12.2685026 0.247848537,12.5989673 C0.413080895,12.7641997 0.619621343,12.8468158 0.846815835,12.8468158 C1.07401033,12.8468158 1.28055077,12.7641997 1.44578313,12.5989673 L11.1531842,2.89156627 L11.1531842,23.1531842 C11.1531842,23.6282272 11.524957,24 12,24 C12.475043,24 12.8468158,23.6282272 12.8468158,23.1531842 L12.8468158,2.89156627 L22.5542169,12.5989673 C22.8846816,12.929432 23.4216867,12.929432 23.7521515,12.5989673 C24.0826162,12.2685026 24.0619621,11.7314974 23.7521515,11.4010327 L23.7521515,11.4010327 Z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="nav__display nav__display--phone">ZURÜCK</span>
                    </p>
                </a>
            </li>

            <li class="nav nav__festivallovers item">
                <a href="../index.html" class="container">
                    <span class="nav__display nav__display--tablet item__hidden nav__festivallovers--1">Festival</span>
                    <svg class="icon icon__nav icon__nav--herz" width="24px" height="23px" viewBox="0 0 24 23"
                         version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                        <title>detail_like_filled</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g class="icon__nav--herz"
                               transform="translate(-12.000000, -12.000000)">
                                <g transform="translate(12.000000, 12.000000)">
                                    <path d="M23.9589231,7.03476923 C23.6086154,3.17907692 20.8795385,0.381692308 17.4641538,0.381692308 C15.1887692,0.381692308 13.1053846,1.60615385 11.9330769,3.56861538 C10.7713846,1.58076923 8.77338462,0.381230769 6.53446154,0.381230769 C3.11953846,0.381230769 0.39,3.17861538 0.0401538462,7.03430769 C0.0124615385,7.20461538 -0.101076923,8.10092308 0.244153846,9.56261538 C0.741692308,11.6709231 1.89092308,13.5886154 3.56676923,15.1070769 L11.9275385,22.6943077 L20.4318462,15.1075385 C22.1076923,13.5886154 23.2569231,11.6713846 23.7544615,9.56261538 C24.0996923,8.10138462 23.9861538,7.20507692 23.9589231,7.03476923 L23.9589231,7.03476923 Z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <span class="nav__display nav__display--tablet item__hidden nav__festivallovers--2">Lovers</span>
                </a>
            </li>

            <!--login, tickets-->
            <li>
                <ul class="container">
                    <li class="nav nav__login item nav__dropdown">
                        <p class="container">
                            <svg class="icon icon__nav icon__nav--login" width="24px" height="24px" viewBox="0 0 24 24"
                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                                <title>navigation_login</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g class="icon__nav--login"
                                       transform="translate(-12.000000, -12.000000)">
                                        <g transform="translate(12.000000, 12.000000)">
                                            <path d="M11.99968,0 C5.37256,0 8e-05,5.37264 8e-05,11.99976 C8e-05,18.62672 5.37256,23.99976 11.99968,23.99976 C18.6268,23.99976 23.99968,18.62672 23.99968,11.99976 C23.99968,5.37248 18.6268,0 11.99968,0 L11.99968,0 Z M12.03624,17.66104 L12.03624,17.66088 L11.96296,17.66088 L6.8372,17.66088 C6.8372,13.9124 10.12936,13.91328 10.85992,12.93312 L10.94352,12.48616 C9.91712,11.966 9.19256,10.71192 9.19256,9.2452 C9.19256,7.31288 10.44952,5.74616 11.99968,5.74616 C13.54984,5.74616 14.8068,7.31288 14.8068,9.2452 C14.8068,10.69944 14.09512,11.94568 13.0824,12.47408 L13.1776,12.982 C13.97912,13.91464 17.16176,13.97544 17.16176,17.66104 L12.03624,17.66104 L12.03624,17.66104 Z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span class="nav__display nav__display--desktop item__hidden nav__login">LOGIN</span>
                        </p>


                        <!-- Login Maske - Dropdown -->
                        <ul class="nav__dropdown--content">

                            <li>
                                <p class="pfeil-oben login"></p>
                            </li>

                            <li>

                               <form action="../php/login.php" method="post">
                                    <input type="email" placeholder="E-Mail Adresse" name="email"
                                           autocomplete="section-blue shipping">

                                    <input type="password" placeholder="Passwort" name="password"
                                           autocomplete="section-blue shipping">

                                    <button type="submit" class="button btnweiss">anmelden</button>
                                </form>

                                <p><a href="#">Passwort</a> vergessen?</p>
                            </li>

                            <li class="horizontal-line"></li>

                            <li>
                                <p>Neu bei FestivalLovers?</p>
                                <p>Jetzt <a href="register.html">registrieren.</a></p>


                            </li>

                        </ul>

                    </li>

                    <!-- Ticket bestellen-->

                    <li class="nav nav__ticket item">
                        <a href="ticketuebersicht.html" class="container">

                            <svg class="icon icon__nav icon__nav--ticket" width="24px" height="22px" viewBox="0 0 24 22"
                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                                <title>navigation_ticketkauf</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g class="icon__nav--ticket"
                                       transform="translate(-12.000000, -13.000000)">
                                        <g transform="translate(12.000000, 13.000000)">
                                            <path d="M23.8414118,8.42552941 L22.688549,6.77960784 C22.681451,6.78458824 22.6747451,6.79007843 22.6677255,6.79494118 C21.3627451,7.70937255 19.5636471,7.39219608 18.649451,6.08709804 C17.7352549,4.78223529 18.0522745,2.98301961 19.3574118,2.06890196 C19.3645098,2.06392157 19.3717647,2.05956863 19.3788627,2.05470588 L18.2260392,0.409019608 C17.9483922,0.0125098039 17.4016471,-0.0837254902 17.005098,0.193921569 L12.4452941,3.38803922 L13.4432941,4.81286275 L12.3613333,5.57015686 L11.3636471,4.14568627 L0.373960784,11.8439608 C-0.0227843137,12.1213725 -0.119137255,12.6681569 0.158862745,13.0646667 L5.77423529,21.0811765 C6.05188235,21.4776863 6.59866667,21.5739216 6.99490196,21.2960392 L17.9845098,13.5981961 L16.9989804,12.191098 L18.0808627,11.4333725 L19.0662353,12.8405882 L23.6263137,9.64635294 C24.0224706,9.36843137 24.1190588,8.82188235 23.8414118,8.42552941 L23.8414118,8.42552941 Z M13.1307451,6.61670588 L14.2125882,5.85909804 L15.5077255,7.70760784 L14.4253725,8.46545098 L13.1307451,6.61670588 L13.1307451,6.61670588 Z M16.300902,11.1944314 L15.1063529,9.48937255 L16.1882353,8.73176471 L17.3826275,10.4368235 L16.300902,11.1944314 L16.300902,11.1944314 Z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p class="nav__display nav__display--desktop item__hidden nav__ticket">TICKETS KAUFEN</p>
                        </a>

                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</header>


<main class="kaufen registrieren" id="pagetop">
    <!-- Login Maske - Dropdown -->
    <h1>Registrierung</h1>


    <?php
    $showFormular = true; //Variable ob das Registrierungsformular anezeigt werden soll

    if(isset($_GET['register'])) {
        $error = false;
        $email = $_POST['email'];
        $password = $_POST['password'];
        $username = $_POST['username'];

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo 'Bitte eine gültige E-Mail-Adresse eingeben<br>';
            $error = true;
        }
        if(strlen($password) == 0) {
            echo 'Bitte ein Passwort angeben<br>';
            $error = true;
        }


        //Überprüfe, dass die E-Mail-Adresse noch nicht registriert wurde
        if(!$error) {
            $statement = $pdo->prepare("SELECT * FROM user WHERE email = :email");
            $result = $statement->execute(array('email' => $email));
            $user = $statement->fetch();

            if($user !== false) {
                echo 'Diese E-Mail-Adresse ist bereits vergeben<br>';
                $error = true;
            }
        }

        //Keine Fehler, wir können den Nutzer registrieren
        if(!$error) {
            $password_hash = password_hash($password, PASSWORD_DEFAULT);

            $statement = $pdo->prepare("INSERT INTO user (email, password, username) VALUES (:email, :password, :username)");
            $result = $statement->execute(array('email' => $email, 'password' => $password_hash, 'username' => $username));

            if($result) {
                echo 'Du wurdest erfolgreich registriert. <br><a href="login.php" class="button btnschwarz">Zum Login</a>';
                $showFormular = false;
            } else {
                echo 'Beim Abspeichern ist leider ein Fehler aufgetreten<br>';
            }
        }
    }

    if($showFormular) {
    ?>

            <form class="kaufen__maske" method="post" action="?register=1">

   <!--name und vorname würden dazu gehören-->
                <label for="username">Dein User-Name:</label>
                <input type="text" placeholder="User-Name" id="username" name="username"
                       autocomplete="section-blue shipping">

                <label for="email">Deine E-Mail:</label>
                <input type="email" placeholder="E-Mail Adresse" id="email" name="email"
                       autocomplete="section-blue shipping">

                <label for="password">Dein Passwort:</label>
                <input type="password" placeholder="Passwort" id="password" name="password"
                       autocomplete="section-blue shipping">

                <button type="submit" class="button btnschwarz">registrieren</button>
            </form>

        <?php
    } //Ende von if($showFormular)
    ?>

</main>

<!--footer-->
<!--id ist pageup statt pagetop auf Detailseite-->
<footer>
    <ul class="footer container">

        <li class="footer footer__menu item">
            <a href="festivaluebersicht.html">FESTIVALS</a>
            <a href="#">MAGAZIN</a>
            <a href="#">NEWS</a>
        </li>
        <li class="footer footer__socialmedia item">
            <a href="#">
                <svg width="12px" height="24px" viewBox="0 0 12 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                    <title>socialmedia_facebook</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="icon icon__footer icon__footer--facebook"
                           transform="translate(-18.000000, -12.000000)">
                            <g transform="translate(18.000000, 12.000000)">
                                <path d="M7.46603822,7.85579618 L7.46603822,5.79001274 C7.46603822,5.47989809 7.48030573,5.23969427 7.50929936,5.07001274 C7.53819108,4.90007643 7.60392357,4.73294268 7.70593631,4.56794904 C7.80779618,4.40305732 7.97273885,4.28922293 8.20050955,4.22614013 C8.42858599,4.16295541 8.73166879,4.13146497 9.11006369,4.13146497 L11.1757452,4.13146497 L11.1757452,0 L7.8733758,0 C5.96254777,0 4.59016561,0.453350318 3.75602548,1.36005096 C2.92198726,2.26695541 2.50501911,3.60280255 2.50501911,5.36810191 L2.50501911,7.85574522 L0.0315414013,7.85574522 L0.0315414013,11.9875159 L2.50486624,11.9875159 L2.50486624,23.9750828 L7.46598726,23.9750828 L7.46598726,11.9875669 L10.7681529,11.9875669 L11.2046369,7.85579618 L7.46603822,7.85579618 L7.46603822,7.85579618 Z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
            <a href="#">
                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                    <title>socialmedia_instagram</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="icon icon__footer icon__footer--instagram"
                           transform="translate(-12.000000, -12.000000)">
                            <g transform="translate(12.000000, 12.000000)">
                                <path d="M16.8207826,0 L7.13721739,0 C3.20173913,0 0,3.20173913 0,7.13721739 L0,16.8207826 C0,20.7562609 3.20173913,23.958 7.13721739,23.958 L16.8207826,23.958 C20.7562609,23.958 23.958,20.7562609 23.958,16.8207826 L23.958,7.13721739 C23.9579565,3.20173913 20.7562174,0 16.8207826,0 L16.8207826,0 Z M21.5478261,16.8207826 C21.5478261,19.4314348 19.4314348,21.5478261 16.8207826,21.5478261 L7.13721739,21.5478261 C4.52656522,21.5478261 2.41017391,19.4314348 2.41017391,16.8207826 L2.41017391,7.13721739 C2.41017391,4.52652174 4.52656522,2.41017391 7.13721739,2.41017391 L16.8207826,2.41017391 C19.4314348,2.41017391 21.5478261,4.52652174 21.5478261,7.13721739 L21.5478261,16.8207826 L21.5478261,16.8207826 L21.5478261,16.8207826 Z"
                                ></path>
                                <path d="M11.979,5.7826087 C8.56230435,5.7826087 5.7826087,8.56230435 5.7826087,11.9789565 C5.7826087,15.3956087 8.56230435,18.1753478 11.979,18.1753478 C15.3956957,18.1753478 18.1753913,15.3956522 18.1753913,11.9789565 C18.1753913,8.56226087 15.3956957,5.7826087 11.979,5.7826087 L11.979,5.7826087 Z M11.979,15.7652174 C9.88791304,15.7652174 8.19278261,14.070087 8.19278261,11.979 C8.19278261,9.88791304 9.88795652,8.19278261 11.979,8.19278261 C14.070087,8.19278261 15.7652174,9.88791304 15.7652174,11.979 C15.7652174,14.0700435 14.0700435,15.7652174 11.979,15.7652174 L11.979,15.7652174 Z"
                                ></path>
                                <circle cx="18.1872174" cy="5.82921739" r="1.48473913"></circle>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
            <a href="#">
                <svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                    <title>socialmedia_snapchat</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="icon icon__footer icon__footer--snapchat"
                           transform="translate(-11.000000, -11.000000)" stroke="#000000" stroke-width="0.5">
                            <g transform="translate(12.000000, 12.000000)">
                                <path d="M11.9724691,1.31636674 C15.189032,1.31744136 17.8683838,3.99530917 17.8722729,7.21965032 C17.873194,7.97485714 17.8964776,8.67029424 17.9391045,9.31092537 C17.9654072,9.70618337 18.2941407,9.99909595 18.6711301,9.99909595 C18.7266525,9.99909595 18.7831983,9.99275053 18.84,9.97944563 L19.8476418,9.74323241 C19.8905245,9.73315139 19.9335608,9.72834115 19.9760853,9.72834115 C20.232,9.72834115 20.4676503,9.90319829 20.5251173,10.1621834 C20.6063284,10.5281706 20.4012793,10.8979446 20.0466525,11.0222942 L18.5171002,11.6397441 C18.130951,11.7956162 17.923548,12.2158977 18.03229,12.6179104 C19.2594115,17.1545757 22.6869083,16.6827633 22.6869083,17.2738081 C22.6869083,18.0160171 20.1034542,18.1208188 19.8700554,18.3542687 C19.6366567,18.5877186 19.8599232,19.7206311 19.3384222,19.9399574 C19.2401194,19.9813049 19.1004691,19.9956844 18.9301151,19.9956844 C18.5373134,19.9956844 17.9817825,19.9190277 17.3962644,19.9190277 C16.8883753,19.9190277 16.357919,19.9766994 15.8915821,20.1921365 C14.6544307,20.7636333 13.4616972,21.8310959 11.983113,21.8310959 C10.5045288,21.8310959 9.31179531,20.7636333 8.07464392,20.1921365 C7.60820469,19.9766482 7.07790192,19.9190277 6.56996162,19.9190277 C5.98449467,19.9190277 5.42886141,19.9956844 5.03611087,19.9956844 C4.86585928,19.9956844 4.72605544,19.9812537 4.62780384,19.9399574 C4.10630277,19.7206311 4.3295693,18.5877186 4.09617058,18.3542687 C3.86277186,18.1208188 1.2793177,18.0159659 1.2793177,17.2737569 C1.2793177,16.682661 4.7068145,17.1544733 5.93393603,12.6178593 C6.04267804,12.2158977 5.83527505,11.7956162 5.44907463,11.639693 L3.91952239,11.0222431 C3.56484435,10.8978934 3.35979531,10.5281194 3.44105757,10.1621322 C3.49852452,9.90309595 3.73417484,9.72823881 3.99008955,9.72828998 C4.0325629,9.72828998 4.07565032,9.73310021 4.11853305,9.74318124 L5.12617484,9.97939446 C5.18297655,9.99269936 5.23952239,9.99904478 5.29504478,9.99904478 C5.67198294,9.99904478 6.00076759,9.70608102 6.02707036,9.3108742 C6.06969723,8.67024307 6.09303198,7.97480597 6.09395309,7.21959915 C6.09784222,3.99530917 8.75585501,1.31749254 11.9724691,1.31636674 L11.9724691,1.31636674 Z M11.9728785,0.0370490405 L11.9724179,0.0370490405 L11.9719574,0.0370490405 C11.011855,0.0373560768 10.0765714,0.230277186 9.19220469,0.610490405 C8.34330064,0.975402985 7.57929211,1.49572708 6.92141578,2.15703198 C6.26440938,2.81746695 5.74736034,3.58418763 5.38464819,4.43590618 C5.00750533,5.32155224 4.81571002,6.25760341 4.81453305,7.21806397 C4.81397015,7.68962047 4.80419616,8.147258 4.78536461,8.58550107 L4.41047335,8.49758635 C4.27292111,8.46534755 4.13147974,8.44897228 3.9901919,8.44892111 C3.5821919,8.44886994 3.17971855,8.58678038 2.85692111,8.83721962 C2.52015352,9.09850746 2.28399147,9.47058422 2.19203412,9.88492964 C1.97316844,10.8711812 2.5177484,11.8668486 3.46147548,12.2169723 L4.58405117,12.6701066 C3.84071642,14.951693 2.47005544,15.3889126 1.5470533,15.6834115 C1.30214072,15.7615522 1.09059275,15.829049 0.889176972,15.9289893 C0.0866353945,16.3273177 0,17.0021322 0,17.2737569 C0,17.7940299 0.24624307,18.2688102 0.693441365,18.6105928 C0.916093817,18.7807932 1.19191471,18.9212111 1.53661407,19.0398806 C2.0064307,19.2016375 2.55106183,19.30429 2.99370576,19.3865757 C3.01509595,19.5505842 3.04646482,19.7267719 3.09932623,19.9043412 C3.31880597,20.641791 3.78197015,20.9720085 4.13188913,21.1191301 C4.46389765,21.2587804 4.80695949,21.2748998 5.03611087,21.2748998 C5.26024733,21.2748998 5.49717697,21.2573475 5.74802559,21.2387719 C6.01714286,21.2188145 6.29542004,21.1982431 6.56996162,21.1982431 C6.99541151,21.1982431 7.3121194,21.2490064 7.53814925,21.3533987 C7.84851173,21.4967846 8.17765458,21.6901151 8.52614072,21.8947548 C9.49627292,22.4645117 10.5958209,23.1103113 11.983113,23.1103113 C13.3704051,23.1103113 14.4699019,22.4645117 15.4400341,21.8947548 C15.7885203,21.690064 16.1176631,21.4967846 16.4280768,21.3533987 C16.6541066,21.2489552 16.9708145,21.1982431 17.3962644,21.1982431 C17.670806,21.1982431 17.9490832,21.2188657 18.2181493,21.2387719 C18.4689979,21.2573475 18.7059275,21.2748998 18.930064,21.2748998 C19.1592154,21.2748998 19.502226,21.2587804 19.8342857,21.1191301 C20.1842047,20.9720085 20.6473689,20.641791 20.8668486,19.9043412 C20.91971,19.7267719 20.9511301,19.5505842 20.9724691,19.3865757 C21.415113,19.3042388 21.9597953,19.2016375 22.4295608,19.0398806 C22.7743113,18.9212111 23.050081,18.7807932 23.2727335,18.6105928 C23.7198806,18.2688102 23.9661748,17.7940299 23.9661748,17.2737569 C23.9661748,17.0021322 23.8795394,16.3273177 23.0768955,15.9290405 C22.8754797,15.8291002 22.6639318,15.7616034 22.4190192,15.6834627 C21.4960171,15.3890149 20.1253561,14.9517441 19.3820213,12.6701578 L20.5045458,12.2170235 C21.4482729,11.8668998 21.9929041,10.8711812 21.7740384,9.88492964 C21.682081,9.47058422 21.445919,9.09850746 21.1091514,8.83721962 C20.7863539,8.58683156 20.3839829,8.44892111 19.9760853,8.44892111 C19.8347974,8.44892111 19.6933561,8.46529638 19.5557015,8.49753518 L19.1807591,8.58544989 C19.1619275,8.147258 19.1521535,7.68962047 19.1515906,7.21801279 C19.1504136,6.25678465 18.9570832,5.31981237 18.5769211,4.43298934 C18.2120085,3.58168017 17.692145,2.81516418 17.0318124,2.15467804 C16.3715309,1.49424307 15.6053731,0.974481876 14.7547292,0.609876333 C13.8686738,0.230123667 12.9327249,0.0374072495 11.9728785,0.0370490405 L11.9728785,0.0370490405 L11.9728785,0.0370490405 Z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
            <a href="#">
                <svg width="24px" height="17px" viewBox="0 0 24 17" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                    <title>socialmedia_youtube</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="icon icon__footer icon__footer--youtube"
                           transform="translate(-12.000000, -15.000000)">
                            <g transform="translate(12.000000, 15.000000)">
                                <path d="M23.0645419,1.52090323 C22.1982194,0.491070968 20.5987355,0.0709935484 17.5440774,0.0709935484 L6.45569032,0.0709935484 C3.33112258,0.0709935484 1.70454194,0.518167742 0.841470968,1.61458065 C0,2.6835871 0,4.25868387 0,6.43865806 L0,10.5936774 C0,14.8169806 0.9984,16.9612645 6.45569032,16.9612645 L17.5441548,16.9612645 C20.1931355,16.9612645 21.6610065,16.5905806 22.6106323,15.6817548 C23.5844903,14.7497806 24,13.2281032 24,10.5936774 L24,6.43865806 C24,4.13969032 23.9348903,2.55530323 23.0645419,1.52090323 L23.0645419,1.52090323 Z M15.4080774,9.08980645 L10.3728774,11.7213677 C10.2603097,11.7802065 10.1372129,11.8093935 10.014271,11.8093935 C9.87507097,11.8093935 9.73618065,11.7719226 9.61316129,11.6974452 C9.38152258,11.5570839 9.24007742,11.3060129 9.24007742,11.0352 L9.24007742,5.78895484 C9.24007742,5.51860645 9.38113548,5.26776774 9.61230968,5.12732903 C9.84356129,4.98689032 10.1311742,4.97729032 10.3710968,5.10193548 L15.4062968,7.71654194 C15.6624774,7.84954839 15.8233548,8.1140129 15.8237419,8.40255484 C15.8240516,8.69132903 15.663871,8.95618065 15.4080774,9.08980645 L15.4080774,9.08980645 Z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
            <a href="#">
                <svg width="24px" height="20px" viewBox="0 0 24 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                    <title>socialmedia_twitter</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="icon icon__footer icon__footer--twitter"
                           transform="translate(-12.000000, -14.000000)">
                            <g transform="translate(12.000000, 14.000000)">
                                <path d="M23.9976585,2.32321064 C23.0556452,2.72839024 22.1134191,2.98142794 21.1718315,3.08306874 C22.2353348,2.44496674 22.9546962,1.54350333 23.32949,0.378731707 C22.3566652,0.955955654 21.3186519,1.35086475 20.2147051,1.56367184 C19.2422528,0.530554324 18.047255,0.0137827051 16.6289135,0.0137827051 C15.2718226,0.0137827051 14.114714,0.492292683 13.1571619,1.4495255 C12.2001419,2.4067051 11.7215787,3.56381375 11.7215787,4.92101109 C11.7215787,5.28558758 11.7620222,5.6604878 11.843122,6.04533925 C9.83755211,5.94407095 7.95618625,5.44017738 6.1987051,4.53365854 C4.44133038,3.62703326 2.9498714,2.41915743 1.72432816,0.910031042 C1.27865188,1.66951663 1.05573392,2.49514856 1.05573392,3.38644789 C1.05573392,4.22713969 1.25321508,5.0071663 1.64844346,5.72631486 C2.04340576,6.44535698 2.57529047,7.02768958 3.24383149,7.47341907 C2.4536408,7.44298004 1.71427051,7.2352816 1.02561419,6.85037694 L1.02561419,6.91114856 C1.02561419,8.09630155 1.39785366,9.13681596 2.14222616,10.03349 C2.8867051,10.9300576 3.82621729,11.4944035 4.96054989,11.7274856 C4.53509534,11.8387583 4.10453215,11.8944745 3.66907317,11.8944745 C3.38543681,11.8944745 3.07647007,11.8691973 2.74227938,11.8189091 C3.05624834,12.8012062 3.63363193,13.6086918 4.47421729,14.2420576 C5.31496231,14.8751042 6.26708647,15.2014191 7.33064302,15.2221729 C5.54804435,16.6197073 3.51725055,17.3184745 1.23826164,17.3184745 C0.802643016,17.3184745 0.407733925,17.2986253 0.0531618625,17.2578625 C2.33220399,18.7263858 4.8441153,19.4606475 7.58905543,19.4606475 C9.33121064,19.4606475 10.9670421,19.1849401 12.4960177,18.6327805 C14.0257384,18.0809933 15.3322217,17.3414102 16.4161064,16.4144568 C17.4996718,15.4877162 18.4342882,14.4216585 19.2191574,13.2163902 C20.0040798,12.0110155 20.5888071,10.7526386 20.974031,9.44099335 C21.3587761,8.12908204 21.5513082,6.81514856 21.5513082,5.49818182 C21.5513082,5.21454545 21.5461996,5.00195122 21.5360355,4.86007982 C22.4985366,4.1615255 23.3189534,3.31561863 23.9976585,2.32321064 L23.9976585,2.32321064 Z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </li>
        <li class="footer footer__up item">
            <a href="#pagetop" class="container">
                <p class="item__hidden">BACK TO TOP</p>
                <svg class="icon icon__footer icon__footer--backtotop" width="24px" height="24px" viewBox="0 0 24 24"
                     version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                    <title>navigation_backtotop</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="icon icon__footer icon__footer--backtotop" id="navigation_backtotop"
                           transform="translate(-12.000000, -12.000000)">
                            <g transform="translate(12.000000, 12.000000)">
                                <path d="M23.7521515,11.4010327 L12.5989673,0.247848537 C12.454389,0.103270224 12.2271945,0 12,0 C11.7728055,0 11.545611,0.103270224 11.4010327,0.247848537 L0.247848537,11.4010327 C-0.082616179,11.7314974 -0.082616179,12.2685026 0.247848537,12.5989673 C0.413080895,12.7641997 0.619621343,12.8468158 0.846815835,12.8468158 C1.07401033,12.8468158 1.28055077,12.7641997 1.44578313,12.5989673 L11.1531842,2.89156627 L11.1531842,23.1531842 C11.1531842,23.6282272 11.524957,24 12,24 C12.475043,24 12.8468158,23.6282272 12.8468158,23.1531842 L12.8468158,2.89156627 L22.5542169,12.5989673 C22.8846816,12.929432 23.4216867,12.929432 23.7521515,12.5989673 C24.0826162,12.2685026 24.0619621,11.7314974 23.7521515,11.4010327 L23.7521515,11.4010327 Z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </li>
    </ul>
</footer>


<!-- inject:js -->
<script src="../babel/navigation.js"></script>

<script src="../babel/musikrichtung.js"></script>

<script src="../babel/localstorageFMS.js"></script>
<!-- endinject -->

</body>
</html>