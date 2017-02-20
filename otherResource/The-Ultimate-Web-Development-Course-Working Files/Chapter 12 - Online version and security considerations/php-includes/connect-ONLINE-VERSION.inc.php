<?php

error_reporting(0); // Disable error reporting for production version
                    // Remove this line for development 

$dbConnect = array(
    'server' => '10.168.1.43', 
    'user' => 'webinact_demos',   
    'pass' => '&Y#`,4T+nNVgN6X',      
    'name' => 'webinact_demos' 
);

$db = new mysqli(
    $dbConnect['server'],
    $dbConnect['user'],
    $dbConnect['pass'],
    $dbConnect['name']
);

if ($db->connect_errno>0) {
    // echo "Database connection error" . $db->connect_error;  // Leave this line in for development version
    echo "<h1>Something went wrong!</h1>"; // Put in general message for production version
    exit;
}

?>