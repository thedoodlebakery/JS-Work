// Constructors notation

var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// OR

var spencer2 = new Object();
spencer2.age = 22;
spencer2.country = "United States";

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = new Object();
this.species = "beagle";


// use bracket notation for snoopy's age
var age = snoopy["age"];

// literal notation (preferable)
var spencer = {
  age: 22,
  country: "United States"
};

var james = {
    // add properties to this object!
    job: "programmer",
    married: false

}

/* Customizing Constructors */

    var harry_potter = new Object();
    harry_potter.pages = 350;
    harry_potter.author = "J.K. Rowling";

    // A custom constructor for book
    function Book (pages, author) {
        this.pages = pages;
        this.author = author;
    }

    // Use our new constructor to make the_hobbit in one line
    var the_hobbit = new Book(320, "J.R.R. Tolkien");

    // A custom constructor for a person
    function Person(job, married) {
    this.job = job;
    this.married = married;
}

    // create a "gabby" object using the Person constructor!
    var gabby = new Person("student", true);

// Associative Array

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};


/*

Literal notation creates a single object. Literal notation uses curly brackets { } and the object's default properties are defined within the brackets using property:value notation.
Constructor notation involves defining an object constructor. And like defining a function, we use the function keyword.
You can think of this constructor as a "template" from which you can create multiple objects. To create a new object from a constructor, we use the new keyword.

*/
