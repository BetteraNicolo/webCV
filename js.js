document.addEventListener('DOMContentLoaded', function() {
    var acceptButton = document.querySelector('#cookieConsent button');

    // Gestisci il click sul pulsante Accetta/Rifiuta
    acceptButton.addEventListener('click', function() {
        var consentElement = document.getElementById('cookieConsent');
        
        // Se è stato accettato, nascondi l'avviso
        if (acceptButton.classList.contains('reject')) {
            consentElement.style.display = 'none';
        } else {
            acceptButton.textContent = 'Accetta!';
            acceptButton.classList.add('reject');
        }

        // Imposta il cookie per indicare che i cookie sono stati accettati
        localStorage.setItem('cookieConsent', true);
    });

    // Verifica se l'utente ha già accettato i cookie
    var cookieAccepted = localStorage.getItem('cookieConsent');
    if (!cookieAccepted) {
        document.getElementById('cookieConsent').classList.add('show');
    }
});


function apriMenu(){
    document.getElementById("navLinks").style.right = "0";
}
function chiudiMenu(){
    document.getElementById("navLinks").style.right = "-200px";
}

