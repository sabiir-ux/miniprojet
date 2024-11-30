<?php
// Simulated JSON response for dashboard data
$response = [
    'new_patients' => 3145,
    'todays_appointments' => 2500,
    'total_payments' => 980,
    'todays_earnings' => 25450,
    'patients_gender' => [
        ['gender' => 'Male', 'count' => 1500],
        ['gender' => 'Female', 'count' => 1645],
    ],
];

// Output mock data as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
