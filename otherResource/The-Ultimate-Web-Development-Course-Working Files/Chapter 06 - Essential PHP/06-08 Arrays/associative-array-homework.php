<?php

echo "<h1>Methods of returning data from arrays</h1>\n\n";

$employee1 = array('Firstname'=>"Michael",'Lastname'=>"Thompson",'Payroll ID'=>"51687",'Salary'=>"26000");
$employee2 = array('Firstname'=>"James",'Lastname'=>"Rasmussen",'Payroll ID'=>"19875",'Salary'=>"15000");
$employee3 = array('Firstname'=>"Henry",'Lastname'=>"Foggett",'Payroll ID'=>"19810",'Salary'=>"150000");

$employees = array($employee1,$employee2,$employee3);

echo "<h2>Details of Employee 1 (Associative Array)</h2>\n\n";

echo "<p>";

foreach ($employee1 as $key => $value) {
    echo $key . ": " . $value . "<br>\n";
}

echo "</p>\n\n";

echo "<h2>Details of all Employees (Associative Array)</h2>\n\n";

$employee_count = count($employees);

for ($x=0; $x<$employee_count; $x++) {
    echo "<h3>Details of Employee " . ($x+1) . "</h3>\n\n";
    echo "<p style='margin-left: 40px;'>";
    foreach ($employees[$x] as $key => $value) {
        echo $key . ": " . $value . "<br />\n";
    }
echo "</p>\n\n"; 
}

?>