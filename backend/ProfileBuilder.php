<?php
// backend/ProfileBuilder.php

// CORS and content type headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Database credentials
$servername = "localhost";
$username = "root"; // Default XAMPP MySQL username
$password = "";     // Default XAMPP MySQL password (usually empty)
$dbname = "react_sandbox"; // Replace with your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

class Profile
{
    private $theme;
    private $font;
    private $features;

    public function setTheme($theme)
    {
        $this->theme = $theme;
        return $this;
    }

    public function setFont($font)
    {
        $this->font = $font;
        return $this;
    }

    public function setFeatures($features)
    {
        $this->features = $features;
        return $this;
    }

    public function build()
    {
        return [
            'theme' => $this->theme,
            'font' => $this->font,
            'features' => $this->features
        ];
    }
}

// Handling POST request to create a profile
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
        exit;
    }

    $profile = (new Profile())
        ->setTheme($data['theme'] ?? '')
        ->setFont($data['font'] ?? '')
        ->setFeatures($data['features'] ?? [])
        ->build();

    // Insert profile data into the database
    $stmt = $conn->prepare("INSERT INTO profiles (theme, font, features) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $profile['theme'], $profile['font'], json_encode($profile['features']));

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Profile created and inserted into database']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to insert profile into database']);
    }

    $stmt->close();
}

$conn->close();
?>
