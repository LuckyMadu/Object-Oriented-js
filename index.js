class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now ", this.score);
    return this;
  }
}

var userOne = new User("lahiru@frontdaddy.com", "Lahiru");
var userTwo = new User("madu@frontdaddy.com", "Madu");

userOne
  .login()
  .updateScore()
  .updateScore()
  .logout();
