<?php

    include '../conn.php';

    $serviceTitle = $_POST['serviceTitle'];
    $servicePrice = $_POST['servicePrice'];
    $OfferPrice = $_POST['OfferPrice'];
    $serviceDescription = $_POST['serviceDescription'];
    $permalink = $_POST['permalink'];
    $serviceBenefits = $_POST['serviceBenefits'];
    $oldFile = $_POST['oldFile'];
    $updateID = $_POST['updateID'];
    

    // Search phone for validation
    $pSearchQuery = "SELECT * FROM services WHERE permalink LIKE :cPhone";
    $pstm = $conn->prepare($pSearchQuery);
    $pstm->bindValue(':cPhone', '%' . $permalink . '%', PDO::PARAM_STR);
    $pstm->execute();
    $presults = $pstm->fetchAll(PDO::FETCH_ASSOC);
    
    // Get total rows
    $totalRows = count($presults);
    if ($totalRows > 1) {
        echo json_encode(array("Status" => "Permalink is already exist"));
    }else{

        if (isset($_FILES['file'])) {
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
            $unlinkPath = "../../../img/bestServices/". $oldFile;
            unlink($unlinkPath);
        }else{
            $newName = $oldFile;
        }

        // $sql = "INSERT INTO `services`(`serviceName`, `oldPrice`, `newPrice`, `desc`, `benefits`, `serviceImage`, `permalink`)
        // VALUES (:serviceTitle, :servicePrice, :OfferPrice, :serviceDescription, :serviceBenefits, :newName, :permalink1)";

        $sql = "UPDATE `services` SET `serviceName`=:serviceTitle,`oldPrice`=:servicePrice,`newPrice`=:OfferPrice,`desc`=:serviceDescription,`benefits`=:serviceBenefits,`serviceImage`=:newName,`permalink`=:permalink1 WHERE serviceid = :serviceid";

        $statement = $conn->prepare($sql);
        $statement->bindParam(':serviceTitle', $serviceTitle);
        $statement->bindParam(':servicePrice', $servicePrice);
        $statement->bindParam(':OfferPrice', $OfferPrice);
        $statement->bindParam(':serviceDescription', $serviceDescription);
        $statement->bindParam(':serviceBenefits', $serviceBenefits);
        $statement->bindParam(':newName', $newName);
        $statement->bindParam(':permalink1', $permalink);
        $statement->bindParam(':serviceid', $updateID);

        if ($statement->execute()) {
            echo json_encode(array('Status' => "Successfully saved", "Oldfile" => $oldFile, "updateID" => $updateID));
        }
                



    }
    // echo json_encode(array("Data" => $_POST, "Files" => $_FILES));
    
    
    


?>