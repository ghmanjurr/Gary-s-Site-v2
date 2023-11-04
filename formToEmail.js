function emailSend(){
    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var userPhone = document.getElementById('phone').value;
    var userlocation = document.getElementById('location').value;
    var userhowBig = document.getElementById('howBig').value;
    var userRepair = document.getElementById('repair').value;
    var userColor = document.getElementById('color').value;
    var userWhen = document.getElementById('when').value;
    var userMessage = document.getElementById('message').value;

    var messageBody = "Name " + userName +
    "<br>" + "Email " + userEmail +
    "<br>" + "Phone " + userPhone +
    "<br>" + "Location " + userlocation +
    "<br>" + "How Big " + userhowBig +
    "<br>" + "Repair " + userRepair +
    "<br>" + "Color " + userColor +
    "<br>" + "When " + userWhen +
    "<br>" + "Message " + userMessage;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "manjurr.ghalib@gmail.com",
        Password : "4F4B80C8A92E1B427E174439BD14A3777B58",
        To : 'manjurr.home@gmail.com',
        From : "manjurr.ghalib@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}