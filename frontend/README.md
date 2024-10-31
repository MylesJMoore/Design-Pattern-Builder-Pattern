# Profile Builder Application
This project is a Profile Builder application created to demonstrate the Builder Design Pattern. The Builder Pattern is used to construct complex objects step-by-step, allowing for the creation of different representations based on user inputs. In this app, users can create custom profiles by selecting themes, fonts, and features.

## Project Background
The Builder Pattern separates the construction of an object from its representation, making it possible to build complex objects step-by-step. This pattern is ideal for building custom profiles where users can select various options to create a unique profile representation.

## Key Features
Customizable user profile creation.
Users can specify a theme, font, and multiple features.
Backend processes the user inputs and constructs a profile object based on the selected properties.
The profile object can be saved to a MySQL database (optional).
Integration with a Python script for additional data processing.

## Tech Stack
Frontend: React (JavaScript)
Backend: PHP
Database: MySQL (Optional, powered by XAMPP)
CSS: For styling the application
Testing: Jest and React Testing Library for frontend testing
Python: Optional script for data processing

## Project Structure
graphql
Copy code
project-root/
│
├── frontend/                  # React frontend application
│   ├── public/                # Public assets
│   ├── src/
│   │   ├── ProfileBuilder.js  # Profile builder form component
│   │   ├── ProfileBuilder.test.js # Tests for ProfileBuilder component
│   │   ├── ProfileBuilder.css # CSS styles for ProfileBuilder
│   └── ...
│
├── backend/
│   └── ProfileBuilder.php     # PHP file with Builder Pattern implementation
│
├── python_scripts/            # Python processing script
│   └── process_profile.py
│
└── README.md

## Setup Instructions
### Prerequisites
XAMPP: Install and configure XAMPP for serving the PHP backend.
Node.js: Required for the React frontend. Download from here.
Python: Required for running the Python processing script.

### Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/profile-builder
cd profile-builder

### Step 2: Setting Up Backend (PHP)
Move the contents of the backend folder to your XAMPP htdocs directory.

On Windows: C:\xampp\htdocs\profile-builder
On Mac: /Applications/XAMPP/htdocs/profile-builder
Start Apache and MySQL from the XAMPP control panel.

If you want to use the MySQL database, create a profiles table by running the following SQL command in phpMyAdmin:

sql
Copy code
CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    theme VARCHAR(50),
    font VARCHAR(50),
    features TEXT
);

### Step 3: Setting Up Frontend (React)
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
This will start the React app at http://localhost:3000.

### Step 4: Running the Python Script (Optional)
Navigate to the python_scripts folder:

bash
Copy code
cd python_scripts
Run the script:

bash
Copy code
python3 process_profile.py
This script processes profile data, providing additional insights (e.g., counting features). This step is optional and demonstrates how Python can be used alongside PHP.

## Usage
Create a Profile:

Open the React frontend at http://localhost:3000.
Fill out the form to select a theme, font, and features for your profile.
Click "Build Profile" to submit the form.
Backend Processing:

The form submission is sent to the PHP backend (ProfileBuilder.php) via a POST request.
The backend constructs a profile object using the Builder Pattern, and optionally saves it to the MySQL database.
Python Processing (Optional):

Run the process_profile.py script to process the profile data if you want additional data processing (e.g., counting the number of features).

## Testing
React Frontend Tests
Tests are located in frontend/src/ProfileBuilder.test.js. The tests check if the ProfileBuilder form renders correctly and if form submission works as expected.

To run tests, navigate to the frontend directory:

bash
Copy code
cd frontend
Run the tests using:

bash
Copy code
npm test
PHP Backend Tests (Manual Testing)
To manually test the PHP backend:

Use a tool like Postman or Curl to send a POST request to ProfileBuilder.php:

URL: http://localhost/profile-builder/backend/ProfileBuilder.php
Method: POST
Body (JSON):
json
Copy code
{
  "theme": "Dark",
  "font": "Arial",
  "features": ["Feature1", "Feature2"]
}
Verify that the response includes the constructed profile data.

## Example Profile JSON Response
Here is an example response from the backend after successfully creating a profile:

json
Copy code
{
    "status": "success",
    "profile": {
        "theme": "Dark",
        "font": "Arial",
        "features": ["Feature1", "Feature2"]
    }
}

## Additional Notes
### Builder Pattern Explanation
In this app, the Builder Pattern is used to create customizable profile objects. Each profile object has properties (theme, font, features) that are set incrementally. The pattern separates the profile construction process from the final representation.

### Optional Database
Saving profiles to a MySQL database is optional, depending on whether persistence is needed.

### License
This project is open-source and available under the MIT License.
