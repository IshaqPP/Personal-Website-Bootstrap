document.addEventListener('DOMContentLoaded', function() {
    var user = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    var form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        user.name = document.getElementById('name').value;
        user.email = document.getElementById('email').value;
        user.subject = document.getElementById('subject').value;
        user.message = document.getElementById('message').value;

        console.log("user ",user);
        var messageContainer = document.querySelector('.success-message');
        messageContainer.querySelector('.sent-message').style.display = 'block';

        setTimeout(function() {
            messageContainer.querySelector('.sent-message').style.display = 'none';
        }, 5000);

        form.reset();
    });
});
