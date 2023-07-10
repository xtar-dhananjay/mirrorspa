<?php

    include '../conn.php';

    // Get current page number from URL
    $page = $_GET['page'] ?? 1;
    $limit = 10; // Number of rows per page

    // Calculate offset
    $offset = ($page - 1) * $limit;

    // Query to fetch table data
    $sql = "SELECT * FROM `inquiry` ORDER BY `inquiryid` DESC LIMIT :limit OFFSET :offset";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();

    // Fetch data as associative array
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // Get total rows
    $totalRows = count($data);

    // Return result as JSON
    $result = [
        'totalRows' => $totalRows,
        'mainData' => $data
    ];
    echo json_encode($result);

?>