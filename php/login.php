<?php
require 'conn.php';
$username=$_POST['$name'];
$password=$_POST['$pwd'];
$requse=$conn->query("select * from user where username='$username' and password='$password'");
if($requse->fetch_assoc()){
    echo true;
}else{
    echo false;
}