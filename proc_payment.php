<?php
require 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $cin = $_POST['cin'];
    $date = $_POST['date'];
    $service = $_POST['service'];
    $total_amount = $_POST['total_amount'];
    $paid_amount = $_POST['paid_amount'];
    $remaining_amount = $total_amount - $paid_amount;

    try {
        $stmt = $pdo->prepare("INSERT INTO payments (name, surname, cin, date, service, total_amount, paid_amount, remaining_amount)
                               VALUES (:name, :surname, :cin, :date, :service, :total_amount, :paid_amount, :remaining_amount)");
        $stmt->execute([
            ':name' => $name,
            ':surname' => $surname,
            ':cin' => $cin,
            ':date' => $date,
            ':service' => $service,
            ':total_amount' => $total_amount,
            ':paid_amount' => $paid_amount,
            ':remaining_amount' => $remaining_amount,
        ]);

        echo json_encode(['message' => 'Paiement enregistré avec succès']);
    } catch (PDOException $e) {
        echo json_encode(['message' => 'Erreur : ' . $e->getMessage()]);
    }
}
?>
