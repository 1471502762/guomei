<?php
include "conn.php";
if(isset($_POST['$name'])){
    $user=$_POST['$name'];
    $result=$conn->query("select * from user where username='$user'");
    if($result->fetch_assoc()){//已存在
        echo true;
    }else{//不存在
        echo false;
    }

};

if(isset($_POST['submit'])){
    $name=$_POST['login'];
    $password=$_POST['password'];
    $confirmPassword=$_POST['confirmPassword'];
    $mobile=$_POST['mobile'];
    $verifyCode=$_POST['verifyCode'];
    $conn->query("insert user values(null,'$name','$password','$confirmPassword','$mobile','$verifyCode')");
    header('location:http://10.31.158.35/guomei/src/login.html');

}