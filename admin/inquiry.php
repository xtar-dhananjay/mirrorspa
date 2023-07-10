<?php include 'header.php'; ?>
<link rel="stylesheet" href="css/inquiry.css">

<div id="inquiryTable">
    <table>
        <thead>
            <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Inquiry Timing</th>
            </tr>
        </thead>
        <tbody id="tBody">
            <!-- data come's from javascript fetch method -->
        </tbody>
    </table>
    <div id="loadBox">
        <button>Loadmore</button>
    </div>
</div>

<script src="js/inquiry.js"></script>