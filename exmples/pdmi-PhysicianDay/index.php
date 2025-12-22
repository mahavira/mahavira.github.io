<?PHP
function curl_url($url,$type=0,$timeout=30){
	
	$msg = ['code'=>2100,'status'=>'error','msg'=>'未知错误！'];
	$imgs= ['image/jpeg'=>'jpeg',
               'image/jpg'=>'jpg',
               'image/gif'=>'gif',
               'image/png'=>'png',
               'text/html'=>'html',
               'text/plain'=>'txt',
               'image/pjpeg'=>'jpg',
               'image/x-png'=>'png',
               'image/x-icon'=>'ico'
		 ];
	if(!stristr($url,'http')){
		$msg['code']= 2101;
		$msg['msg'] = 'url地址不正确!';	
		return $msg;
	}	
	$dir= pathinfo($url);
	//var_dump($dir);
	$host = $dir['dirname'];
	$refer= $host.'/';
	$ch = curl_init($url);
	curl_setopt ($ch, CURLOPT_REFERER, $refer); //伪造来源地址
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//返回变量内容还是直接输出字符串,0输出,1返回内容
	curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);//在启用CURLOPT_RETURNTRANSFER的时候，返回原生的（Raw）输出
	curl_setopt($ch, CURLOPT_HEADER, 0); //是否输出HEADER头信息 0否1是
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout); //超时时间
	$data = curl_exec($ch);
	//$httpCode = curl_getinfo($ch,CURLINFO_HTTP_CODE); 
	//$httpContentType = curl_getinfo($ch,CURLINFO_CONTENT_TYPE);
	$info = curl_getinfo($ch);
	curl_close($ch);
	$httpCode = intval($info['http_code']);
	$httpContentType = $info['content_type'];
	$httpSizeDownload= intval($info['size_download']);
	
	if($httpCode!='200'){
		$msg['code']= 2102;
		$msg['msg'] = 'url返回内容不正确！';
		return $msg;
	}
	if($type>0 && !isset($imgs[$httpContentType])){
		$msg['code']= 2103;
		$msg['msg'] = 'url资源类型未知！';
		return $msg;
	}
	if($httpSizeDownload<1){
		$msg['code']= 2104;
		$msg['msg'] = '内容大小不正确！';
		return $msg;
	}
	$msg['code']  = 200;
	$msg['status']='success';
    $msg['msg'] = '资源获取成功';
	if($type==0 or $httpContentType=='text/html') $msg['data'] = $data;
	$base_64 = base64_encode($data);
	if($type==1) $msg['data'] = $base_64;
	elseif($type==2) $msg['data'] = "data:{$httpContentType};base64,{$base_64}";
	elseif($type==3) $msg['data'] = "<img src='data:{$httpContentType};base64,{$base_64}' />";
	else $msg['msg'] = '未知返回需求！';	
	unset($info,$data,$base_64);
	return $msg;
}

function getReqSign($params /* 关联数组 */, $appkey /* 字符串*/) {
    // 1. 字典升序排序
    ksort($params);

    // 2. 拼按URL键值对
    $str = '';
    foreach ($params as $key => $value)
    {
        if ($value !== '')
	{
            $str .= $key . '=' . urlencode($value) . '&';
        }
    }

    // 3. 拼接app_key
    $str .= 'app_key=' . $appkey;

    // 4. MD5运算+转换大写，得到请求签名
    $sign = strtoupper(md5($str));
    return $sign;
}

function doHttpPost($url, $params){
    $curl = curl_init();

    $response = false;
    do
    {
        // 1. 设置HTTP URL (API地址)
        curl_setopt($curl, CURLOPT_URL, $url);

        // 2. 设置HTTP HEADER (表单POST)
        $head = array(
            'Content-Type: application/x-www-form-urlencoded'
        );
        curl_setopt($curl, CURLOPT_HTTPHEADER, $head);

        // 3. 设置HTTP BODY (URL键值对)
        $body = http_build_query($params);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $body);

        // 4. 调用API，获取响应结果
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_NOBODY, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($curl);
        if ($response === false)
        {
            $response = false;
            break;
        }

        $code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($code != 200)
        {
            $response = false;
            break;
        }
    } while (0);

    curl_close($curl);
    return $response;
}
$path   = empty($_POST['imgUrl_a']) ? 'https://p.qpic.cn/zckj/0/62f4a6b0b28d1b9210cb4d14e31bbac21533987969534/0' : $_POST['imgUrl_a'];
$model   = empty($_POST['model']) ? 14423 : $_POST['model'];
$data   = curl_url($path, 1);
$base64 = $data['data'];
$time_stamp = strval(time());
$nonce_str = strval(rand());
// 设置请求数据
$appkey = 'CQ35Ad0A5kWanRpQ';
$params = array(
    'app_id'     => '2107766761',
    'image'      => $base64,
    'model'      => intval($model),
    'time_stamp' => $time_stamp,
    'nonce_str'  => $nonce_str,
    'sign'       => '',
);

$params['sign'] = getReqSign($params, $appkey);
// var_dump($params);exit;
// 执行API调用
$url = 'https://api.ai.qq.com/fcgi-bin/ptu/ptu_facemerge';
$response = doHttpPost($url, $params);
$data = json_decode($response);
// if ($data->ret==0) {
//  echo '<img src="data:image/jpg;base64,'. $data->data->image .'"/>';
// }

// 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:POST, GET, OPTIONS, PUT, DELETE');
echo $response;