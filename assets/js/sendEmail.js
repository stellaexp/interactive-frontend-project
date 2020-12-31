function ClearFields() {
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("email").value = "";
    document.getElementById("option").value = "";
    document.getElementById("group").value = "";
    document.getElementById("datepicker").value = "";
    document.getElementById("total").value = "";
    document.getElementById("notes").value = "";
}

function sendMail(contactForm) {
    emailjs.sendForm('service_olp5z8i', 'template_4v6wcfc', '#form', 'user_NjZWh4qnG3A9vjWb6Aa5u', {
        'first': contactForm.first.Value,
        'last': contactForm.last.Value,
        'email': contactForm.email.Value,
        'option': contactForm.option.Value,
        'group': contactForm.group.Value,
        'datepicker': contactForm.datepicker.Value,
        'total': contactForm.notes.Value,
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