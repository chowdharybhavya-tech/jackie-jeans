// ===============================
// MANUAL ONBOARDING
// ===============================

const form = document.getElementById("onboardingForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // ---------------------------
        // COLLECT DATA
        // ---------------------------
        const waist = Number(document.getElementById("waist").value);

        const userData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            waist: waist,
            fit: document.getElementById("fit").value,
            brands: document.getElementById("brands").value,
            brandSize: document.getElementById("brandSize").value,
            height: document.getElementById("height").value,
            weight: document.getElementById("weight").value
        };

        // ---------------------------
        // SMART FIT RECOMMENDATION
        // ---------------------------
        let recommendation = "";

        if (waist < 30) {
            recommendation = "Slim Fit Jeans 👖";
        } else if (waist <= 34) {
            recommendation = "Regular Fit Jeans 👖";
        } else {
            recommendation = "Relaxed Fit Jeans 👖";
        }

        userData.recommendation = recommendation;

        // ---------------------------
        // SAVE DATA (IMPORTANT FIX)
        // ---------------------------
        localStorage.setItem("fitProfile", JSON.stringify(userData));

        // ---------------------------
        // USER FEEDBACK
        // ---------------------------
        alert("Profile saved! Your fit is: " + recommendation);

        // ---------------------------
        // REDIRECT
        // ---------------------------
        setTimeout(() => {
            window.location.href = "https://jackie-jeans.vercel.app/";
        }, 1500);
    });
}


// ===============================
// VOICE ONBOARDING (VAPI AI)
// ===============================

const status = document.getElementById("status");

if (status) {

    status.innerHTML = "Loading AI Assistant...";

    const assistant = "bbfb745b-724d-4dba-ab69-4b3ba9fae9c0";
    const apiKey = "ecbd7cb8-f79b-4cef-8086-58f7fc260b65";

    (function (d, t) {

        const script = d.createElement(t);
        const firstScript = d.getElementsByTagName(t)[0];

        script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
        script.defer = true;
        script.async = true;

        firstScript.parentNode.insertBefore(script, firstScript);

        script.onload = function () {

            status.innerHTML = "AI Ready! Start speaking...";

            window.vapiSDK.run({
                apiKey: apiKey,
                assistant: assistant,
                config: {
                    position: "bottom-right"
                }
            });
        };

    })(document, "script");
}
