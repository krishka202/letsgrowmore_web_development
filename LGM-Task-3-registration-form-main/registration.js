document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phoneno = document.getElementById('phoneno').value;
  var country = document.getElementById('country').value;
  var gender = document.getElementById('gender').value;
 var skill = document.getElementById('skill').value;

  var displayData = document.getElementById('display-data');
  displayData.innerHTML = `
    <h2>Registered Data:</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone no:</strong> ${phoneno}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Gender:</strong> ${gender}</p>
           <p><strong>Skill:</strong> ${skill}</p>
  `;
});
