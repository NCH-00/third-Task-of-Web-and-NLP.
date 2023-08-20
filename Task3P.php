<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "task3web";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$tran = $_POST['transcript'];

$sql = "INSERT INTO transcripts (text) VALUES ('$tran')";
if ($conn->query($sql) === TRUE) {
echo "Transcript stored successfully.";
} else {
echo "Error storing transcript: " . $conn->error;
}

$conn->close();
?>