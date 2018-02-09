<?php
header("Content-Type:application/json");
require("./init.php");
session_start();
if(!$_SESSION["loginId"]){
    die('{"code":-1,"msg":"未登录"}');
}
$sql="select id from daphne_cart where uid=$_SESSION[loginId]";
echo count(sql_execute($sql));

