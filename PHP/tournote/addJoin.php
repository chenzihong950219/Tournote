<?php
    require "util/dbUtil.php";

    session_start();
    $user = $_SESSION["user"];
    $userid = $user["id"];
    if(!$userid){
        echo json_encode(array('code' => 'login', 'msg' => '请先登录' ));
        return;
    };

    $cid = $_REQUEST["cid"];
    $sql ="
        select 
            id 
        from
            t_together_join
        where
            togetherId = '{$cid}' and userId = '{$userid}'
    ";
    $result = mysqli_query($conn,$sql);
    if($result->num_rows){
        echo json_encode(array('code' => 'error', 'msg' => '请勿重复添加' ));
        return;
    };

    $sql ="
        insert into t_together_join
            (userId,togetherId)
        values
            ('{$userid}','{$cid}');
    ";

    
    mysqli_query($conn,$sql);
    echo json_encode(array('code' => 'success', 'msg' => '报名成功！' ));