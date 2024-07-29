<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web CV</title>
    <link rel="shortcut icon" href="img/icona.png">
    
    <!-- Librerie stili e JavaScript-->
    <link rel="stylesheet" href="static/styles.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!--                            -->
    
</head>

<body> 
    
    <!-- header della pagina web -->
    <section class="headerTop bg-base-300" id="header">
        <nav class="navHeader">
            <div class="flex flex-col items-start mb-4 md:mb-0">
                    <h2 class="text-2xl font-bold" style="font-family: helvetica, sans-serif; font-size: 25px;">Bettera Nicolò </h2>
                    <div class="divider divider-neutral w-full" style="height: 0px; padding: 0px; margin: 0px;"></div>
                    <p id="perito1" style="letter-spacing: 2px" class="text-sm">PERITO INFORMATICO</p>
            </div>

                <div class="navLinks bg-base-300" id="navLinks">
                    <i class="fa fa-times" onclick="chiudiMenu()"></i>
                    <ul>
                        <li class="navImg" onclick="traduciContatti('ita')"><img src="img/ita.png"></li>
                        
                        <li class="navImg" onclick="traduciContatti('eng')"><img src="img/eng.png"></li>
                        
                        <li><a href="index.html">     HOME      </a>    </li>
                        <li><a href="pdf/BetteraNicolo-CV.pdf" target="_blank"> CURRICULUM </a>    </li>
                        <a href="contatti.html"><li id="contatti">  CONTATTI </li></a>
                        <div class="navLinks bg-base-300" id="navImg">
                    </ul>
            </div>

                </div>
                <i class="fa fa-bars" onclick="apriMenu()"></i>
        </nav>
        
    </section>

    <!-- Contenuto principale della pagina -->
    <div id="intro" class="flex-grow flex flex-col md:flex-row items-center justify-center mt-4 space-x-4">
        
    <form name="email" method="POST" action="post">
        <div id="contacts" class="w-full max-w-lg p-6 text-base-content rounded-lg shadow-md md:order-2 md:ml-4">
            
            <!-- Campo Username -->
            <label class="input input-bordered flex items-center gap-2">
                <i class="fas fa-user h-4 w-4 opacity-70"></i>
                <input type="text" class="grow" placeholder="Username" />
            </label>
            <br>
            
            <!-- Campo Email -->
            <label class="input input-bordered flex items-center gap-2">
                <i class="fas fa-envelope h-4 w-4 opacity-70"></i>
                <input type="text" class="grow" placeholder="Email" />
            </label>
            <br>

            <!-- Campo Oggetto -->
            <label class="input input-bordered flex items-center gap-2">
                <i class="fas fa-tag h-4 w-4 opacity-70"></i>
                <input type="text" class="grow" placeholder="Oggetto" />
            </label>
            <br>

            <!-- Campo Messaggio -->
            <textarea placeholder="Messaggio" class="textarea textarea-bordered textarea-lg w-full"></textarea>
            <br>
                
            <!-- Bottone di invio -->
            <button type="submit" class="btn btn-active w-full" name='ok'>Invia</button>
        </div>
    </form>



    </div>


    <script src="static/js.js"></script>
</body>
</html>

<?php

    if(isset($_POST['ok'])){
        print_r("okokookokok");
    }


?>
