<?php
    require "util/dbUtil.php";

    session_start();;
    $user = $_SESSION["user"];
    $userid = $user["id"];
    $alert = Array();

    if(!$user){
        $alert["code"] = "error";
        $alert["msg"] = "请先登录！";
        echo json_encode($alert);
        return;
    }

    $content = $_REQUEST["content"];
    $tourid = $_REQUEST["tourid"];

    $sql = "
        insert into t_comment
            (content,pubDate,userId,tourId)
        values
            ('{$content}',now(),'{$userid}','{$tourid}');
    ";

    $result = mysqli_query($conn,$sql);

    $alert["code"] = "success";
    $alert["msg"] = "回复评论成功！";
    echo json_encode($alert);