🧑‍💻 Hackathon Internship Challenge — Onboarding System

A simple web-based onboarding form built for a hackathon challenge. It collects user details and demonstrates basic form handling, validation, and deployment.

🚀 Live Demo

👉 https://jackie-jeans.vercel.app/

📌 Project Overview

This project is a basic onboarding system that allows users to enter their details through a form. It includes:

Manual user data collection
Basic validation
Form submission handling
Redirect after submission
Deployed on Vercel
✨ Features
📝 Simple onboarding form
📱 Collects user details:
Name
Email
Phone number
💾 Basic JavaScript form handling
🔁 Redirect after submission
🌐 Deployed web app
🛠️ Tech Stack
HTML5
CSS3
JavaScript (Vanilla JS)
Vercel (Deployment)
📁 Project Structure
project/
│── index.html      # Main form page
│── style.css       # Styling
│── script.js       # Form logic
│── README.md
⚙️ How It Works
User opens the form
Enters personal details (name, email, phone)
Submits the form
JavaScript captures input data
Displays confirmation
Redirects to deployed site
💡 Key Code Logic

Form handling:

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    console.log(name, email, phone);

    alert("Form submitted successfully!");

    window.location.href = "https://jackie-jeans.vercel.app/";
});
📦 Deployment

This project is deployed using Vercel:

Steps:

Push code to GitHub
Import repository into Vercel
Deploy automatically
📈 Future Improvements
Add database storage (Firebase / MongoDB)
Add form validation rules
Improve UI/UX design
Add multi-step onboarding
Add AI-based personalization (upgraded version)
👨‍💻 Author

Built as part of a hackathon internship challenge to demonstrate basic frontend development and form handling.
