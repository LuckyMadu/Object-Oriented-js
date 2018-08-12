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

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => {
      //ACCESS FOR INDIVIDUAL ITEMS
      return u.email != user.email;
    });
  }
}

var userOne = new User("lahiru@frontdaddy.com", "Lahiru");
var userTwo = new User("madu@frontdaddy.com", "Madu");
var admin = new Admin("shaan@frontdaddy.com", "shaan");

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users);
