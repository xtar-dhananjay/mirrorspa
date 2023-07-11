<?php

    session_start();

    $username = 'xtardhananjay';
    $password = '(23dhananjay)';

    // echo json_encode(array($_GET['username'], $_GET['password']));

    if ($_GET['username'] == $username) {
        if ($_GET['password'] == $password) {
            if ($_SESSION['username'] = $username) {
                echo json_encode(array("status" => "success"));
            }
        }else{
            echo json_encode(array("status" => "failed", "errorMessage" => "Password invalid"));
        }
    }else{
        echo json_encode(array("status" => "failed", "errorMessage" => "Username invalid"));
    }




?>