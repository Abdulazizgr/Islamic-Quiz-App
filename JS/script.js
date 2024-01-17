document.getElementById('signup-form').addEventListener('submit', saveFormData);

function saveFormData(event) {
  event.preventDefault(); // Prevent form submission

  // Get form field values
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var country = document.getElementById('country').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var cpassword = document.getElementById('cpassword').value;

  // Create a JSON object with the form data
  var formData = {
    fname: fname,
    lname: lname,
    country: country,
    email: email,
    phone: phone,
    password: password,
    cpassword: cpassword
  };

  // Convert the JSON object to a string
  var jsonData = JSON.stringify(formData);

  // Save the JSON data to local storage or send it to the server
  // Example: Saving to local storage
  localStorage.setItem('formData', jsonData);

  console.log('Form data saved:', formData);
}

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more user objects as needed
  ];
  
  document.querySelector('form').addEventListener('submit', authenticateUser);
  
  function authenticateUser(event) {
    event.preventDefault(); // Prevent form submission
  
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    // Check if the username and password match
    const authenticatedUser = users.find(
      (user) => user.username === username && user.password === password
    );
  
    if (authenticatedUser) {
      // Authentication successful
      console.log('Authentication successful');
      // Redirect the user to the desired page or perform any other actions
    } else {
      // Authentication failed
      console.log('Authentication failed');
      // Display an error message or perform any other actions
    }
  
    // Clear the input fields
    usernameInput.value = '';
    passwordInput.value = '';
  }