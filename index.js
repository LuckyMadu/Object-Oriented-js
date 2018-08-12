class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }

  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}

var userOne = new User("lahiru@frontdaddy.com", "Lahiru");
var userTwo = new User("madu@frontdaddy.com", "Madu");

userOne.login();
userTwo.logout();
