<?php
// Connexion à la base de données
include_once '../config/database.php';

// Requête SQL pour récupérer les paiements totaux
$query = "SELECT SUM(amount) AS total_payments FROM payments";

// Exécution de la requête
$stmt = $conn->query($query);

// Récupérer le résultat
$total_payments = $stmt->fetch(PDO::FETCH_ASSOC);

// Retourner les résultats sous forme de JSON
echo json_encode($total_payments);
?>
