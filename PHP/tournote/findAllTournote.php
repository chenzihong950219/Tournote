<?php   
    require 'util/dbUtil.php';

    $sql = "
        select 
            t.id tourid,title,content,contentImg,type,publishDate,
            nickName,userImgUrl
        from
            t_tour t
        left join
            t_user u
        on
            t.userId = u.id;
    ";

    $alert = Array();

    $result = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
        // 正则表达式删除标签
        $newStr = preg_replace("/<[^>]+>/","",$row["content"]);

        // 截取部分字符
        $row["content"] = mb_substr($newStr,0,40,"utf-8")."......";

        array_push($alert,$row);
    };

    echo json_encode(array('code'=> 'success','tours' => $alert));