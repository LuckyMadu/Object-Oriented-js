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

var userTwo = {
  email: "madu@frontdaddy.com",
  name: "madu",
  //login: function(){}

  //ES6
  login() {
    console.log(this.email, "has logged in"); // this refers to userOne object
  },
  logOut() {
    console.log(this.email, "has logged out");
  }
};

var userThree = {
  email: "resa@frontdaddy.com",
  name: "resa",
  //login: function(){}

  //ES6
  login() {
    console.log(this.email, "has logged in"); // this refers to userOne object
  },
  logOut() {
    console.log(this.email, "has logged out");
  }
};

userOne.name = "madushan";
console.log(userOne.name); // dot notation
console.log(userOne["email"]); // square brackets
