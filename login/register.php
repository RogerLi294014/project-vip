<?php
 header("Content-type:text/html;charset=utf-8");

$responsedata=array("code"=>0,"message"=>"");

$phonenumber=$_POST['phonenumber'];
$identify=$_POST['identify'];
$password=$_POST['password'];
$repassword=$_POST['confirmpassword'];
$createTime=$_POST['createTime'];

if(!$phonenumber){
    $responseData["code"] = 1;
    $responseData["message"] = "手机号不能为空";
    echo json_encode($responseData);
    exit;
}
if(!$password){
    $responseData["code"] = 2;
    $responseData["message"] = "密码不能为空";
    echo json_encode($responseData);
    exit;
}
if($password != $repassword){
    $responseData["code"] = 3;
    $responseData["message"] = "两次输入的密码不一致";
    echo json_encode($responseData);
    exit;
}

$link=mysql_connect("localhost","root","123456");

if(!$link){
    $responsedata["code"]=4;
    $responsedata["message"]="服务器正忙";
    echo json_encode($responsedata);
    exit;
}
mysql_set_charset("utf8");

mysql_select_db("vipusers");

$sql= "SELECT * FROM username WHERE username='{$phonenumber}'";
$res=mysql_query($sql);
$row=mysql_fetch_assoc($res);

if($row){
   $responsedata["code"]=5;
   $responsedata["message"]="用户名已注册";
   echo json_encode($responsedata);
   exit; 
};
$str=md5(md5(md5($password)."qingdao")."dongying");

$sql="INSERT INTO username(username,password,create_time)VALUES('{$phonenumber}','{$str}',{$createTime})";
$res=mysql_query($sql);
if(!$res){
    $responsedata["code"]=6;
    $responsedata["message"]="服务器忙";
    echo json_encode($responsedata);
    exit;
}else{
    $responsedata["code"]=7;
    $responsedata["message"]="注册成功";
    echo json_encode($responsedata);
}

mysql_close($link);
?>