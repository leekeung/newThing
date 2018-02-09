<?php
header("Content-Type:application/json");
require("./init.php");
@$pid=$_REQUEST["pid"];
@$weight=$_REQUEST["weight"];
@$sum=$_REQUEST["sum"];
@$uid=$_REQUEST["uid"];
session_start();
$uid=$_SESSION["loginId"];
if(!$uid){
    die('{"code":300, "msg":"login required"}');
}

$sql ="select * from daphne_cart where uid=$uid and pid=$pid and weight='$weight'";
// 如果用户有相同商品存在
if(sql_execute($sql)){
    $sql="update daphne_cart set sum=sum+$sum 
    where uid=$uid and pid=$pid and weight='$weight'";
}else{
    $sql="insert into daphne_cart values(null,$uid,$pid,'$weight',$sum,'0')";
}
if(sql_execute($sql)){
  echo '{"code":200, "msg":"添加成功"}';
}else {
  echo '{"code":500, "msg":"add err"}';
}

