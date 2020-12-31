function sendMail(contactForm) {
    emailjs.sendForm('service_olp5z8i', 'template_4v6wcfc', '#form', {
        'first': contactForm.first.Value,
        'last': contactForm.last.Value,
        'email': contactForm.email.Value,
        'option': contactForm.option.Value,
        'group': contactForm.group.Value,
        'datepicker': contactForm.datepicker.Value,
        'notes': contactForm.notes.Value
    })
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