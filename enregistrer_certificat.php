<?php
// Informations de connexion à la base de données
$host = 'localhost'; // Adresse du serveur
$dbname = 'cabinet_medical'; // Nom de la base créée
$username = 'root'; // Nom d'utilisateur par défaut de MySQL
$password = ''; // Mot de passe vide par défaut sous XAMPP/WAMP

// Connexion à la base de données avec PDO
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Vérification que la requête est bien en méthode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nomPatient = $_POST['nomPatient'];
    $cinPatient = $_POST['CINPatient'];
    $etatSante = $_POST['etatSante'];
    $dateCertificat = $_POST['dateCertificat'];
    $motifCertificat = $_POST['motifCertificat'];

    // Requête d'insertion dans la table certificats
    $sql = "INSERT INTO certificats (nom_patient, cin_patient, etat_sante, date_certificat, motif_certificat)
            VALUES (:nomPatient, :cinPatient, :etatSante, :dateCertificat, :motifCertificat)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':nomPatient' => $nomPatient,
        ':cinPatient' => $cinPatient,
        ':etatSante' => $etatSante,
        ':dateCertificat' => $dateCertificat,
        ':motifCertificat' => $motifCertificat
    ]);

    echo "Certificat enregistré avec succès.";
}
?>
