<?php


$host = 'localhost';
$dbname = 'movies';
$user = 'root';
$pass = '';

try
{ 
    $db = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
}

catch(PDOException $e) 
{
    echo $e->getMessage();
}


?>