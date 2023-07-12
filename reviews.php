<?php include 'message.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reviews | Mirror Spa</title>
    <link rel="stylesheet" href="css/root.css">
    <link rel="stylesheet" href="css/review.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

    <form>
        <h2>Collect Reviews</h2>
        <div id="imgBox" onclick="document.getElementById('imgInput').click();">
            <input type="file" hidden id="imgInput">
            <i class="fa-solid fa-image" id="userIcon"></i>
            <img src="img/reviews/1.jpg" id="userPicture" alt="user-photo">
        </div>
        <div id="inputs">
            <div id="reviewStars">
                <i class="fa-solid fa-star star1 star active"></i>
                <i class="fa-solid fa-star star2 star"></i>
                <i class="fa-solid fa-star star3 star"></i>
                <i class="fa-solid fa-star star4 star"></i>
                <i class="fa-solid fa-star star5 star"></i>
            </div>
            <input type="text" placeholder="Name" id="userName">
            <textarea placeholder="Review" id="userReview"></textarea>
        </div>
        <button id="submitBtn">Submit Review</button>
    </form>

    <script src="js/review.js"></script>

</body>
</html>