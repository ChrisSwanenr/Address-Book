function Contact(first, last, phoneNumber) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phoneNumber;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Contact.prototype.nameAndPhone = function() {
  return this.firstName + " " + this.lastName + " " + this.phoneNumber;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#phoneNumber").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#phoneNumber").val("");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".number").text(newContact.phoneNumber);
  });
  })

})
