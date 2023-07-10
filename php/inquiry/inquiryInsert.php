<?php

    // Assuming you have a table named "inquiry" with columns "inquiryName," "InquiryPhone," and "InquiryTime"
    include '../conn.php';

    // Retrieve JSON data from the request body
    $requestPayload = file_get_contents('php://input');
    $data = json_decode($requestPayload, true);
    
    $inquiryName = $data['inquiryName'];
    $inquiryPhone = $data['inquiryPhone'];
    
    date_default_timezone_set('Asia/Kolkata');
    $current_time = date('Y-m-d H:i:s');
    $inquiryTime = $current_time;
    
    $stmt = $conn->prepare("INSERT INTO inquiry (inquiryName, InquiryPhone, InquiryTime) VALUES (:inquiryName, :inquiryPhone, :inquiryTime)");
    $stmt->bindParam(':inquiryName', $inquiryName);
    $stmt->bindParam(':inquiryPhone', $inquiryPhone);
    $stmt->bindParam(':inquiryTime', $inquiryTime);

    if ($stmt->execute()) {
        $responseData = array("status" => "success");
    }else{
        $responseData = array("status" => "faild");
    }
    echo json_encode($responseData);
    

?>
