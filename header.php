<?php
    include 'php/conn.php';
    $PageName = basename($_SERVER['PHP_SELF']);
    $title = "";
    $description = "";
    $keywords = "";

    switch($PageName){
        case 'about.php':
            $PP = "About";
        break;
        case 'services.php':
            $PP = "Service";
        break;
        case 'contact.php':
            $PP = "Contact";
        break;
        case 'roomThemes.php':
            $PP = "RoomThemes";
        break;
        default:
            $PP = "Home";
            break;
        }

    $query = "SELECT * FROM seo WHERE seoPage = :seoPage";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':seoPage', $PP);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $title = $result['title'];
    $keywords = $result['keywords'];
    $description = $result['author'];


?>
<!DOCTYPE html>
<html lang="en">
<head>

    <!-- For Seo purpose -->
    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <meta name="keywords" content="<?php echo $keywords; ?>">
    <meta property="og:title" content="<?php echo $title; ?>">
    <meta property="og:description" content="<?php echo $description; ?>">
    <meta property="og:image" content="img/mainLogo.png">
    <meta name="author" content="Xtar Dhananjay | Motriqs.com Best Web Development Company In Delhi">
    <!-- // -->

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- custom css files -->
    <link rel="stylesheet" href="css/root.css">
    <link rel="stylesheet" href="css/header.css">
    
    <!-- swiperjs CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
    <!-- fontawesome cdn link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    
    <header>
        <nav>
            <div id="mainLogo">
                <a href="index.php"><img src="img/mainLogo.png" alt="Mirror Spa Logo | Best Spa in Delhi, Pitampura, NSP, India | Mirror spa"></a>
            </div>
            <i class="fa-solid fa-bars" id="menuBtn"></i>
            <ul>
                <li class="active"><a href="index.php">Home</a></li>
                <li><a href="about.php">About</a></li>
                <li><a href="services.php">Services</a></li>
                <li><a href="contact.php">Contact</a></li>
                <li><a href="roomThemes.php">Room Themes</a></li>
                <li><a href="" id="topCall"><i class="fa-solid fa-phone"></i></a></li>
                <li><button>Book Now</button></li>
            </ul>
        </nav>
    </header>
    <script src="js/header.js"></script>

</body>
</html>