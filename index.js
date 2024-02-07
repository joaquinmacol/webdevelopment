function validateForm() {
  // Get form elements
  var fullname = document.getElementById("fullname").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var emailaddress = document.getElementById("emailaddress").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var contactnumber = document.getElementById("contactnumber").value;
  var driverLicenseNumber = document.getElementById("driverlicensenumber").value;
  var registrationDate = document.getElementById("registrationdate").value;
  var motorcyclenumber = document.getElementById("motorcyclenumber").value;
  var color = document.getElementById("color").value;
  var fueltype = document.getElementById("fueltype").value;
  var status = document.getElementById("status").checked;

  if (fullname === "") {
    alert("Please enter your full name");
    return false;
  }

  if (isNaN(age) || age < 18) {
    alert("Please enter a valid age (must be at least 18)");
    return false;
  }

  if (address === "") {
    alert("Please enter your address");
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(emailaddress)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (!gender) {
    alert("Please select your gender");
    return false;
  }

  if (!/^\d{11}$/.test(contactnumber)) {
    alert("Please enter a valid 11-digit contact number");
    return false;
  }

  if (!driverLicenseNumber || isNaN(driverLicenseNumber)) {
    alert("Please enter a valid driver's license number");
    return false;
  }

  if (registrationDate === "") {
    alert("Please enter the correct Date");
    return false;
  }

  if (isNaN(motorcyclenumber)) {
    alert("Please enter a valid motorcycle identification number");
    return false;
  }

  if (color === "") {
    alert("Please enter the color of the motorcycle");
    return false;
  }

  if (fueltype === "") {
    alert("Please select the fuel type");
    return false;
  }

  if (!status) {
    alert("Please confirm the motorcycle inspection status");
    return false;
  }

  return true;
}

function submitForm() {
  if (validateForm()) {
    document.getElementById("Form").submit();
  }
}