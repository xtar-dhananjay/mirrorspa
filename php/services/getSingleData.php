<?php



    include '../conn.php';
    $dataID = $_GET['dataID'];

    $query = "SELECT * FROM `services` WHERE serviceid = :dataID";
    $stm = $conn -> prepare($query);
    $stm -> bindParam(':dataID', $dataID);
    $stm -> execute();
    $data = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);




?>