<?php include 'header.php'; ?>
<link rel="stylesheet" href="css/seoPages.css">

<div id="formSection">
    <form>
        <h2>Home SEO</h2>
        <div class="inputs">
            <label>Title</label>
            <input id="seoTitle" name="seoTitle" type="text" placeholder="Type Title">
        </div>
        <div class="inputs">
            <label>Keywords</label>
            <input id="seoKeywords" name="seoKeywords" type="text" placeholder="Type Keywords">
        </div>
        <div class="inputs">
            <label>Author</label>
            <input id="seoAuthor" name="seoAuthor" type="text" placeholder="Author">
        </div>
        <input type="text" id="seoPageID" name="seoPage" value="Home" hidden>
        <button>Submit</button>
    </form>
</div>


<script src="js/seoPages.js"></script>
<script src="js/seoHome.js"></script>