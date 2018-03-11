<?php

    // 定义常量
    // define("变量名","变量值")
    define("HOST", "127.0.0.1");
    define("USERNAME", "root");
    define("PASSWORD", "");
    define("DBNAME", "tournote");

    define("MYSQL_CHARSET", "utf8");
 
    // PHP 连接数据库
    // mysqli_connect(连接地址:端口,登录用户,登录密码[,需要切换的数据库])
    $conn = mysqli_connect(HOST,USERNAME,PASSWORD,DBNAME);
 
    // 验证数据库的连接状态
    if (!$conn) {
        // 在页面中输出 并中断后续代码
        // die("数据库连接失败: " . mysqli_connect_error());
        // 数组是索引数组  ==> json数据对象
        // 数组是关联数组  ==> json 对象
        /*
            $user = Array();
            $user[0] = "tom";
            $user[1] = "123";

        */
        $arr = array();
        $arr["code"] = "error";
        $arr["error"] = mysqli_connect_error();

        // 返回一个JSON数据
        echo json_encode($arr);
        // 结束后续代码执行
        return;
    }
    //设置数据库返回值 和 php脚本一致
    mysqli_query($conn,"set names '".MYSQL_CHARSET."'");