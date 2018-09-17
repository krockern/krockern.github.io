<meta charset="utf-8">
<?php

if(isset($_POST['email'])) {


    $emailError = '';
    // EDIT THE 2 LINES BELOW AS REQUIRED
    //$email_to = "test@nasvall.dodwiki.se";
    $email_to = "test@mail.supernus.se";
    //$email_subject = "Kontaktbegäran från: ";

    function died($error) {
        // your error code can go here
        echo "Tyvärr så har något blivit fel med formuläret.<br />";
        echo "Nedan finns felen.<br /><br />";
        echo $error."<br /><br />";
        echo "Vänligen gå tillbaka och skriv in giltig data.<br /><br />";
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
    //echo "<br /><br />". $name . "<br />";
    $email_from = $_POST['email']; // required
    //echo $email_from . "<br />";
    $subject = $_POST['subject']; // not required
    //echo $subject . "<br />";
    $comment = $_POST['comment']; // required
    //echo $comment . "<br /><br />";

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  //if(!preg_match($email_exp,$email_from)) {
  if (!filter_var($email_from, FILTER_VALIDATE_EMAIL)) {
    $error_message .= 'Ej korrekt inmatad epostadress.<br />';
    $emailError = "Ej korrekt inmatad epostadress.";
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
  $email_message .= "Meddelande: <br />".clean_string($comment)."<br />";

  $email_subject = "Kontaktbegäran från: ".$name;

  // create email headers
  $headers = "Content-Type: text/html; charset=UTF-8\r\n". 'From: '.$email_from."\r\n". 'Reply-To: '.$email_from."\r\n" . 'X-Mailer: PHP/' . phpversion();


  //echo "<br /><br />".$email_from."<br />".$email_to."<br />".$email_message;
  mail($email_from, $email_subject, $email_message, $headers);
  //$mailtest = mail($email_to, $email_subject, $email_message, $headers);
  //echo "<br /><br />".$mailtest."<br /><br />";
?>

<!DOCTYPE html>
<html lang="sv">
	<head>
		<title>Nasvall early alpha</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!--<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">-->
		<link rel="stylesheet" type="text/css" href="../css/w3.css">
	</head>


	<body>

	<!-- Navbar (sit on top) -->
	<div class="w3-top">
		<div class="w3-bar w3-white w3-wide w3-padding w3-card">
			<a href="http://nasvall.dodwiki.se/index.html" class="w3-bar-item w3-button"><b>Emil</b> Näsvall</a>
			<!-- Float links to the right. Hide them on small screens -->
			<div class="w3-right w3-hide-small">
				<a href="http://nasvall.dodwiki.se/index.html" class="w3-bar-item w3-button">Tillbaka</a>
			</div>
		</div>
	</div>



	<!-- Page content -->
	<div class="w3-content w3-padding" style="max-width:1564px">

		<!-- Project Section -->
		<div class="w3-container w3-padding-32" id="projects">
			<h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Tom sida</h3>
		</div>

		<!-- Row with pictures -->
		<div class="w3-row-padding">



			<div class="w3-col l6 m6 w3-margin-bottom">
				<p>Tack för ditt meddelande. Vänligen gå tillbaka tillbaka till föregående sida genom att klicka <a href="http://nasvall.dodwiki.se/index.html">här</a></p>
			</div>



		</div>

	<!-- End page content -->
	</div>

	<!-- Footer 	<footer class="w3-center w3-black w3-padding-16">-->
		<!--<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>-
	</footer>-->

</body>
</html>



<?php

}
?>
