<?php
require "conn.php";
    $sid=$_POST['sid'];
    $result=$conn->query("select * from guomei where id=$sid");
    echo json_encode($result->fetch_assoc());