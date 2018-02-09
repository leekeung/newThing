<?php
header("Content-Type:application/json");
require("./init.php");
session_start();

@$uid=$_SESSION["loginId"];
if(!$uid){
	die('{"code":300,"msg":"请登录"}');
}
$sql="select sum,weight,title,c.pid,isChecked,price,
(select img1 from daphne_product_pic where pid=c.pid)
 as img1 from daphne_cart as c join daphne_product as p
  on c.pid=p.pid where c.uid=$uid";
if(sql_execute($sql)){
	echo json_encode(sql_execute($sql));
}else{
	echo '{"code":400}';
}
