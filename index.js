function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function() {
  this.online = true;
  console.log(this.email, "has logged in");
};
User.prototype.logout = function() {
  this.online = false;
  console.log(this.email, "has logged out");
};

var userOne = new User("lahiru@frontdaddy.com", "Lahiru");
var userTwo = new User("madu@frontdaddy.com", "Madu");

console.log(userOne);
userTwo.login();
