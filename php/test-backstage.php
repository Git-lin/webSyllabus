<?php
    // 请求头信息设置
    header('content-type:text/html;charset="utf-8"');
    error_reporting(0);
    // 获取序列化参数属性
    $usrname = $_GET['name'];
    $usrstel = $_GET['tel'];
    // <注意>：echo输出的结果必须是双引号
    echo "您好：{$usrname}，你的手机号是：{$usrstel}";
?>