<?php

$con = new mysqli("localhost","root","dbpass123","usermanager");
$firstName = $_POST['FirstName'];
$lastName = $_POST['LastName'];
$userName = $_POST['UserName'];
$email = $_POST['Email'];
$pwd = $_POST['Password'];
$sql="insert into register (First_Name,Last_Name,User_Name,Email,Password) values ('{$firstName}','{$lastName}','{$userName}','{$email}','{$pwd}')";
$con->query($sql);

?>