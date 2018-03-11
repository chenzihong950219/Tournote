<?php
    require "util/dbUtil.php";
    $userTel = $_REQUEST["tel"];
    $password = $_REQUEST["psw"];
    $alert = Array();
    if($userTel == ""){
        $alert["code"] = "error";
        $alert["msg"] = "手机号不能为空！";
        echo json_encode($alert);
        return;
    };

    if(!preg_match("/^1[34578]\d{9}$/", $userTel)){
        $alert["code"] = "error";
        $alert["msg"] = "请输入正确的手机号！";
        echo json_encode($alert);
        return;
    };

    if($password == ""){
        $alert["code"] = "error";
        $alert["msg"] = "请输入密码！";
        echo json_encode($alert);
        return;
    };


    $checkSql = "
        select
            *
        from
            t_user
        where
            userTel = '{$userTel}' and password = '{$password}'
    ";

    $check = mysqli_query($conn,$checkSql);
    if($check -> num_rows==0){
        $alert["code"] = "error";
        $alert["msg"] = "用户名或密码错误!";
        echo json_encode($alert);
        return;
    };
    
    session_start();
    $user = mysqli_fetch_array($check,MYSQL_ASSOC);
    $_SESSION["user"]=$user;

    $alert["code"] = "success";
    $alert["msg"] = "登陆成功！";
    echo json_encode($alert);