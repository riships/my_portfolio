// Get references to the form elements
var form = document.getElementById("contact-form");
var nameInput = document.getElementById("fullName");
var emailInput = document.getElementById("emailId");
var messageInput = document.getElementById("userText");

// Listen for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the name, email, and message values
    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;

    // Perform validation
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    if (!email) {
        alert("Please enter your email address.");
        return;
    }

    if (!message) {
        alert("Please enter a message.");
        return;
    }

    // If validation passes, send the data as an email
    email.send({
        Host: "smtp.gmail.com",
        Username: "rishi1.edunext@gmail.com",
        Password: "E26EAAE9C3BFCF727285484DE0FC2E2F0125",
        // SecureToken: "d6d2076a-3f2f-45e2-9045-a8b0032fe012",
        To: 'rishi.edunext@gmail.com',
        From: email,
        Subject: "New Contact Form Submission",
        Body: message
    }).then(
        message => alert("Your message has been sent!")
    );
});