<?php
     require "util/dbUtil.php";
     $cid = $_REQUEST["cid"];

     if(!$cid){
         echo json_encode( array('code' => 'error' , 'msg' => '页面出错' ));
         return;
     }

     $sql = "
        select 
            u.nickName,
            u.userImgUrl
        from 
            t_together_join j
        left join
            t_user u
        on 
            j.userId = u.id
        where
            j.togetherId = '{$cid}'
     ";
     
     $result = mysqli_query($conn,$sql);
     $joins = Array();
     while($row = mysqli_fetch_array($result,MYSQL_ASSOC)){
        array_push($joins,$row);
     }
     echo json_encode(array('code' => 'success', 'data' => $joins ));