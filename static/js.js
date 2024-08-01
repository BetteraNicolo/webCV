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
        document.getElementById('cv-link').href         =   "pdf/BetteraNicolo-CVENG.pdf"; 
        document.getElementById('cSocial').textContent  =   "Or contact me via social media";
        document.getElementById('lvlIta').textContent   =   "Native";
        document.getElementById('lvlEng').textContent   =   "Upper Intermediate";
        document.getElementById('italiano').textContent =   "Italian";
        document.getElementById('inglese').textContent  =   "English";
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
        document.getElementById('cv-link').href         =   "pdf/BetteraNicolo-CVITA.pdf";   
        document.getElementById('cSocial').textContent  =   "Oppure contattami tramite i social";
        document.getElementById('lvlIta').textContent   =   "Madre lingua";
        document.getElementById('lvlEng').textContent   =   "Intermedio superiore";   
        document.getElementById('italiano').textContent =   "Italiano";
        document.getElementById('inglese').textContent  =   "Inglese";
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
        document.getElementById("superiori").textContent=   "Obtained during the final year of high school";
        document.getElementById('cv-link').href         =   "pdf/BetteraNicolo-CVENG.pdf";
        document.getElementById("itExp").textContent    =   "IT Experience";
        document.getElementById("lista1").textContent   =   "Modification and updating of company websites using HTML, PHP, CSS, JavaScript, and SQL.";
        document.getElementById("lista2").textContent   =   "Troubleshooting hardware and software issues on PCs and laptops, including replacement of components such as memory, processors, motherboards, and power supplies.";
        document.getElementById("lista3").textContent   =   "Cloning and restoring physical drives.";
        document.getElementById("lista4").textContent   =   "Creation of graphic content using Photoshop and Illustrator.";
        document.getElementById("lista5").textContent   =   "Formatting and configuring devices on Windows and macOS.";
        document.getElementById("lista6").textContent   =   "Password recovery and cybersecurity management.";
        document.getElementById("lista7").textContent   =   "Installation of operating systems and software.";
        document.getElementById("lista8").textContent   =   "Technical support and remote assistance for devices and printers.";
        document.getElementById("stgC").textContent     =   "Curricular internship";
        document.getElementById("posizione").textContent=   "Position: IT Technician";
        document.getElementById("periodo").innerHTML    =   "<strong>Duration:</strong> June 2023 - July 2023";
        document.getElementById("descS").innerHTML      =   "<strong>Description:</strong> During the curricular internship, I independently managed daily activities and collaborated on group projects, following the directives of the supervisor. I applied and deepened my technical and operational knowledge. The main activities performed include:";
        document.getElementById("azienda").innerHTML    =   "<strong>Company:</strong> <u><a href='https://www.clickitsolutions.it' target='_blank'> Click it Solutions </a></u>  ";
        document.getElementById("prjS").textContent     =   "School Project";
        document.getElementById("prjM").innerHTML       =   'Project: <u><a href="https://www.sitinosetosobellino.altervista.org/progettoMemory/" target="_blank">Memory</a></u>';
        document.getElementById("descP").innerHTML      =   "<strong>Description:</strong> This project was undertaken as an extracurricular activity, with the goal of having fun and learning web programming. We created an application that allows the class to play together in two games, with the teacher acting as the administrator. Here’s what it offers:";
        document.getElementById("memory").innerHTML     =   "<strong>Memory Mode:</strong> Students must match between 8 and 32 cards, depending on the device's space (for example, the school interactive whiteboard showed all 32 cards). Half of the cards show historical figures, while the other half contains the name and a brief description. This game helps to memorize historical figures while having fun.";
        document.getElementById("indovina").innerHTML   =   "<strong>Guess Who Mode:</strong> Users participate in the same session. The teacher can manage the characters, time, hints, and check scores. During the game, the name of the character is gradually revealed to help participants. At the end, results and scores are shown on the screen.";
        document.getElementById("host").textContent     =   "The project is now available online for everyone. The teacher can, with the provided credentials, update and modify the characters, allowing for future expansions and improvements to the game.";
        document.getElementById("tecno").innerHTML      =   "<strong>Technologies:</strong> JavaScript, SQL, HTML, CSS, PHP (click <a href='https://github.com/BetteraNicolo/Memory' target='_blank'> <u>here</u> </a> to view the source code)";

        
        
    }
    else{
        document.getElementById("perito1").textContent  =   "PERITO INFORMATICO";
        document.getElementById("itEssText").textContent=   "Questo corso fornisce una panoramica completa dei fondamenti dell'hardware e del software dei computer, inclusa l'installazione, la configurazione e la risoluzione dei problemi di PC, periferiche e dispositivi mobili. Copre anche i concetti di base di rete e sicurezza informatica.";
        document.getElementById("CSecText").textContent =   "Il corso introduce i concetti fondamentali della sicurezza informatica, inclusi i principi di sicurezza delle informazioni, le minacce e le vulnerabilità comuni, le tecniche di attacco e difesa e le migliori pratiche per la protezione dei dati e dei sistemi.";
        document.getElementById("JSText").textContent   =   "Questo corso introduce i concetti fondamentali di programmazione utilizzando JavaScript. Copre le basi della sintassi del linguaggio, le strutture di controllo, le funzioni, gli oggetti e l'interazione con il DOM (Document Object Model) per la manipolazione dei contenuti web.";
        document.getElementById("CCNAText").textContent =   "Questo è il primo modulo del programma CCNA (Cisco Certified Network Associate) che introduce i concetti di base delle reti. Copre argomenti come l'architettura delle reti, i modelli di comunicazione, gli indirizzi IP, i protocolli e i servizi fondamentali per la comunicazione su rete.";
        document.getElementById("cert").textContent     =   "Certificazioni Cisco";
        document.getElementById("superiori").textContent=   "Ottenute durante l'ultimo anno di Superiori";
        document.getElementById('cv-link').href         =   "pdf/BetteraNicolo-CVITA.pdf";
        document.getElementById("itExp").textContent    =   "Esperienze IT";
        document.getElementById("lista1").textContent   =   "Modifica e aggiornamento di siti web aziendali utilizzando HTML, PHP, CSS, JavaScript e SQL.";
        document.getElementById("lista2").textContent   =   "Risoluzione di problemi hardware e software su PC e laptop, incluse sostituzioni di componenti come memorie, processori, schede madri e alimentatori.";
        document.getElementById("lista3").textContent   =   "Clonazione e ripristino di memorie fisiche.";
        document.getElementById("lista4").textContent   =   "Creazione di contenuti grafici con Photoshop e Illustrator.";
        document.getElementById("lista5").textContent   =   "Formattazione e configurazione di dispositivi su Windows e MacOS.";
        document.getElementById("lista6").textContent   =   "Recupero password e gestione della sicurezza informatica.";
        document.getElementById("lista7").textContent   =   "Installazione di sistemi operativi e software.";
        document.getElementById("lista8").textContent   =   "Assistenza tecnica e teleassistenza per dispositivi e stampanti.";
        document.getElementById("stgC").textContent     =   "Stage curricolare";
        document.getElementById("posizione").textContent=   "Posizione: Tecnico IT";
        document.getElementById("periodo").innerHTML    =   "<strong>Durata:</strong> Giugno 2023 - Luglio 2023";
        document.getElementById("descS").innerHTML      =   "<strong>Descrizione:</strong> Questo progetto è stato realizzato come attività extra, con l'obiettivo di divertirci e imparare la programmazione web. Abbiamo creato un'applicazione che permette alla classe di giocare insieme a due giochi, con l'insegnante che funge da amministratore. Ecco cosa offre:";
        document.getElementById("azienda").innerHTML    =   "<strong>Azienda:</strong> <u><a href='https://www.clickitsolutions.it' target='_blank'> Click it Solutions </a></u>  ";
        document.getElementById("prjS").textContent     =   "Progetto Scolastico";
        document.getElementById("prjM").innerHTML       =   'Progetto: <u><a href="https://www.sitinosetosobellino.altervista.org/progettoMemory/" target="_blank">Memory</a></u>';
        document.getElementById("descP").innerHTML      =   "<strong>Descrizione:</strong> Questo progetto è stato realizzato come attività extra, con l'obiettivo di divertirci e imparare la programmazione web. Abbiamo creato un'applicazione che permette alla classe di giocare insieme a due giochi, con l'insegnante che funge da amministratore. Ecco cosa offre:";
        document.getElementById("memory").innerHTML     =   "<strong>Modalità Memory:</strong> Gli studenti devono abbinare tra 8 e 32 figurine, a seconda dello spazio del dispositivo (ad esempio, la LIM scolastica mostrava tutte e 32 le figurine). Metà delle figurine mostrano personaggi storici, mentre l'altra metà contiene il nome e una breve descrizione. Questo gioco aiuta a memorizzare i personaggi storici divertendosi.";
        document.getElementById("indovina").innerHTML   =   "<strong>Modalità Indovina Chi:</strong> Gli utenti partecipano alla stessa sessione. L'insegnante può gestire i personaggi, il tempo, i suggerimenti e controllare i punteggi. Durante il gioco, il nome del personaggio viene svelato gradualmente per aiutare i partecipanti. Alla fine, i risultati e i punteggi vengono mostrati sullo schermo.";
        document.getElementById("host").textContent     =   "Il progetto è ora disponibile online per tutti. L'insegnante può, con le credenziali fornite, aggiornare e modificare i personaggi, permettendo così future espansioni e miglioramenti del gioco.";
        document.getElementById("tecno").innerHTML      =   "<strong>Tecnologie:</strong> JavaScript, SQL, HTML, CSS, PHP (clicca <a href='https://github.com/BetteraNicolo/Memory' target='_blank'> <u>qui</u> </a> per visualizzare il codice sorgente)";
         
 

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




// funzione in ascolto sullo scroll, attiva l'animazione dell'header in comparsa/scomparsa
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