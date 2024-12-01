<?php
// Include your database connection file
include('db_connection.php');

// Initialize an empty response array
$response = array();

// Query to get new and return patients count per month (for illustration, you can customize it)
$newPatientsQuery = "SELECT COUNT(*) AS new_patients, MONTH(appointment_date) AS month FROM patients WHERE YEAR(appointment_date) = YEAR(CURDATE()) GROUP BY month";
$returnPatientsQuery = "SELECT COUNT(*) AS return_patients, MONTH(appointment_date) AS month FROM patients WHERE YEAR(appointment_date) = YEAR(CURDATE()) AND return_patient = 1 GROUP BY month";

// Query to get gender distribution (male, female, and kids)
$genderQuery = "SELECT gender, COUNT(*) AS count FROM patients GROUP BY gender";

// Execute the queries
$newPatientsResult = mysqli_query($conn, $newPatientsQuery);
$returnPatientsResult = mysqli_query($conn, $returnPatientsQuery);
$genderResult = mysqli_query($conn, $genderQuery);

// Process the results
$newPatients = array_fill(0, 12, 0); // Initialize all months to 0
$returnPatients = array_fill(0, 12, 0); // Initialize all months to 0

// Populate new patients data
while ($row = mysqli_fetch_assoc($newPatientsResult)) {
    $newPatients[$row['month'] - 1] = (int)$row['new_patients']; // Adjust index to start from 0
}

// Populate return patients data
while ($row = mysqli_fetch_assoc($returnPatientsResult)) {
    $returnPatients[$row['month'] - 1] = (int)$row['return_patients']; // Adjust index to start from 0
}

// Process gender data (assumes 'male', 'female', 'kids' values are used for gender)
$genderData = ['Male' => 0, 'Female' => 0, 'Kids' => 0];
while ($row = mysqli_fetch_assoc($genderResult)) {
    if ($row['gender'] == 'male') {
        $genderData['Male'] = (int)$row['count'];
    } elseif ($row['gender'] == 'female') {
        $genderData['Female'] = (int)$row['count'];
    } elseif ($row['gender'] == 'kid') {
        $genderData['Kids'] = (int)$row['count'];
    }
}

// Prepare the response data
$response['newPatients'] = $newPatients;
$response['returnPatients'] = $returnPatients;
$response['genderData'] = array_values($genderData); // Convert associative array to indexed array

// Set the content type to JSON
header('Content-Type: application/json');

// Output the response as JSON
echo json_encode($response);

// Close the database connection
mysqli_close($conn);
?>
