//ENCAPSULATION
var userOne = {
  email: "lahiru@frontdaddy.com",
  name: "lahiru",
  //login: function(){}

  //ES6
  login() {
    console.log(this.email, "has logged in"); // this refers to userOne object
  },
  logOut() {
    console.log(this.email, "has logged out");
  }
};

console.log(userOne.name);
