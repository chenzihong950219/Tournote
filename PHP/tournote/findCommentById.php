<?php
    require "util/dbUtil.php";

    $tourid =$_REQUEST['tourid'];
    if(!$tourid){
        echo json_encode(array('code' => 'error', 'msg' => '加载失败' ));
    };

    $sql ="
        select 
            u.userImgUrl,
            u.nickName,
            c.content,
            c.pubDate
        from
            t_user u
        left join
            t_comment c
        on
            u.id =c.userId
        where
            c.tourId ='{$tourid}'
        order by 
            pubDate
        desc
    ";
    
    $comments = Array();
    $result=mysqli_query($conn,$sql);
    while($row = mysqli_fetch_array($result, MYSQL_ASSOC)){
        array_push($comments,$row);
    }
    echo json_encode(array('code' => 'success', 'comments' => $comments ));