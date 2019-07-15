<?php
require "conn.php";
    // $result=$conn->query("select * from lunbo");
    // $dataarr=array();
    // for($i=0;$i<$result->num_rows;$i++){
    // $dataarr[$i] = $result->fetch_assoc();
    // }
    // // lunbo
    // echo json_encode($dataarr);

    $result1=$conn->query("select * from guomei limit 6");
    $arr1= array();
    for($i=0;$i<$result1->num_rows;$i++){
        $arr1[$i]=$result1->fetch_assoc();
    };
  

    $result2=$conn->query("select * from guomei limit 6,6");
    $arr2= array();
    for($i=0;$i<$result2->num_rows;$i++){
        $arr2[$i]=$result2->fetch_assoc();
    };

    $result3=$conn->query("select * from guomei limit 12,6");
    $arr3= array();
    for($i=0;$i<$result3->num_rows;$i++){
        $arr3[$i]=$result3->fetch_assoc();
    };


    class data{
    }
    $d1=new data();
    // $d1->lunbo=$dataarr;//单独一个接口
    $d1->guomei1=$arr1;
    $d1->guomei2=$arr2;
    $d1->guomei3=$arr3;
    echo json_encode($d1);
