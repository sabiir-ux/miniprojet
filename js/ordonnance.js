// Fonction pour imprimer l'ordonnance
function imprimerOrdonnance() {
    const nomPatient = document.getElementById('nomPatient').value;
    const cinPatient = document.getElementById('cinPatient').value;
    const etatSante = document.getElementById('etatSante').value;
    const medicaments = document.getElementById('medicaments').value;
    const conseil = document.getElementById('conseil').value;
    const dateOrdonnance = document.getElementById('dateOrdonnance').value;

    const newWindow = window.open('', '', 'height=700,width=900');

    newWindow.document.write(`
        <html>
        <head>
            <title>Ordonnance Médicale</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h2 { color: #0056b3; }
                p { margin-bottom: 10px; }
                .header { text-align: center; margin-bottom: 30px; }
                .content { border-top: 2px solid #0056b3; padding-top: 20px; }
                footer { text-align: center; margin-top: 50px; color: #555; }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>Cabinet Médical</h2>
                <p><strong>Date :</strong> ${dateOrdonnance}</p>
            </div>
            <div class="content">
                <p><strong>Nom du Patient :</strong> ${nomPatient}</p>
                <p><strong>CIN du Patient :</strong> ${cinPatient}</p>
                <p><strong>État de Santé :</strong> ${etatSante}</p>
                <p><strong>Médicaments :</strong><br>${medicaments.replace(/\n/g, '<br>')}</p>
                <p><strong>Conseils :</strong><br>${conseil.replace(/\n/g, '<br>')}</p>
            </div>
            <footer>&copy; 2024 Cabinet Médical</footer>
        </body>
        </html>
    `);

    newWindow.document.close();
    newWindow.print();
}

// Fonction pour enregistrer l'ordonnance
function enregistrerOrdonnance() {
    const nomPatient = document.getElementById('nomPatient').value;
    const cinPatient = document.getElementById('cinPatient').value;
    const etatSante = document.getElementById('etatSante').value;
    const medicaments = document.getElementById('medicaments').value;
    const conseil = document.getElementById('conseil').value;
    const dateOrdonnance = document.getElementById('dateOrdonnance').value;

    const formData = new FormData();
    formData.append('nomPatient', nomPatient);
    formData.append('cinPatient', cinPatient);
    formData.append('etatSante', etatSante);
    formData.append('medicaments', medicaments);
    formData.append('conseil', conseil);
    formData.append('dateOrdonnance', dateOrdonnance);

    fetch('traitement.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            alert('Erreur lors de l\'enregistrement : ' + error);
        });
}
