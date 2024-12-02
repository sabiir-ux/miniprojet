<?php
// Paramètres de connexion à la base de données
$servername = "localhost"; // Nom du serveur
$username = "root";       // Nom d'utilisateur MySQL
$password = "";           // Mot de passe MySQL
$database = "cabinet";    // Nom de la base de données

// Établir la connexion
$conn = new mysqli($servername, $username, $password, $database);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}
?>
