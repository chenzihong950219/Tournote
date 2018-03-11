<?php   
    require 'util/dbUtil.php';
    $id = $_REQUEST["tourid"];
    $sql = "
        select 
            t.id tourid,title,content,contentImg,type,publishDate,
            nickName,userImgUrl
        from
            t_tour t
        left join
            t_user u
        on
            t.userId = u.id
        where
            t.id = '{$id}';
    ";

    $alert = Array();

    $result = mysqli_query($conn,$sql);
    $tour = mysqli_fetch_array($result,MYSQLI_ASSOC);


    echo json_encode(array('code'=> 'success','data' => $tour));