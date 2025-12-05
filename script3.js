/*
const form=document.querySelector("registration");
console.log(form);
let nm=document.getElementById("name");
console.log(nm);
let em=document.getElementById("email");
console.log(em);
let ps=document.getElementById("password");
console.log(ps);
let ph=document.getElementById("phone");
console.log(ph);
let db=document.getElementById("dob");
console.log(db);
let ad=document.getElementById("address");
console.log(ad);
 let co=document.getElementById("country");
 console.log(co);

  // Step 1: Access form and input fields
  /*const form = document.getElementById("registrationForm");

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const phoneInput = document.getElementById("phoneInput");
  const dobInput = document.getElementById("dobInput");
  const addressInput = document.getElementById("addressInput");
  const countryInput = document.getElementById("countryInput");

  // Step 2: Listen for form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload
  
    // Step 3: Get gender (radio group)
    let gender = "";
    if (document.getElementById("maleInput").checked) {
      gender = "Male";
    } else if (document.getElementById("femaleInput").checked) {
      gender = "Female";
    }

    // Step 4: Create user object
    const user = {
      name: nm.value,
      email: em.value,
      password: ps.value,
      phone: ph.value,
      dob: db.value,
      address: ad.value,
      country: co.value,
      gender: gender,
    };

    // Step 5: Print object in console
    console.log("User Registered:", user);
  });*/


  // script3.js
  // script3.js

const form = document.getElementById("Registration");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");
const dobInput = document.getElementById("dob");
const addressInput = document.getElementById("address");
const countryInput = document.getElementById("country");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const phone = phoneInput.value.trim();
  const dob = dobInput.value;
  const address = addressInput.value.trim();
  const country = countryInput.value;

  const gender = document.querySelector('input[name="gender"]:checked');
  const genderValue = gender ? gender.value : "Not selected";

  if (name === "" || email === "" || password === "") {
    alert("Please fill out Name, Email, and Password fields.");
    return;
  }

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Phone:", phone);
  console.log("DOB:", dob);
  console.log("Address:", address);
  console.log("Country:", country);
  console.log("Gender:", genderValue);
  alert("Form submitted successfully!");
});