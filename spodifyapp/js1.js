
// Simple email regex for demonstration (not perfect)
// function isValidEmail(email) {
//   return /\S+@\S+\.\S+/.test(email);
// }

// document.getElementById('login-btn').addEventListener('click', function() {
//   const email = document.getElementById('login-email').value.trim();
//   const password = document.getElementById('login-password').value.trim();
//   if (!email || !password) {
//     alert("Please fill in both email and password.");
//     return;
//   }
//   if (!isValidEmail(email)) {
//     alert("Please enter a valid email address.");
//     return;
//   }
//   // (For demo: we store the email's prefix as the username.)
//   const username = email.split('@')[0];
//   // Save credentials to localStorage (in a real app, use secure authentication)
//   localStorage.setItem('username', username);
//   localStorage.setItem('userEmail', email);
//   localStorage.setItem('userPassword', password);
//   // Redirect to home page
//   window.location.href = "demo66.html";
// });

// function isValidEmail(email) {
//     return /\S+@\S+\.\S+/.test(email);
//   }
  
//   document.getElementById('login-btn').addEventListener('click', function() {
//     const email = document.getElementById('login-email').value.trim();
//     const password = document.getElementById('login-password').value.trim();
//     const errorMessage = document.getElementById('error-message');
    
//     errorMessage.textContent = ""; // Clear previous errors
  
//     if (!email || !password) {
//       errorMessage.textContent = "Please fill in both email and password.";
      
//     }

//     else  if (!email) {
//       errorMessage.textContent = "Please fill in your email.";
     
//     }

//     else if (!password) {
//       errorMessage.textContent = "Please fill in your password.";
      
//     }
    
//     else (!isValidEmail(email)) {
//       errorMessage.textContent = "Please enter a valid email address.";
//     }

  
//     const username = email.split('@')[0];
  
//     localStorage.setItem('username', username);
//     localStorage.setItem('userEmail', email);
//     localStorage.setItem('userPassword', password);
  
//     window.location.href = "demo66.html";


//     function getRandomColor() {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//           color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//       }
      
//       function createAvatar(username, element) {
//         if (!username || !element) return;
//         const firstLetter = username.trim()[0].toUpperCase();
//         element.textContent = firstLetter;
//         element.style.backgroundColor = getRandomColor();
//         element.style.color = "#fff";
//         element.style.display = "flex";
//         element.style.alignItems = "center";
//         element.style.justifyContent = "center";
//         element.style.width = "100%";
//         element.style.height = "100%";
//         element.style.borderRadius = "50%";
//         element.style.fontSize = "1.5rem";
//         element.style.fontWeight = "bold";
//       }  
    
//       document.addEventListener("DOMContentLoaded", function() {
//         const storedUsername = localStorage.getItem("username");
//         if (!storedUsername) {
          
//           window.location.href = "login.html";
//         } else {
          
//           const profileNameEl = document.getElementById("profile-name");
//           createAvatar(storedUsername, profileNameEl);
//         }
//       });
      
//   });

//   function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
  
//   function createAvatar(username, element) {
//     if (!username || !element) return;
//     const firstLetter = username.trim()[0].toUpperCase();
//     element.textContent = firstLetter;
//     element.style.backgroundColor = getRandomColor();
//     element.style.color = "#fff";
//     element.style.display = "flex";
//     element.style.alignItems = "center";
//     element.style.justifyContent = "center";
//     element.style.width = "100%";
//     element.style.height = "100%";
//     element.style.borderRadius = "50%";
//     element.style.fontSize = "1.5rem";
//     element.style.fontWeight = "bold";
//   }  

//   document.addEventListener("DOMContentLoaded", function() {
//     const storedUsername = localStorage.getItem("username");
//     if (!storedUsername) {
      
//       window.location.href = "login.html";
//     } else {
      
//       const profileNameEl = document.getElementById("profile-name");
//       createAvatar(storedUsername, profileNameEl);
//     }
//   });
  



// Email validation function

// function isValidEmail(email) {
//     return /\S+@\S+\.\S+/.test(email);
// }



// // Login event listener
// document.addEventListener("DOMContentLoaded", function () {
//     const loginBtn = document.getElementById("login-btn");

//     if (loginBtn) {
//         loginBtn.addEventListener("click", function () {
//             const email = document.getElementById("login-email").value.trim();
//             const password = document.getElementById("login-password").value.trim();
//             const errorMessage = document.getElementById("error-message");

//             errorMessage.textContent = ""; // Clear previous errors

//             if (!email && !password) {
//                 errorMessage.textContent = "Please fill in both email and password.";
//                 return;
//             }

//             if(!email){
//                 errorMessage.textContent = "Please fill in your email."
//                 return;
//             }

//             if (!password){
//                 errorMessage.textContent = "Please fill in password."
//                 return;
//             }

//             if (!isValidEmail(email)) {
//                 errorMessage.textContent = "Please enter a valid email address.";
//                 return;
//             }



            // Extract username from email (before '@')
            // const username = email.split("@")[0];

            // Store credentials in localStorage (not secure for real applications)
            // localStorage.setItem("username", username);
            // localStorage.setItem("userEmail", email);
            // localStorage.setItem("userPassword", password);

            // Redirect to homepage
            // window.location.href = "home.html"; 
            // Make sure the filename matches your actual homepage


    //     });
    // }




    // Function to generate a random color for the avatar
    // function getRandomColor() {
    //     const letters = "0123456789ABCDEF";
    //     let color = "#";
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    // Function to create the profile avatar
    // function createAvatar(username, element) {
    //     if (!username || !element) return;

    //     const firstLetter = username.trim()[0].toUpperCase();
    //     element.textContent = firstLetter;
    //     element.style.backgroundColor = getRandomColor();
    //     element.style.color = "#fff";
    //     element.style.display = "flex";
    //     element.style.alignItems = "center";
    //     element.style.justifyContent = "center";
    //     element.style.width = "40px"; // Adjust avatar size
    //     element.style.height = "40px";
    //     element.style.borderRadius = "50%";
    //     element.style.fontSize = "1.5rem";
    //     element.style.fontWeight = "bold";
    // }

    // Check if the user is logged in
    // const storedUsername = localStorage.getItem("username");

    // if (storedUsername) {
    //     const profileNameEl = document.querySelector(".profile-name h3");
    //     const profileAvatarEl = document.querySelector(".profile-name");

    //     if (profileNameEl) {
    //         profileNameEl.textContent = storedUsername;
    //     }

    //     if (profileAvatarEl) {
    //         createAvatar(storedUsername, profileAvatarEl);
    //     }
    // } else {
    //     // If not logged in, redirect to the login page
    //     window.location.href = "html1.html";
    // }
// });


function saveUsername(){
    let username2 = document.querySelector("#login-email").value;
    localStorage.setItem("Username2",username2);
    window.location.href = "home.html";
}