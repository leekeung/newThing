<?php
header("Content-Type:application/json");
require("./init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
$sql="select * from daphne_user where uname='$uname' and upwd='$upwd'";
if(sql_execute($sql)){
    session_start();
    $_SESSION["loginId"]=sql_execute($sql)[0]["uid"];
    echo '{"code":1,"msg":"登陆成功"}';
}else{
    echo '{"code":-1,"msg":"用户名或密码错误"}';    
}
