<?php
header("Content-Type:application/json");
require("./init.php");
$sql="select title,price,p.pid,(select img1 from daphne_product_pic 
where pid=p.pid) as img1 from daphne_product as p";
echo json_encode(sql_execute($sql));