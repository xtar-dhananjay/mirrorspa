<?php include 'header.php'; ?>
<link rel="stylesheet" href="css/contact.css">


<div id="contactWelcome">
    <img src="img/contact/contactBenner.png" alt="mirror spa contact benner | Best spa in delhi pitampura">
    <div>
        <h2>Contact</h2>
        <p>Contact Mirror spa team</p>
    </div>
</div>

<div id="midContact">
    <div id="googleMap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13998.82696773555!2d77.136657!3d28.6984178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03da86aaaaab%3A0xa884dd9b2f6888dd!2sMaurya%20Laser%20Clinic!5e0!3m2!1sen!2sin!4v1687863473444!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div id="contactDetails">
        <div id="contactInfoBox">
            <div class="cInfo cInfo1">
                <div class="cHeading">
                    <i class="fa-solid fa-phone"></i>
                    <h2>PHONE :</h2>
                </div>
                <div class="cDetails">
                    <p><span>+91 </span>9958494234</p>
                    <p><span>+91 </span>9871595001</p>
                </div>
            </div>
            <div class="cInfo cInfo2">
                <div class="cHeading">
                    <i class="fa-solid fa-envelope"></i>
                    <h2>EMAIL :</h2>
                </div>
                <div class="cDetails">
                    <p>Mirrorspa@gmail.com</p>
                </div>
            </div>
            <div class="cInfo cInfo3">
                <div class="cHeading">
                    <i class="fa-solid fa-location-dot"></i>
                    <h2>Address</h2>
                </div>
                <div class="cDetails">
                    <p>Plot no 10, First Floor,349, opposite pillar number 348, Kapil Vihar,PitamPura, Delhi, 110034</p>
                </div>
            </div>
        </div>

        <div id="contactForm">
            <h2><span>Contact</span> form</h2>
            <form action="">
                <input type="text" id="contactName" name="contactName" placeholder="Name">
                <input type="email" id="contactEmail" name="contactEmail" placeholder="Email">
                <input type="number" id="contactPhone" name="contactPhone" placeholder="Phone Number">
                <textarea placeholder="Message (Optional)" id="contactMsg" name="contactMessage"></textarea>
                <button id="submitBtn">Submit</button>
            </form>
        </div>
    </div>

</div>

<?php include 'footer.php'; ?>

<script src="js/contact.js"></script>