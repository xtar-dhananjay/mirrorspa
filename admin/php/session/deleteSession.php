<?php


    session_start();
    session_unset();

    if (session_destroy()) {
        echo json_encode(array("status" => "success"));
    }






?>