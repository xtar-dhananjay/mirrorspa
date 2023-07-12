<?php


    include '../conn.php';

    $starCount = $_POST['starCount'];
    $userName = $_POST['userName'];
    $userReview = $_POST['userReview'];
    $newName = "1.png";

    // get date
    date_default_timezone_set('Asia/Kolkata');
    $currentDate = date("d, M Y");

    if (isset($_FILES['file'])) {

        // Generate a unique filename
        function generateUniqueFileName($fileExtension) {
            $dateTime = new DateTime();
            $timestamp = $dateTime->format('YmdHis'); // Current date and time
            $randomString = bin2hex(random_bytes(4)); // Generate a random string

            $uniqueFileName = $timestamp . '_' . $randomString . '.' . $fileExtension;

            return $uniqueFileName;
        }

        $fileName = $_FILES['file']['name'];
        $fileTmpPath = $_FILES['file']['tmp_name'];
        $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
        $newName = generateUniqueFileName($fileExtension);
        $destination = '../../img/reviews/' . $newName;
        move_uploaded_file($fileTmpPath, $destination);
    }

    $sql = "INSERT INTO `reviews`(`customerName`, `customerDesc`, `customerImg`, `customerStar`, `reviewTiming`) VALUES (:userName,:userReview,:newName,:starCount,:currentDate)";

    $statement = $conn->prepare($sql);
    $statement->bindParam(':userName', $userName);
    $statement->bindParam(':userReview', $userReview);
    $statement->bindParam(':newName', $newName);
    $statement->bindParam(':starCount', $starCount);
    $statement->bindParam(':currentDate', $currentDate);

    if ($statement->execute()) {
        echo json_encode(array('Status' => "Successfully saved"));
    }
    
    
    
    // echo json_encode(array("File" => 'file selected'));

?>