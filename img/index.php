<?php     

    session_start();
    if (!isset($_SESSION['username'])) {
        ?>
        <script>
            window.location = "index.php";
        </script>
        <?php
    }else{
        echo "<h1 style='background: red;'>Not Found<h1>";
    }
    
?>