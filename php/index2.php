<?php
require "conn.php";
    $result=$conn->query("select * from lunbo");
    $dataarr=array();
    for($i=0;$i<$result->num_rows;$i++){
    $dataarr[$i] = $result->fetch_assoc();
    }
    // lunbo
    echo json_encode($dataarr);