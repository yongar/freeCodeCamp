<?php

echo "<h1>Methods of returning data from arrays</h1>";

$employee1 = array('Firstname'=>"Michael",'Lastname'=>"Thompson",'Payroll ID'=>"51687",'Salary'=>"26000");
$employee2 = array('Firstname'=>"James",'Lastname'=>"Rasmussen",'Payroll ID'=>"19875",'Salary'=>"15000");
$employee3 = array('Firstname'=>"Henry",'Lastname'=>"Foggett",'Payroll ID'=>"19810",'Salary'=>"150000");

$employees = array($employee1,$employee2,$employee3);

echo "<h2>Details of Employee 1 (Associative Array)</h2>";

foreach ($employee1 as $key => $value) {
    echo $key . ": " . $value . "<br>";
}

echo "<br>=======================<br>";

echo "<h2>Details of all Employees (Associative Array)</h2>";

$employee_count = count($employees);

for ($x=0; $x<$employee_count; $x++) {
    foreach ($employees[$x] as $key => $value) {
        echo $key . ": " . $value . '<br />';
    }
}

?>