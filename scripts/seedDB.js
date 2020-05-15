  const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = {
    authors: ["J.K. Rowling"],
    description: "Young wizard-in-training Harry Potter prepares for a competition between Hogwarts School of Magic and two rival schools, develops a crush on Cho Chang, and wishes above all to be a normal fourteen-year-old.",
    image: "https://books.google.com/books/content?id=oPIMmQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70sW7js-ZtkLaYpw5H45NkmwUo1CW2D8PXFgveHZckGEAUoTMgC5veXpw5rl6Mnb4cQes2CNPfkrGa-H2H8yzKSh6s7Zwx2pg48pVrtK3zLzf8OYMIIRnEd17Iz2n6FCgG_qA9I",
    link: "https://books.google.com/books?id=oPIMmQEACAAJ&dq=Harry+Potter&hl=&source=gbs_api",
    title: "Harry Potter and the Goblet of Fire",
}

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });