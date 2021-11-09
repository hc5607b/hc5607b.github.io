<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $mail = $_POST['mail'];
        $txtfield = $_POST['textf'];
        $agree = $_POST['chkb'];
        $opt = $_POST['choise'];

        if($agree == 1){
            echo "Fname ". $fname ."<br>";
            echo "Lname ". $lname ."<br>";
            echo "Mail ". $mail ."<br>";
            echo "Text ". $txtfield ."<br>";
            echo "opt ". $opt ."<br>";
        }
      }
?>