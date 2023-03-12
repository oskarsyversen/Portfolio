var contactElement = document.getElementById("idContact");
var aboutElement = document.getElementById("idAbout");


function scrollContact(){
    contactElement.scrollIntoView({behavior: "smooth"});
}

function scrollAbout(){
    aboutElement.scrollIntoView({behavior: "smooth"});
}


function Search() {
    if (document.getElementById("idFullName").value > 0) {
        SendMail();
    }

}

function SendMail() {
    var params = {
        from_name : document.getElementById("idFullName").value,
        email_id : document.getElementById("idEmail").value,
        message : document.getElementById("idMessage").value
    }
    emailjs.send("service_58nhdns", "template_mc94oq8", params);
}

var fields = document.getElementById("idContactForm");
var thanks = document.getElementById("idThanks");

function eraseFields(){
    var getValueName = document.getElementById("idFullName");
      if (getValueName.value !="") {
          getValueName.value = "";
      }
      var getValueEmail = document.getElementById("idEmail");
      if (getValueEmail.value !="") {
          getValueEmail.value = "";
      }
      var getValueMessage = document.getElementById("idMessage");
      if (getValueMessage.value !="") {
          getValueMessage.value = "";
      }
      fields.style.display = "none";
      thanks.style.display = "flex";
}

//Get form element
var form = document.getElementById("idContactForm");
function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
   SendMail();
   eraseFields();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);