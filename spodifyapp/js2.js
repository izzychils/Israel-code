
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

document.getElementById('signup-btn').addEventListener('click', function() {
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const username = email.split('@')[0];
  localStorage.setItem('username', username);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);
  
  window.location.href = "demo66.html";
});
