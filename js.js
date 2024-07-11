function apriMenu(){
    document.getElementById("navLinks").classList.add("show");
}
function chiudiMenu(){
    document.getElementById("navLinks").classList.remove("show");
}



function traduci(lang) {

    if (lang === 'ita') {
        document.getElementById("perito1").textContent = "PERITO INFORMATICO";
        document.getElementById("perito2").textContent = "PERITO INFORMATICO";
        document.getElementById("contatti").textContent = "CONTATTI";
        document.getElementById("contatti").textContent = "CONTATTI";
        document.getElementById("ciao").textContent = "CIAO!";
        document.getElementById("chi").textContent = "Chi Sono?";
        document.getElementById("desc").textContent = "Mi chiamo Nicolò Bettera, sono un giovane studente di Brescia. " +
                                                      "Recentemente ho concluso gli studi presso l'Istituto Tecnico Bonsignori, specializzazione in Informatica. " +
                                                      "Sono ora pronto ad intraprendere il percorso universitario presso la facoltà di Ingegneria Informatica " +
                                                      "dell'Università di Brescia per completare la mia formazione.";
        document.getElementById("").textContent = "";
        document.getElementById("").textContent = "";
        document.getElementById("").textContent = "";


    } else if (lang === 'eng') {
        document.getElementById("perito1").textContent = "COMPUTER TECHNICIAN";
        document.getElementById("perito2").textContent = "COMPUTER TECHNICIAN";
        document.getElementById("contatti").textContent = "CONTACTS";
        document.getElementById("ciao").textContent = "HELLO!";
        document.getElementById("chi").textContent = "Who am I?";
        document.getElementById("desc").textContent = "My name is Nicolò Bettera, I am a young student from Brescia. " +
                                                      "Recently, I completed my studies at the Technical Institute Bonsignori, specializing in Computer Science. " +
                                                      "I am now ready to pursue my university studies at the Faculty of Computer Engineering at the University of Brescia " +
                                                      "to further my education.";
        document.getElementById("").textContent = "";
        document.getElementById("").textContent = "";

    }

    // Salva la lingua selezionata nel localStorage
    localStorage.setItem('lingua', lang);
}


