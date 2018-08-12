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

function Admin(...args) {
  //grap email and name as an array
  //console.log(args);
  this.role = "super admin";
  User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(u) {
  users = users.filter(user => {
    return user.email != u.email;
  });
};

var userOne = new User("lahiru@frontdaddy.com", "Lahiru");
var userTwo = new User("madu@frontdaddy.com", "Madu");
var admin = new Admin("shan@frontdaddy.com", "shan");

var users = [userOne, userTwo, admin];
console.log(admin);
