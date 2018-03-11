<?php

    require "util/dbUtil.php";
    ini_set('date.timezone','Asia/Shanghai');
    session_start();
    $user = $_SESSION["user"];
    $id = $user["id"];
    $password = $_REQUEST["psw"];
    $nickName = $_REQUEST["nn"];
    $alert = Array();

    if($nickName){
        $sql = "
            update t_user 
                set 
            nickName='{$nickName}'
                where 
            id='{$id}';
        ";
        $result = mysqli_query($conn,$sql);

        $alert["code1"] = "success";
        $alert["msg1"] = "修改成功！";
    }


    if($_FILES["uploadedfile"]){

        $tempUrl = $_FILES["uploadedfile"]["tmp_name"];
        $newFile =  "user/".strtotime("U").".".end(explode(".",$_FILES["uploadedfile"]["name"]));
        $baseUrl = "image/";
        move_uploaded_file($tempUrl,$baseUrl.$newFile);
        $sql = "
            update t_user 
                set 
            userImgUrl='{$newFile}'
                where 
            id='{$id}';
        ";
        $result = mysqli_query($conn,$sql);

        $alert["code2"] = "success";
        $alert["msg2"] = "修改成功！";
        $alert["imgUrl"] = $newFile;
    }

    if($password){
        $sql = "
            update t_user 
                set 
            password='{$password}'
                where 
            id='{$id}';
        ";
        $result = mysqli_query($conn,$sql);

        $alert["code3"] = "success";
        $alert["msg3"] = "修改成功！";
    }






    $updateUserSql = "
        select
            *
        from
            t_user
        where
            id='{$id}'
    ";
    $update = mysqli_query($conn,$updateUserSql);
    $updateUser = mysqli_fetch_array($update,MYSQL_ASSOC);
    $_SESSION["user"]=$updateUser;


    echo json_encode($alert);