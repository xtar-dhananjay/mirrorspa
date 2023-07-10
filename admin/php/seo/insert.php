<?php

    include '../conn.php';

    // Retrieve JSON data from the request body
    $requestPayload = file_get_contents('php://input');
    $data = json_decode($requestPayload, true);

    $seoTitle = $data['seoTitle'];
    $seoKeywords = $data['seoKeywords'];
    $seoAuthor = $data['seoAuthor'];
    $seoP = $data['seoPage'];

    // Perform any necessary validation or sanitization of the data

    // Update the data in the database
    $stmt = $conn->prepare("UPDATE seo SET title = :title, keywords = :keywords, author = :author WHERE seoPage = :seoPage");
    $stmt->bindParam(':title', $seoTitle);
    $stmt->bindParam(':keywords', $seoKeywords);
    $stmt->bindParam(':author', $seoAuthor);
    $stmt->bindParam(':seoPage', $seoP);

    if ($stmt->execute()) {
        $response = array('status' => 'success');
        echo json_encode($response);
    } else {
        $response = array('status' => 'error');
        echo json_encode($response);
    }

    // Close the database connection
    $conn = null;

?>
