function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function() {
    console.log(this.email, "has logged in");
  };
}

var userOne = new User("lahiru@frontdaddy.com", "Lahiru");
var userTwo = new User("madu@frontdaddy.com", "Madu");

console.log(userOne);
userTwo.login();
