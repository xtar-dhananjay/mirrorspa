<?php


    include '../conn.php';

    $query = "SELECT * FROM `services` WHERE 1";
    $stm = $conn -> prepare($query);
    $stm -> execute();
    $data = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);





?>