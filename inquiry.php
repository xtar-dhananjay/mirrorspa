<link rel="stylesheet" href="css/root.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<link rel="stylesheet" href="css/inquiry.css">

<div id="inquiryForm">
    <form>
        <div id="inquiryFormHeading">
            <h2>Inquiry Form</h2>
            <i class="fa-solid fa-xmark" id="inquiryCloseBtn"></i>
        </div>
        <div class="formInputs">
            <i class="fa-solid fa-user"></i>
            <input id="inquiryName" name="inquiryName" type="text" placeholder="Name">
        </div>
        <div id="inputNumber" class="formInputs">
            <span>+91</span>
            <input id="inquiryPhone" name="inquiryPhone" type="number" placeholder="Phone Number">
        </div>
        <button id="inquiryBtn">Submit</button>
    </form>
</div>

<script src="js/inquiry.js"></script>