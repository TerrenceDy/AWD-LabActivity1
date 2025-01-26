function submitForm() {
    const userName = document.getElementById("userName").value;
    const age = document.getElementById("age").value;

    if (!userName || !age) {
        alert("Please fill in all fields.");
        return;
    }

    localStorage.setItem("userName", userName);
    localStorage.setItem("age", age);

    displayOutput();
}

function displayOutput() {
    const userName = localStorage.getItem("userName");
    const age = parseInt(localStorage.getItem("age"), 10);
    const outputDiv = document.getElementById("output");

    if (!userName || isNaN(age)) {
        outputDiv.innerHTML = "<p>Error: Missing or invalid data.</p>";
        return;
    }

    const status = age < 18 ? "MINOR.. you kiddo" : "ADULT.. you old";
    let message = `<p>Hello, ${userName}! You are ${age} years old. You are a ${status}.</p>`;

    message += "<p>Let's count from 1 to your age:</p><ul>";
    for (let i = 1; i <= age; i++) {
        message += `<li>${i}</li>`;
    }
    message += "</ul>";

    outputDiv.innerHTML = message;
}