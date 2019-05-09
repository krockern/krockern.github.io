<?php
header('Content-Type: application/json; charset=utf-8');

$servername = "localhost";
$username = "nasvall";
$password = "Bliz.zard0180";
$dbname = "nasvall";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,"utf8");
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM statues";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $resultArray = array();

  // output data of each row
  while($row = $result->fetch_assoc()) {

    $rowArray = array('name'=>$row["name"], 'pageLoc'=>$row["pagesLoc"], 'className'=>$row["className"],
                      'imageLoc'=>$row["imageLoc"], 'altName'=>$row["altName"], 'imageStyle'=>$row["imageStyle"],
                      'imageText'=>$row["imageText"], 'imageTextSmall'=>$row["imageTextSmall"], 'lat'=>$row["lat"],
                      'lng'=>$row["lng"], 'title'=>$row["title"], 'info'=>$row["info"],
                      'pinColor'=>$row["pinColor"], 'include'=>$row["include"]);


    array_push($resultArray, $rowArray);

  }

  echo json_encode(array_values($resultArray));

/*  $i = 0;
  $len = count($resultArray);
  foreach ($resultArray as $variable) {

    /*foreach ($variable as $key) {
      // code...
      echo $key;
    }*/
      /*echo json_encode($variable);
      if ($i <= $len - 1){
        echo ",";
      }
*/
  //}

} else {
  echo "0 results";
}

$conn->close();
?>
