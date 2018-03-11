<?php
    require "util/dbUtil.php";
    error_reporting(0); 
    
    $date = $_REQUEST["date"];
    $place = $_REQUEST["place"];
    if(!$date){
        $date = "0000-00-00";
    }
    if(!$place){
        $place ="%";
    }
    $sql="
        select 
           u.nickName,
           u.userImgUrl,
           t.id,
           t.title,
           t.toCity,
           t.startDate,
           t.intro,
           t.coverImg
        from
            t_together t 
        left join
            t_user u
        on
            u.id = t.userId
        where 
            startDate > '{$date}' and toCity like '{$place}';
    ";
    $result = mysqli_query($conn,$sql);
    $companys = Array();

    while($row = mysqli_fetch_array($result,MYSQL_ASSOC)){
        $newStr = preg_replace("/<[^>]+>/","",$row["intro"]);
        $row["intro"] = mb_substr($newStr,0,45,"utf-8")."......";
        array_push($companys,$row);
    }


    $sql = "
        select 
            count(*) num,
            t.id
        from 
            t_together_join j 
        left join
            t_together t
        on 
            t.id = j.togetherId
        group by
            t.id;
    ";

   $result = mysqli_query($conn,$sql);
   
   while($row = mysqli_fetch_array($result,MYSQL_ASSOC)){
        for($i=0; $i<count($companys);$i++){
            if($companys[$i]["id"] == $row["id"]){
                $companys[$i]["num"] = $row["num"];
            }else{
                $companys[$i]["num"] = 0; 
            }
        }
    }

    echo json_encode(array('code' => 'success' , 'data' => $companys ));