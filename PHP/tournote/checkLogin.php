<?php
    session_start();
    $user = $_SESSION["user"];

    $alert = Array();
    if($user==""){
        $alert["status"] = false;
        $alert["user"] = "";
        echo json_encode($alert);
        return;
    }
    $alert["status"] = true;
    $alert["user"] = $user;
    echo json_encode($alert);
    
    // print_r(json_encode($user));