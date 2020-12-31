function sendMail(contactForm) {
    emailjs.sendForm('service_olp5z8i', 'template_4v6wcfc', '#form')
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}  