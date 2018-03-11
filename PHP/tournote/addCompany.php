<?php
    require "util/dbUtil.php";

    session_start();

    $alert = Array();

    $userId = $_SESSION["user"]["id"];

    if(!$userId){
        $alert["code"] = "error";
        $alert["msg"] = "请先登录！";
        echo json_encode($alert);
        return;
    };

    $title = $_REQUEST['title'];
    $tel = $_REQUEST['tel'];
    $qq = $_REQUEST['qq'];
    $weixin = $_REQUEST['weixin'];
    $toCity = $_REQUEST['toCity'];
    $fromCity = $_REQUEST['fromCity'];
    $startDate = $_REQUEST['startDate'];
    $lastDays = $_REQUEST['lastDays'];
    $limitNum = $_REQUEST['limitNum'];
    $intro = $_REQUEST['intro'];
    $coverImg = $_REQUEST['coverImg'];


    if(!$title ||!$tel ||!$qq ||!$weixin ||!$toCity ||!$fromCity ||!$startDate ||!$lastDays ||!$limitNum ||!$intro ||!$coverImg)
    {
        $alert["code"] = "error";
        $alert["msg"] = "请完善结伴发布信息！";
        echo json_encode($alert);
        return;
    }

    $sql = "insert into t_together
        (title,
        tel,
        qq,
        weixin,
        toCity,
        fromCity,
        startDate,
        lastDays,
        limitNum,
        intro,
        coverImg,
        userId)
    values
        ( '{$title}',
        '{$tel}',
        '{$qq}',
        '{$weixin}',
        '{$toCity}',
        '{$fromCity}',
        '{$startDate}',
        '{$lastDays}',
        '{$limitNum}',
        '{$intro}',
        '{$coverImg}',
        '{$userId}')
    ";

    mysqli_query($conn,$sql);
    $alert["code"] = "success";
    $alert["msg"] = "发布成功！";
    $alert["id"] = "发布成功！";
    echo json_encode($alert);
