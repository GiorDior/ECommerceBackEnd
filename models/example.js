class Person {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    intro(){
        console.log(this.name + "is " + this.age + " years old")
    }
}


const me = new Person("Alex", 26)
const you = new Person("Giordan", 27)
console.log(me.intro())
console.log(you.intro())



// API ROUTES are intended to work with our database -> READ/UPDATE/DELETE/CREATE
// pattern of "/api/model(s)"
// HTML ROUTES are intended to show the user something -> HTML File or Handlebars
// pattern of "/*" as long as it's not "/api"

// What can we do to a table?

// Create - insert a new row -> Req.body based on the model
// -- POST ROUTE "/api/categories"

// Update - update a row in the table -> Need PK to find the row
// -- PUT ROUTE "/api/categories/:id" -> req.params.id
// -- PUT ROUTE "/api/categories/:category_id" -> req.params.category_id
// -- A Req.body with the new data that I'm going to have

// Delete - delete a row from the table -> Need the PK to find the row
// DElete ROUTE "/api/categories/:id" -> WHich one to destroy

// Read - Get Request -> Read the whole the table
// --GET ROUTE "/api/categories" -> req.body not needed

// Read - Get Request -> Read a row from the table -> Need the PK to find the row
// --GET ROUTE "/api/categories/:id"