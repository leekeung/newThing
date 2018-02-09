
<?php
header("Content-Type:application/json;charset=utf-8");
require('./init.php');
$output=[];
// 获取轮播图图片
$sql="select * from daphne_slider";
$output["sliders"]=sql_execute($sql);
// 获取生鲜信息
$sql="select p.pid,title,fid,price, (select img1 from
 daphne_product_pic as c where c.pid=p.pid) as img1
  from daphne_product as p where fid=1";
$output["f_1"]=sql_execute($sql);
// 获取休闲零食信息
$sql="select p.pid,title,fid,price, (select img1 from
 daphne_product_pic as c where c.pid=p.pid) as img1
  from daphne_product as p where fid=2";
 $output["f_2"]=sql_execute($sql);
// 获取水果信息
$sql="select p.pid,title,fid,price, (select img1 from
 daphne_product_pic as c where c.pid=p.pid) as img1
  from daphne_product as p where fid=3";
 $output["f_3"]=sql_execute($sql);
echo json_encode($output);