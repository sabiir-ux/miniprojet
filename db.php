<?php
// Informations de connexion
$host = 'localhost'; // Adresse du serveur
$db = 'cabinet'; // Nom de la base de données
$user = 'root'; // Nom d'utilisateur MySQL (par défaut "root")
$pass = ''; // Mot de passe (vide par défaut pour XAMPP)

// Essai de connexion
try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Active les erreurs
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage()); // Message en cas d'échec
}
?>
