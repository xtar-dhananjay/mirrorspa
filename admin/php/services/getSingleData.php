<?php

    include '../conn.php';
    $updateID = $_GET['updateID'];

    $query = "SELECT * FROM `services` WHERE serviceid = :updateID";
    $stm = $conn -> prepare($query);
    $stm -> bindParam(':updateID', $updateID);
    $stm -> execute();
    $data = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);


?>