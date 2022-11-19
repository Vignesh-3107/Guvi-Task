<?php

$data={
    'user':$_POST['user'],
}
$con = new MongoClient("mongodb://localhost:27017");
$db = $con-> usermanager;
$collection = $db->user;
$collection ->insertone($data);

?>