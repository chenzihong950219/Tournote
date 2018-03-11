<?php
    require "util/dbUtil.php";
    $userTel = $_REQUEST["tel"];
    $alert = Array();
    if($userTel == ""){
        $alert["code"] = "error";
        $alert["msg"] = "手机号不能为空！";
        echo json_encode($alert);
        return;
    };

    $checkSql = "
        select
            *
        from
            t_user
        where
            userTel = '{$userTel}'
    ";

    $check = mysqli_query($conn,$checkSql);
    if($check -> num_rows){
        $alert["code"] = "error";
        $alert["msg"] = "手机号已被注册!";
        echo json_encode($alert);
        return;
    };

    $nickname = "新人";
    $userImgUrl = "user/user.jpeg";
    $password = rand(100000,999999);
    $alert["password"] = $password;

    $sql = "
        insert into t_user
            (userTel,password,nickname,userImgUrl)
        values
            ('{$userTel}','{$password}','{$nickname}','{$userImgUrl}')
    ";

    $result = mysqli_query($conn,$sql);
    $alert["code"] = "success";
    $alert["msg"] = "注册成功！";
    echo json_encode($alert);


