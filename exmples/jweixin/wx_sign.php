<?php
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE,OPTIONS');
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Headers:*');
// header('Access-Control-Allow-Headers:appversion,authorization,content-type,deviceid');

$callback=empty($_REQUEST['callback'])?"":$_REQUEST['callback'];
require_once "jssdk.php";
define("YOURAPPID",     "wxfc6fcef1688e0576");
define("YOURAPPSECRET",     "e28b0356f5b95d011d9448d629e08aaf");

$jssdk = new JSSDK(YOURAPPID, YOURAPPSECRET);
$signPackage = $jssdk->GetSignPackage();
if ($callback) {
	echo $callback . '('.json_encode((array("status"=>1,"message"=>"成功","result"=>$signPackage))).')';
} else {
	echo json_encode((array("status"=>1,"message"=>"成功","result"=>$signPackage)));
}
?>
