<?php
// Inclure la connexion à la base de données depuis config.php
include('config.php');

// Récupérer les données envoyées par le formulaire
$nomPatient = $_POST['nomPatient'] ?? '';
$cinPatient = $_POST['cinPatient'] ?? '';
$etatSante = $_POST['etatSante'] ?? '';
$medicaments = $_POST['medicaments'] ?? '';
$conseil = $_POST['conseil'] ?? '';
$dateOrdonnance = $_POST['dateOrdonnance'] ?? '';

// Valider les champs (si nécessaire)
if (!$nomPatient || !$cinPatient || !$etatSante || !$medicaments || !$conseil || !$dateOrdonnance) {
    echo "Tous les champs sont obligatoires.";
    exit;
}

// Insérer les données dans la table `ordonnances`
$sql = "INSERT INTO ordonnances (nom_patient, cin_patient, etat_sante, medicaments, conseils, date_ordonnance)
        VALUES ('$nomPatient', '$cinPatient', '$etatSante', '$medicaments', '$conseil', '$dateOrdonnance')";

if ($conn->query($sql) === TRUE) {
    echo "Ordonnance enregistrée avec succès.";
} else {
    echo "Erreur: " . $sql . "<br>" . $conn->error;
}

// Fermer la connexion
$conn->close();
?>
