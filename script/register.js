document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log('Name:', name, 'Email:', email, 'Password:', password);
});



// accept(){
//   event.preventDefault(); // Prevent the form from submitting in the traditional way
            
//   // Create a file content
//   const fileContent = "Thank you for registering!\n\nName: " + document.getElementById('name').value +
//                       "\nEmail: " + document.getElementById('email').value;

//   // Create a Blob object
//   const blob = new Blob([fileContent], { type: 'text/plain' });

//   // Create a link element
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = 'registration_info.txt';

//   // Programmatically click the link to trigger the download
//   link.click();

//   // Optionally, reset the form after downloading
//   document.getElementById('registrationForm').reset();
// }