<?php
require('./init.php');
session_start();
@$uid=$_SESSION["loginId"];
//判断上传文件内容是否为空
if(empty($_FILES)){
    die('{"code":-1,"msg":"没有上传文件"}');
}
//获取上传文件名 
@$picName=$_FILES["mypic"]["name"];
@$picSize=$_FILES["mypic"]["size"];

//禁止文件大于512kb
if($picSize>512*1024){
    die('{"code":-2,"msg":"上传文件超过512kb"}');
}
$type=strstr($picName,".");
//判断文件后缀
if($type!='.gif'&&$type!='.jpg'&&$type!='.png'&&
$type!='.mp4'&&$type!='.jpeg'&&$type!='.avi'){
    die{'{"code":-3,"msg":"上传文件格式不正确"}'}
}
//防止文件名相同
$fileName=time().rand(1,9999).$type;
//将临时文件移动到指定的目录下 userImg
$src=$_FILES['mypic']['tmp_name'];
$des="../assets/img/userAvatar/".$fileName;
move_uploaded_file($src,$des);
echo json_encode($des);
