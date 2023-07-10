<?php

    include '../conn.php';

    $deleteID = $_GET['deleteID'];

    
    $query1 = "SELECT `serviceImage` FROM `services` WHERE serviceid = :deleteID";
    $stm1 = $conn -> prepare($query1);
    $stm1->bindParam(':deleteID', $deleteID);
    $stm1 -> execute();
    $data = $stm1->fetchAll(PDO::FETCH_ASSOC);
    $fileName = $data[0]['serviceImage'];
    $filePath = "../../../img/bestServices/". $fileName;
    unlink($filePath);

    $query = "DELETE FROM `services` WHERE serviceid = :deleteID";
    $stm = $conn -> prepare($query);
    $stm->bindParam(':deleteID', $deleteID);
    
    if ($stm -> execute()) {
        ?>
        <script>
            window.location = "../../services.php";
        </script>
        <?php
    }
    



?>