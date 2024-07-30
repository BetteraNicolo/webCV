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
        document.getElementById("ciao").textContent     =   "HELLO!";
        document.getElementById("chi").textContent      =   "Who am I?";
        document.getElementById("desc").textContent     =   "My name is Nicolò Bettera, I am a young student from Brescia. " +
                                                            "Recently, I completed my studies at the Technical Institute Bonsignori, specializing in Computer Science. " +
                                                            "I am now ready to pursue my university studies at the Faculty of Computer Engineering at the University of Brescia " +
                                                            "to further my education.";
        document.getElementById("pCookie").textContent  =   "This site uses cookies only to maintain the selected language. If you refuse, you may need to translate the site again";
        document.getElementById("accetta").textContent  =   "Accept";
        document.getElementById("rifiuta").textContent  =   "Reject";
        document.getElementById("DText").textContent    =   "During the course, I acquired skills in programming with PHP for developing dynamic web applications, as well as in Java and C++ for fundamental programming. I used HTML and CSS for creating web interfaces and deepened my knowledge of SQL for database management, actively participating in various projects and internships.";
        document.getElementById("DTitolo").textContent  =   "Technical Diploma in Computer Science";    
        document.getElementById("genF").textContent     =   "General education";    
        document.getElementById("sendE").textContent    =   "Send me an email";    
        document.getElementById("username").placeholder =   "Username";  
        document.getElementById("oggetto").placeholder  =   "Subject";
        document.getElementById("mex").placeholder      =   "Message";
        document.getElementById("invia").textContent    =   "Send";  
    }
    else{
        document.getElementById("perito1").textContent  =   "PERITO INFORMATICO";
        document.getElementById("perito2").textContent  =   "PERITO INFORMATICO";
        document.getElementById("ciao").textContent     =   "CIAO!";
        document.getElementById("chi").textContent      =   "Chi Sono?";
        document.getElementById("desc").textContent     =   "Mi chiamo Nicolò Bettera, sono un giovane studente di Brescia. " +
                                                            "Recentemente ho concluso gli studi presso l'Istituto Tecnico Bonsignori, specializzandomi in Informatica. " +
                                                            "Sono ora pronto ad intraprendere il percorso universitario presso la facoltà di Ingegneria Informatica " +
                                                            "dell'Università di Brescia per completare la mia formazione.";
        document.getElementById("pCookie").textContent  =   "Questo sito utilizza i cookie al solo scopo di mantenere la lingua selezionata. Se rifiuti potresti dover tradurre nuovamente il sito";
        document.getElementById("accetta").textContent  =   "Accetta";
        document.getElementById("rifiuta").textContent  =   "Rifiuta";
        document.getElementById("DText").textContent    =   "Durante il percorso, ho acquisito competenze nella programmazione con PHP per lo sviluppo di applicazioni web dinamiche, oltre a Java e C++ per fondamenti di programmazione. Ho utilizzato HTML e CSS per la creazione di interfacce web e ho approfondito l'uso di SQL per la gestione dei database, partecipando attivamente in vari progetti e stage.";
        document.getElementById("DTitolo").textContent  =   "Diploma di Perito Tecnico Informatico";     
        document.getElementById("genF").textContent     =   "Formazione generale";    
        document.getElementById("sendE").textContent    =   "Mandami un'email";   
        document.getElementById("username").placeholder =   "Nome Utente";
        document.getElementById("oggetto").placeholder  =   "Oggetto";
        document.getElementById("mex").placeholder      =   "Messaggio";
        document.getElementById("invia").textContent    =   "Invia";   
           
        
    }       



    // salva la lingua selezionata nel cookie "lingua"
    document.cookie = "lingua=" + lang + "; path=/; max-age=" + 60*60*24*365;       // 1 anno di durata
}



function traduciPortfolio(lang) {

    if (lang === 'eng') {
        document.getElementById("perito1").textContent  =   "COMPUTER TECHNICIAN";
        document.getElementById("itEssText").textContent=   "This course provides a comprehensive overview of the fundamentals of computer hardware and software, including the installation, configuration, and troubleshooting of PCs, peripherals, and mobile devices. It also covers basic networking and cybersecurity concepts.";
        document.getElementById("CSecText").textContent =   "The course introduces the fundamental concepts of cybersecurity, including information security principles, common threats and vulnerabilities, attack and defense techniques, and best practices for protecting data and systems.";
        document.getElementById("JSText").textContent   =   "This course introduces the fundamental concepts of programming using JavaScript. It covers the basics of the language's syntax, control structures, functions, objects, and interaction with the DOM (Document Object Model) for web content manipulation.";
        document.getElementById("CCNAText").textContent =   "This is the first module of the CCNA (Cisco Certified Network Associate) program, introducing the basic concepts of networking. It covers topics such as network architecture, communication models, IP addressing, protocols, and essential network services."
        document.getElementById("cert").textContent     =   "Cisco certifications";

        
        
    }
    else{
        document.getElementById("perito1").textContent  =   "PERITO INFORMATICO";
        document.getElementById("itEssText").textContent=   "Questo corso fornisce una panoramica completa dei fondamenti dell'hardware e del software dei computer, inclusa l'installazione, la configurazione e la risoluzione dei problemi di PC, periferiche e dispositivi mobili. Copre anche i concetti di base di rete e sicurezza informatica.";
        document.getElementById("CSecText").textContent =   "Il corso introduce i concetti fondamentali della sicurezza informatica, inclusi i principi di sicurezza delle informazioni, le minacce e le vulnerabilità comuni, le tecniche di attacco e difesa e le migliori pratiche per la protezione dei dati e dei sistemi.";
        document.getElementById("JSText").textContent   =   "Questo corso introduce i concetti fondamentali di programmazione utilizzando JavaScript. Copre le basi della sintassi del linguaggio, le strutture di controllo, le funzioni, gli oggetti e l'interazione con il DOM (Document Object Model) per la manipolazione dei contenuti web.";
        document.getElementById("CCNAText").textContent =   "Questo è il primo modulo del programma CCNA (Cisco Certified Network Associate) che introduce i concetti di base delle reti. Copre argomenti come l'architettura delle reti, i modelli di comunicazione, gli indirizzi IP, i protocolli e i servizi fondamentali per la comunicazione su rete.";
        document.getElementById("cert").textContent     =   "Certificazioni Cisco";
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
        }
    }
});

toggleNavLinks();                                   //controlla la dimensione dello schermo
window.addEventListener("resize", toggleNavLinks);  //controlla ad ogni ridimensionamento 




/* funzione in ascolto sullo scroll, attiva l'animazione dell'header in comparsa/scomparsa */
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        document.getElementById('header').classList.remove('showHeader');
        document.getElementById('header').classList.add('hideHeader');  
    } 
    else {
        document.getElementById('header').classList.add('showHeader');
        document.getElementById('header').classList.remove('hideHeader');
    }
});