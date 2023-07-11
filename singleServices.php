<?php include 'header.php'; ?>
<link rel="stylesheet" href="css/singleServices.css">

<input type="text" hidden id="dataID" value="<?php echo $_GET['dataID']; ?>">
<div id="singleService">
    <div id="serviceContent">
        <div id="serviceArticle">
            <div id="articleImgbox">
                <h3>₹<span id="serviceNewPrice">3000</span> <span class="oldPrice"><strike>₹<span id="servicesOldPrice">3999</span></strike></span></h3>
                <img src="img/services/allServices/1.jpg" id="sreviceImg" alt="Mirror Spa Pitampura">
            </div>
            <h2 id="serviceTitle"><!-- data come's from database --></h2>
            <p id="serviceDesc"><!-- data come's from database --></p>
            <ul id="listOfBenefits">
                <!-- data come's from database -->
            </ul>
            <button onclick="inquiryForm.classList.toggle('active');">Book Now</button>
        </div>
    </div>
    <div id="allServices">
        <h2 id="allServicesHeading">ALl Services</h2>
        <div id="innerAllServices">
            <!-- data come's from database -->
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>
<script src="js/singleSerivce.js"></script>