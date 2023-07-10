<?php include 'header.php'; ?>
<link rel="stylesheet" href="css/addServices.css">

<div id="addServices">
    <form action="">
        <h2>New Services</h2>

        <div id="topFields">
            <div id="imageBox" onclick="document.getElementById('imgFile').click();">
                <input type="file" hidden id="imgFile" name="file">
                <span id="textDisplay">Click To Add Picture</span>
                <img src="img/services/1.jpg" id="displayImgs" alt="Spa-images">
            </div>
            <div id="rightSide">
                <div class="inputs">
                    <label>Service Title</label>
                    <input type="text" name="title" id="serviceTitle" placeholder="Service Title">
                </div>
                <div class="inputs">
                    <label>Price</label>
                    <input type="number" name="oldPrice" id="servicePrice" placeholder="Price">
                </div>
                <div class="inputs">
                    <label>Offer Price</label>
                    <input type="number" id="OfferPrice" name="offerPrice" placeholder="Offer Price">
                </div>
            </div>
        </div>

        <div id="bottomInputs">
            <div class="inputs">
                <label>Description</label>
                <textarea placeholder="Description" name="desc" id="serviceDescription"></textarea>
            </div>
    
            <div class="inputs">
                <label>List of Benefits</label>
                <textarea placeholder="List of Benefits with(, )" name="benefits" id="serviceBenefits" ></textarea>
            </div>
    
            <div class="inputs">
                <label>Permalink</label>
                <input type="permalink" id="permalink" placeholder="permalink" name="permalink">    
            </div>
        </div>

        <button id="submitBtn">Submit</button>

    </form>
</div>



<script src="js/addServices.js"></script>