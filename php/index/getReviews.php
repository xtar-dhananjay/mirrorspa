<?php


    include '../conn.php';

    $query = "SELECT * FROM `reviews` ORDER BY `reviewID` DESC LIMIT 20";
    $stm = $conn -> prepare($query);
    $stm -> execute();
    $data = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);





?>