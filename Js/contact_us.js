function sendEmail() {
    var name = $('#fullName').val();
    var email = $('#emailId').val();
    var message = $('#userText').val();

    var body = 'Name: ' + name + '<br>Email: ' + email + '<br>Message: ' + message;
}
Email.send({
    // SecureToken: "6525fcc5-7a42-4f05-ae09-70bcaa9a3946",
    Host: "smtp.elasticemail.com",
    Username: "avviare.rishi@gmail.com",
    Password: "C23F008103F730AF9D554BFDD4D1A365EED6",
    To: 'rishi.edunext@gmail.com',
    From: "avviare.rishi@gmail.com",
    Subject: "This is the subject",
    Body: body
}).then(
    message => alert(message)
);