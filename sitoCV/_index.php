<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web CV</title>
    <!-- Librerie stili -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="js.js"></script>
    <style>
        @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        #page {
            animation: fadeIn 1.5s ease forwards;
        }

        #zoom:hover {
            zoom: 125%;
        }

        #cookieConsent {
            display: none;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 8px;
        }

        #cookieConsent.show {
            display: flex;
        }

        #cookieConsent button {
            background-color: blue;
            color: white;
            border: none;
            padding: 4px 8px;
            cursor: pointer;
            border-radius: 4px;
        }

        #cookieConsent button:hover {
            background-color: #1e40af;
        }

        #cookieConsent button.reject {
            background-color: red;
        }

        #cookieConsent button.reject:hover {
            background-color: #ef4444;
        }
    </style>
</head>
<body class="flex flex-col min-h-screen">
    
    <!-- Testata della pagina web -->
    <footer style="padding: 1rem; display: flex; flex-wrap: wrap; z-index: 2;" class="footer sticky top-0 w-full bg-base-300 text-base-content p-5 shadow-md flex items-center justify-between">
        <div class="flex flex-col md:flex-row w-full justify-between items-center">
            <div class="flex flex-col items-start mb-4 md:mb-0">
                <h2 class="text-2xl font-bold" style="font-family: helvetica, sans-serif; font-size: 25px;">Bettera Nicolò </h2>
                <div class="divider divider-neutral w-full" style="height: 0px; padding: 0px; margin: 0px;"></div>
                <p style="letter-spacing: 2px" class="text-sm">PERITO INFORMATICO</p>
            </div>
            <nav class="flex flex-col md:flex-row items-center">
                <div class="grid grid-flow-col gap-4 text-sm">
                    <a href="_index.php"><p id="zoom" style="text-decoration: underline">HOME</p></a>
                    <a href="portfolio.php"><p id="zoom">PORTFOLIO</p></a>
                    <a href="contatti.php"><p id="zoom">CONTATTI</p></a> 
                    <a href="progetti.php"><p id="zoom">PROGETTI</p></a>
                </div>
            </nav>
        </div>
    </footer>

    <!-- Contenuto principale della pagina -->
    <div id="page" class="flex-grow flex flex-col md:flex-row items-center justify-center mt-4 space-x-4">
        <div id="img" class="w-full max-w-sm p-6 bg-base-300 text-base-content rounded-lg shadow-md flex flex-col items-center md:order-1">
            <div style="z-index: 1" class="avatar">
                <div class="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <br>
            <p style="font-family: helvetica, sans-serif; font-size: 25px; font-weight: bold;">BETTERA</p> 
            <p style="font-family: helvetica, sans-serif; font-size: 25px; font-weight: bold;">NICOLÒ</p>
 <div class="divider divider-neutral w-full"></div>
            <p style="letter-spacing: 3px">PERITO INFORMATICO</p>
            <br>
            <footer class="w-full bg-base-100 text-base-content p-5 flex justify-center">
                <nav class="flex space-x-12">
                    <a href="mailto:betteranicolo@gmail.com">
                        <i class="fas fa-envelope fa-2x"></i>
                    </a>
                    <a href="https://wa.me/+393343341088">
                        <i class="fab fa-whatsapp fa-2x"></i>
                    </a>
                    <a href="https://instagram.com/nicolo.bettera" target="_blank">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                </nav>
            </footer>
        </div>

        <div id="info" class="w-full max-w-sm p-6 text-base-content rounded-lg shadow-md md:order-2 md:ml-4">
            <p class="flex flex-col items-center" style="font-family: arial black, sans-serif; font-size: 35px; font-weight: bold;">CIAO!</p>
            <br>
            <p align="center">Chi Sono?</p>
            <br>
            <p>
                Mi chiamo Nicolò Bettera, sono un giovane studente di Brescia.
                <br>
                Recentemente ho concluso gli studi presso l'Istituto Tecnico Bonsignori, specializzazione in Informatica.
                <br>
                Sono ora pronto ad intraprendere il percorso universitario presso la facoltà di Ingegneria Informatica dell'Università di Brescia per completare la mia formazione.
            </p>
            <br>
        </div>
    </div>

    <br><br><br>

    <div style=" width: 75%; margin: 0 auto;" class="divider divider-neutral"></div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <div id="cookieConsent" class="fixed bottom-0 w-full bg-gray-700 text-white py-2 px-4 text-sm z-10">
        Questo sito non utilizza alcun cookie, sei libero di rifiutarli
        <button class="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Rifiuta</button>
    </div>

</body>
</html>
