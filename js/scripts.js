function Contact(first, last, phoneNumber) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phoneNumber;
  this.address = [];
}
function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Contact.prototype.nameAndPhone = function() {
  return this.firstName + " " + this.lastName + " " + this.phoneNumber;
}
Contact.prototype.namePhoneAddress = function() {
  return this.firstName + " " + this.lastName + " " + this.phoneNumber + " " + this.address;
}
Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#phoneNumber").val();
    var inputtedAddress = $("input#address").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedAddress);

  $(".new-address").each(function() {
    var inputtedStreet = $(this).find("input.new-street").val();
    var inputtedCity = $(this).find("input.new-city").val();
    var inputtedState = $(this).find("input.new-state").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    newContact.address.push(newAddress);
});

    $("ul#contacts").append("<li><span class='contact'>" + newContact.nameAndPhone() + "</span></li>");


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#phoneNumber").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".number").text(newContact.phoneNumber);
    $("ul#addresses").text("");
    newContact.address.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
});

  });
  })

})
