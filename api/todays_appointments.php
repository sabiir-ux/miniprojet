<?php
// Connexion à la base de données
include_once '../config/database.php';

// Requête SQL pour récupérer les rendez-vous d'aujourd'hui
$query = "SELECT * FROM appointments WHERE DATE(appointment_date) = CURDATE()";

// Exécution de la requête
$stmt = $conn->query($query);

// Récupérer les résultats
$appointments = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Retourner les résultats sous forme de JSON
echo json_encode($appointments);
?>
