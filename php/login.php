<?php
$username = $_POST['user'];
$password = $_POST['pswd'];
$con = mysqli_connect("localhost","root","dbpass123","usermanager");
$stmt ="select * from regiater where username = '$username' and password = '$password';";
$conresult = mysqli_query($con,$stmt);
$row = mysqli_fetch_array($conresult);
$counts = mysqli_num_rows($conresult);
if($counts == 1){
    echo 1;
}
else{
    echo 0;
}
?>