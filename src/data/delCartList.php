<?php
header("Content-Type:application/json");
require('./init.php');
@$pid=$_REQUEST['pid'];
@$weight=$_REQUEST["weight"];
session_start();
@$uid=$_SESSION["loginId"];
$sql="delete from daphne_cart where uid=$uid and pid=$pid and weight='$weight'";
if(sql_execute($sql)){
    echo '{"code":1}';
}else{
    echo '{"code":-1}';
}