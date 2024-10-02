<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "WildSafari";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn) {
    die("Ошибка подключения: " . mysqli_connect_error());
}
// Получение данных из POST запроса
$name = $_POST['name'];
$dob = $_POST['dob'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$tours = $_POST['tours'];

$sql = "INSERT INTO booking (name, dateOfBirth, phone, email) VALUES ('$name', '$dob', '$phone',  '$email')";
if ($conn->query($sql) === TRUE) {
  $bookingId = $conn->insert_id; // Получение ID только что созданного заказа
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

foreach($tours as $tourId) {
    $sql = "INSERT INTO tourBooking (booking_id, tour_Id) VALUES ('$bookingId', '$tourId')";
    if ($conn->query($sql) !== TRUE) {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
  }
  
  $conn->close();

?>