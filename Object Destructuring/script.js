const cartonData = {
  id: 1,
  title: "Tom and Jerry",
  createdIn: "1940",
  createdBy: "William Hanna and Joseph Barbera",
  isAired: true,
  famousCharacters: [
    "Tom - Cat",
    "Jerry - Mouse",
    "Spike",
    "Tyke",
    "Toodles Galore",
    "Quacker",
    "Jeannie",
    "Mammy Two Shoes",
  ],
  books: {
    English: {
      book1: "There's a Mouse Hiding in This Book",
      book2: "This Book is not a piece of cheese!",
    },
    Hindi: "Available in Hindi",
    French: "",
  },
};

// const {createdIn, createdBy, title, famousCharacters, isAired} = cartonData;
// console.log("Carton was created in " + createdIn + " by " + createdBy + " and is called " + title);
// console.log("Famous characters are: " + famousCharacters);
// console.log("Is the show aired? " + isAired);
//
//
// const user = {
//   name: "Joseph Barber",
//   email: "josephbarber@gmail.com",
//   password: "password",
//   age: 25
// }
//
//
// const {name, email} = user;
// console.log("User name is: " + name + ", email is: " + email);
const {createdIn: year, createdBy: creator,  title: name, famousCharacters:characters} = cartonData;
// console.log("Crarton was created in " + year + " by " + creator + " and is called " + name);
console.log(characters);