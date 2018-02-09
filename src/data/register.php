<?php
require("./init.php");
@$uname =$_REQUEST["uname"];
if($uname==""){
    die('{"code":-1,"msg":"用户名不能为空"}');
}
@$upwd=$_REQUEST["upwd"];
if($upwd==""){
    die('{"code":-2,"msg":"密码不能为空"}');
}
@$qpwd=$_REQUEST["qpwd"];
if($qpwd==""){
    die('{"code":-3,"msg":"确认密码不能为空"}');
}
if($upwd!=$qpwd){
    die('{"code":-4,"msg":"两次输入密码不一致"}');    
}
$sql="select uname from daphne_user where uname='$uname'";
if(count(sql_execute($sql))>0){
    die('{"code":-5,"msg":"用户名已存在"}');    
}
$sql="insert into daphne_user values(null,'$uname','$upwd')";
if(sql_execute($sql)){
    echo '{"code":1,"msg":"注册成功"}';
}