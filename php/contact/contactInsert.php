<?php

    include '../conn.php';

    // Retrieve JSON data from the request body
    $requestPayload = file_get_contents('php://input');
    $data = json_decode($requestPayload, true);

    $contactName = $data['contactName'];
    $contactPhone = $data['contactPhone'];
    $contactEmail = $data['contactEmail'];
    $contactMessage = $data['contactMessage'];

    if ($contactMessage == '') {
        $contactMessage = '--Blank--';
    }

    date_default_timezone_set('Asia/Kolkata');
    $current_time = date('Y-m-d H:i:s');
    $contactTime = $current_time;

    $stmt = $conn->prepare("INSERT INTO contact (contactName, contactPhone, contactEmail, contactMessage, contactTime) VALUES (:contactName, :contactPhone, :contactEmail, :contactMessage, :contactTime)");
    $stmt->bindParam(':contactName', $contactName);
    $stmt->bindParam(':contactPhone', $contactPhone);
    $stmt->bindParam(':contactEmail', $contactEmail);
    $stmt->bindParam(':contactMessage', $contactMessage);
    $stmt->bindParam(':contactTime', $contactTime);

    if ($stmt->execute()) {
        $responseData = array("status" => "success");
    }else{
        $responseData = array("status" => "faild");
    }
    echo json_encode($responseData);
    

?>
