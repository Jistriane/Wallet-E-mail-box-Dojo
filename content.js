// Verificação de phishing
function checkPhishing(url) {
    const safeDomains = [
        'multiversx.com',
        'xportal.com',
        'maiar.com'
    ];

    const currentDomain = new URL(url).hostname;
    const isSafe = safeDomains.some(domain => currentDomain.includes(domain));

    console.log(`Check phishing by URL: ${isSafe ? 'Passed' : 'Failed'}`);
    return isSafe;
}

// Inicialização
(function() {
    // Verifica o domínio atual
    checkPhishing(window.location.href);

    // Aguarda a extensão MultiversX
    let attempts = 0;
    const maxAttempts = 10;

    const checkExtension = setInterval(() => {
        if (window.MultiversX) {
            console.log('MultiversX extension detected');
            clearInterval(checkExtension);
        } else {
            attempts++;
            if (attempts >= maxAttempts) {
                console.warn('MultiversX extension not detected after multiple attempts');
                clearInterval(checkExtension);
            }
        }
    }, 1000);
})();