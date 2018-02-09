<?php
require("./init.php");
header("Content-Type;applicetion/json;charset=utf-8");
@$pid=$_REQUEST["pid"];
$output=[];
$sql="select * from daphne_product as p join daphne_product_pic
 as c on p.pid=c.pid where p.pid=$pid";
$output["self"]=sql_execute($sql);
// 找到对应商品的family id
$sql="select fid from daphne_product where pid=$pid";
$fid=sql_execute($sql)[0]["fid"];
$sql="select * from daphne_product as p join daphne_product_pic
 as c on p.pid=c.pid where p.fid=$fid and p.pid<>$pid";
$output["bro"]=sql_execute($sql);
echo json_encode($output);
 