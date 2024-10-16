let user = {
  f_name: "Kamlesh",
  l_name: "Singh",
};

let user2 = {
  f_name: "Ankit",
  l_name: "Singh",
};

let full_name = function (city,state) {
  console.log(this.f_name + " " + this.l_name);
  console.log(`City ${city}, State ${state}`);
};

// Function borrowing
// full_name.call(user);
// full_name.call(user2);

// full_name.call(user,"Haldwani","Uttarakhand")

// full_name.apply(user,["Haldwani","Uttarakhand"]);

let name=full_name.bind(user,"Haldwani","Uttarakhand")
name();