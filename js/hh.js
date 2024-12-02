document.getElementById('paymentForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Empêche la soumission classique du formulaire

    const formData = new FormData(this); // Récupère les données du formulaire

    try {
        const response = await fetch('process_payment.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.json(); // Transforme la réponse en JSON
        alert(result.message); // Affiche le message
    } catch (error) {
        alert('Une erreur est survenue : ' + error.message);
    }
});
