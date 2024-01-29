function sendMail(){

    if (document.getElementById("questionary").checkValidity()){

        let params = {
            firstname: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_n4r4jje", "template_eixrx98", params)
        .then(alert("Message Sent Succesfully!"));
    };

}