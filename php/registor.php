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

}