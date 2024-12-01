<?php
include '../db.php';

$query = "SELECT COUNT(*) AS new_patients
          FROM patients
          WHERE MONTH(date_naissance) = MONTH(CURRENT_DATE())
            AND YEAR(date_naissance) = YEAR(CURRENT_DATE())";
$stmt = $conn->prepare($query);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);

echo json_encode($result); // Renvoie {"new_patients": 5}
?>
