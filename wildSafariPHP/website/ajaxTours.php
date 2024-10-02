<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "WildSafari";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn) {
    die("Ошибка подключения: " . mysqli_connect_error());
}

$sql = "SELECT * FROM catalog";
$result = mysqli_query($conn, $sql);

// Преобразование данных в массив PHP
$data = array();

if (mysqli_num_rows($result) > 0) {

    while ($row = mysqli_fetch_assoc($result)) {

        $data[] = $row;

    }
}

// Закрытие соединения с базой данных
mysqli_close($conn);

// Преобразование массива данных в формат JSON и вывод на экран
echo json_encode($data);

?>