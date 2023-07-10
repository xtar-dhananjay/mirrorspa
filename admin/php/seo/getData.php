<?php

    include '../conn.php';

    if (isset($_GET['page'])) {
        $seoSection = $_GET['page'];
        $query = "SELECT * FROM `seo` WHERE seoPage = $seoSection";
        $stmt = $conn->prepare($query);
        $stmt->execute();

        // Fetch the results
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Convert results to JSON
        $json = json_encode($results);

        // Output the JSON
        echo $json;




    }







?>