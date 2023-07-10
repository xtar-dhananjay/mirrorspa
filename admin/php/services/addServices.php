<?php

    include '../conn.php';

    $file = $_FILES['file'];
    $serviceTitle = $_POST['serviceTitle'];
    $servicePrice = $_POST['servicePrice'];
    $OfferPrice = $_POST['OfferPrice'];
    $serviceDescription = $_POST['serviceDescription'];
    $permalink = $_POST['permalink'];
    $serviceBenefits = $_POST['serviceBenefits'];
    

    // Search phone for validation
    $pSearchQuery = "SELECT * FROM services WHERE permalink LIKE :cPhone";
    $pstm = $conn->prepare($pSearchQuery);
    $pstm->bindValue(':cPhone', '%' . $permalink . '%', PDO::PARAM_STR);
    $pstm->execute();
    $presults = $pstm->fetchAll(PDO::FETCH_ASSOC);
    
    // Get total rows
    $totalRows = count($presults);
    if ($totalRows > 0) {
        echo json_encode(array("Status" => "Permalink is already exist"));
    }else{

        // Generate a unique filename
        function generateUniqueFileName($fileExtension) {
            $dateTime = new DateTime();
            $timestamp = $dateTime->format('YmdHis'); // Current date and time
            $randomString = bin2hex(random_bytes(4)); // Generate a random string

            $uniqueFileName = $timestamp . '_' . $randomString . '.' . $fileExtension;

            return $uniqueFileName;
        }
        //

        $fileName = $_FILES['file']['name'];
        $fileTmpPath = $_FILES['file']['tmp_name'];
        $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
        $newName = generateUniqueFileName($fileExtension);
        $destination = '../../../img/bestServices/' . $newName;
        move_uploaded_file($fileTmpPath, $destination);

        $sql = "INSERT INTO `services`(`serviceName`, `oldPrice`, `newPrice`, `desc`, `benefits`, `serviceImage`, `permalink`)
        VALUES (:serviceTitle, :servicePrice, :OfferPrice, :serviceDescription, :serviceBenefits, :newName, :permalink1)";

        $statement = $conn->prepare($sql);
        $statement->bindParam(':serviceTitle', $serviceTitle);
        $statement->bindParam(':servicePrice', $servicePrice);
        $statement->bindParam(':OfferPrice', $OfferPrice);
        $statement->bindParam(':serviceDescription', $serviceDescription);
        $statement->bindParam(':serviceBenefits', $serviceBenefits);
        $statement->bindParam(':newName', $newName);
        $statement->bindParam(':permalink1', $permalink);

        if ($statement->execute()) {
            echo json_encode(array('Status' => "Successfully saved"));
        }
                



    }
    // echo json_encode(array("Data" => $_POST, "Files" => $_FILES));
    
    
    


?>