<?php
if(isset($_POST['Submit'])){
    $name=$_POST['name'];
    $name=$_POST['Phone'];
    $name=$_POST['Email'];
    $name=$_POST['Message'];

    $to='saroyemohit@gmail.com';
    $subject='Message from Website/';
    $message= "Name: " .$name."\n"."Phone: "."\n". "Message is as follows: "."\n\n".$Message;
    $headers="From: ".$email;
    if(mail($to, $subject, $message, $headers)){
        echo "<h1> Thank you for your interest!"." ".$name.", I will reply you as soon as I recieve this message! <h1>";
    }
    else{
        echo "Error: 404";
    }
}
?>