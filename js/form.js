function imprimerCertificat() {
    const nomPatient = document.getElementById('nomPatient').value;
    const CINPatient = document.getElementById('CINPatient').value;
    const etatSante = document.getElementById('etatSante').value;
    const dateCertificat = document.getElementById('dateCertificat').value;
    const motifCertificat = document.getElementById('motifCertificat').value;

    const newWindow = window.open('', '', 'height=600,width=800');
    newWindow.document.write(`
        <html>
            <head>
                <title>Certificat Médical</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h2 { color: #2d6187; }
                    p { margin-bottom: 10px; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .header img { width: 100px; }
                    .content { border-top: 2px solid #2d6187; padding-top: 20px; }
                    .content p { line-height: 1.6; }
                    footer { text-align: center; margin-top: 50px; color: #555; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>Cabinet Médical</h2>
                    <p><strong>Date :</strong> ${dateCertificat}</p>
                </div>
                <div class="content">
                    <p><strong>Nom du Patient :</strong> ${nomPatient}</p>
                    <p><strong>CIN du Patient :</strong> ${CINPatient}</p>
                    <p><strong>État de Santé :</strong> ${etatSante}</p>
                    <p><strong>Date du Certificat :</strong> ${dateCertificat}</p>
                    <p><strong>Motif :</strong> ${motifCertificat}</p>
                </div>
                <footer>&copy; 2024 Cabinet Médical</footer>
            </body>
        </html>
    `);
    newWindow.document.close();
    newWindow.print();
}


