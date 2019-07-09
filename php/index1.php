<?php
require "conn.php";
    $result=$conn->query("select * from lunbo");
    $dataarr=array();
    for($i=0;$i<$result->num_rows;$i++){
    $dataarr[$i] = $result->fetch_assoc();
    }


    $result1=$conn->query("select * from guomei");
    $arr1= array();
    for($i=0;$i<$result1->num_rows;$i++){
        $arr1[$i]=$result1->fetch_assoc();
    };
  


    class data{
    }
    $d1=new data();
    $d1->lunbo=$dataarr;
    $d1->guomei=$arr1;
    echo json_encode($d1);
