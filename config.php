<?php
// Activer l'affichage des erreurs pour le développement (désactiver en production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Paramètres de connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cabinet";

// Création d'une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}

// Fonction pour sécuriser les données (optionnelle, utile pour éviter les injections SQL)
function securiserDonnees($data) {
    global $conn;
    return mysqli_real_escape_string($conn, htmlspecialchars($data));
}
?>
