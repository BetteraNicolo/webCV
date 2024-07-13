function toggleNavLinks() {
    if (window.innerWidth < 700) {
        document.getElementById("navLinks").classList.add("hidden");
    } else {
        document.getElementById("navLinks").classList.remove("hidden");
    }
}

function apriMenu(){
    document.getElementById("navLinks").classList.remove("hidden");
    document.getElementById("navLinks").classList.add("show");
}

function chiudiMenu(){
    document.getElementById("navLinks").classList.remove("show");

    /* aspetta 0.5s*/
    setTimeout(function(){
        document.getElementById("navLinks").classList.add("hidden");
    }, 500);
    
}



function traduciIndex(lang) {

    if (lang === 'eng') {
        document.getElementById("perito1").textContent  =   "COMPUTER TECHNICIAN";
        document.getElementById("perito2").textContent  =   "COMPUTER TECHNICIAN";
        document.getElementById("contatti").textContent =   "CONTACTS";
        document.getElementById("ciao").textContent     =   "HELLO!";
        document.getElementById("chi").textContent      =   "Who am I?";
        document.getElementById("desc").textContent     =   "My name is Nicolò Bettera, I am a young student from Brescia. " +
                                                            "Recently, I completed my studies at the Technical Institute Bonsignori, specializing in Computer Science. " +
                                                            "I am now ready to pursue my university studies at the Faculty of Computer Engineering at the University of Brescia " +
                                                            "to further my education.";
        document.getElementById("pCookie").textContent  =   "This site uses cookies only to maintain the selected language. If you refuse, you may need to translate the site again";
        document.getElementById("accetta").textContent  =   "Accept";
        document.getElementById("rifiuta").textContent  =   "Decline";
        
        
    }
    else{
        document.getElementById("perito1").textContent  =   "PERITO INFORMATICO";
        document.getElementById("perito2").textContent  =   "PERITO INFORMATICO";
        document.getElementById("contatti").textContent =   "CONTATTI";
        document.getElementById("contatti").textContent =   "CONTATTI";
        document.getElementById("ciao").textContent     =   "CIAO!";
        document.getElementById("chi").textContent      =   "Chi Sono?";
        document.getElementById("desc").textContent     =   "Mi chiamo Nicolò Bettera, sono un giovane studente di Brescia. " +
                                                            "Recentemente ho concluso gli studi presso l'Istituto Tecnico Bonsignori, specializzazione in Informatica. " +
                                                            "Sono ora pronto ad intraprendere il percorso universitario presso la facoltà di Ingegneria Informatica " +
                                                            "dell'Università di Brescia per completare la mia formazione.";
        document.getElementById("pCookie").textContent  =   "Questo sito utilizza i cookie al solo scopo di mantenere la lingua selezionata. Se rifiuti potresti dover tradurre nuovamente il sito";
        document.getElementById("accetta").textContent  =   "Accetta";
        document.getElementById("rifiuta").textContent  =   "Rifiuta";
    }       



    // salva la lingua selezionata nel cookie "lingua"
    document.cookie = "lingua=" + lang + "; path=/; max-age=" + 60*60*24*365;       // 1 anno di durata
}



function traduciPortfolio(lang) {

    if (lang === 'eng') {
        document.getElementById("perito1").textContent  =   "COMPUTER TECHNICIAN";
        document.getElementById("contatti").textContent =   "CONTACTS";

        
        
    }
    else{
        document.getElementById("perito1").textContent  =   "PERITO INFORMATICO";
        document.getElementById("contatti").textContent =   "CONTATTI";
        
    }       



    // salva la lingua selezionata nel cookie "lingua"
    document.cookie = "lingua=" + lang + "; path=/; max-age=" + 60*60*24*365;       // 1 anno di durata
}

function traduciContatti(lang) {

    if (lang === 'eng') {
        document.getElementById("perito1").textContent  =   "COMPUTER TECHNICIAN";
        document.getElementById("contatti").textContent =   "CONTACTS";

        
        
    }
    else{
        document.getElementById("perito1").textContent  =   "PERITO INFORMATICO";
        document.getElementById("contatti").textContent =   "CONTATTI";
        
    }       



    // salva la lingua selezionata nel cookie "lingua"
    document.cookie = "lingua=" + lang + "; path=/; max-age=" + 60*60*24*365;       // 1 anno di durata
}



function accettaCookie() {
    document.cookie = "cookieConsent=true; path=/; max-age=" + 60*60*24*365;        // 1 anno di durata
    document.getElementById('cookieConsent').classList.remove('show');              //togli visualizzazione cookie
}


function rifiutaCookie() {
    document.cookie = "cookieConsent=; path=/; max-age=0"; 
    document.getElementById('cookieConsent').classList.remove('show');              //togli visualizzazione cookie
}

// Funzione per verificare se il consenso ai cookie è stato dato
function checkCookieConsent() {
    return document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent='));
}

// Funzione per salvare la lingua in un cookie
function salvaLingua(lingua) {
    document.cookie = "lingua=" + lingua + "; path=/; max-age=" + 60*60*24*365;     // 1 anno di durata
}

// Funzione per ottenere la lingua salvata dal cookie
function getLinguaSalvata() {
    let lingua = document.cookie.split(';').find((item) => item.trim().startsWith('lingua='));
    return lingua ? lingua.split('=')[1] : null;
}


document.addEventListener('DOMContentLoaded', function() {
    var cookieAccepted = checkCookieConsent();

    if (!cookieAccepted) {
        document.getElementById('cookieConsent').classList.add('show');
    }

    // ripristina la lingua salvata
    var linguaSalvata = getLinguaSalvata();
    if (linguaSalvata) {
        var pathname = window.location.pathname;

        if (pathname.includes('index.html') || pathname === '/' || pathname === '') { //check varianti index.html
            traduciIndex(linguaSalvata);
        } else if (pathname.includes('portfolio.html')) {
            traduciPortfolio(linguaSalvata);
        } else if (pathname.includes('contatti.html')) {
            traduciContatti(linguaSalvata);
        }
    }
});

toggleNavLinks();                                   //controlla la dimensione dello schermo
window.addEventListener("resize", toggleNavLinks);  //controlla ad ogni ridimensionamento 