<?php
    require "util/dbUtil.php";

    session_start();

    $alert = Array();

    $userId = $_SESSION["user"]["id"];
    $title = $_REQUEST['title'];
    $content = $_REQUEST['content'];
    $contentImg = $_REQUEST['contentImg'];
    $type = $_REQUEST['type'];


    if(!$userId){
        $alert["code"] = "error";
        $alert["msg"] = "请先登录！";
        echo json_encode($alert);
        return;
    };

    if(!$title || !$content || !$contentImg  || !$type){
        $alert["code"] = "error";
        $alert["msg"] = "请完善游记发布信息！";
        echo json_encode($alert);
        return;
    };

    $sql = "
        insert into t_tour
            (title,content,contentImg,type,publishDate,userId)
        values
            ('{$title}','{$content}','{$contentImg}','{$type}',now(),'{$userId}')
    ";

    $result = mysqli_query($conn,$sql);
    $alert["code"] = "success";
    $alert["msg"] = "提交成功！";
    echo json_encode($alert);