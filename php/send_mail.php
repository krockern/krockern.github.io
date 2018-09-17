<meta charset="utf-8">
<?php
echo phpversion();
if(isset($_POST['email'])) {



    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "test@nasvall.dodwiki.se";
    $email_subject = "Kontaktformulär: ";

    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }

    // validation expected data exists
    /*if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['comment'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
    }*/




    $name = $_POST['name']; // required
    echo "<br /><br />". $name . "<br />";
    $email_from = $_POST['email']; // required
    echo $email_from . "<br />";
    $subject = $_POST['subject']; // not required
    echo $subject . "<br />";
    $comment = $_POST['comment']; // required
    echo $comment . "<br /><br />";

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  //if(!preg_match($email_exp,$email_from)) {
  if (!filter_var($email_from, FILTER_VALIDATE_EMAIL)) {
    $error_message .= 'Ej korrekt inmatad epostadress.<br />';
    //$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }

  /*$string_exp = "/^[a-zA-Z0-9\.\+ÅåÄäÖöÜü .'-]+$/";

  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }


  if(strlen($comment) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }*/

  if(strlen($error_message) > 0) {
    died($error_message);
  }

  //$email_message = "Mail skickat from hemsidan.<br /><br />";


  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }

  $email_message .= "Namn: ".clean_string($name)."<br />";
  $email_message .= "Epost: ".clean_string($email_from)."<br />";
  $email_message .= "Ämne: ".clean_string($subject)."<br />";
  $email_message .= "Meddelande: ".clean_string($comment)."<br />";

  $email_subject .= $email_subject.$name;

  // create email headers
  $headers = "Content-Type: text/html; charset=UTF-8\r\n". 'From: '.$email_from."\r\n". 'Reply-To: '.$email_from."\r\n" . 'X-Mailer: PHP/' . phpversion();


  echo "<br /><br />".$email_from."<br />".$email_to."<br />".$email_message;
  //mail($email_from, $email_subject, $email_message, $headers);
  $mailtest = mail($email_to, $email_subject, $email_message, $headers);
  echo "<br /><br />".$mailtest."<br /><br />";
?>

<!-- include your own success html here -->

Tack för ditt meddelande.

<?php

}
?>
