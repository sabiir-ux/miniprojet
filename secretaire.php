<?php
// Connexion à la base de données
$host = 'localhost'; // Remplacez par votre hôte
$dbname = 'cabinet'; // Nom de la base de données
$username = 'root';  // Nom d'utilisateur de la base de données
$password = '';      // Mot de passe de la base de données

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

// Vérification des saisies de l'utilisateur
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Requête pour vérifier l'email et le mot de passe dans la table 'secretaire'
    $query = "SELECT * FROM secretaire WHERE email = :email AND password = :password";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // Authentification réussie
        echo "Bienvenue, vous êtes connecté en tant que secrétaire.";
        // Rediriger vers la page d'accueil ou autre
        header("Location: dashboard.php"); // Remplacez 'dashboard.php' par la page d'accueil après connexion
        exit();
    } else {
        // Authentification échouée
        echo "Email ou mot de passe incorrect.";
    }
}
?>
