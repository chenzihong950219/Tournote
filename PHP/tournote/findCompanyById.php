<?php
    require "util/dbUtil.php"; 

    $cid = $_REQUEST["cid"];
    if(!$cid){
        echo json_encode(array('code' => 'error', 'msg' => '页面错误' ));
        return;
    }
    $sql ="
        select 
            u.nickName,
            u.userImgUrl,
            t.title,
            t.fromCity,
            t.toCity,
            t.startDate,
            t.lastDays,
            t.limitNum,
            t.intro,
            t.coverImg
        from 
            t_user u
        left join 
            t_together t
        on
            t.userId = u.id
        where 
            t.id = '{$cid}'
    ";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result,MYSQL_ASSOC);
    echo json_encode( array('code' => 'success', 'data' => $row ));



