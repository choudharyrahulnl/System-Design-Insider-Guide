// Basic of object-oriented design and principles
// Understand object-oriented process of analysis and design
// Implementation of solution requires to know design pattern
// Solid principle understanding

// Practice problems

// Building block of LLD
// Requirement gathering
// Laying down the use cases
// Uml/Class diagram
// OOD to model problem
// Implement code - design pattern + solid principle


/////////////////////
// Object and Classes
/////////////////////

// Object: anything physical entity we see which holds some information and has some behaviour
// Ex car holds info like wheels, color, engine & behaviour like drive, stop, accelerate

// Classes: In order to classify the objects we need class, object might have diff properties,
// so we called class as a blueprint of an object
// Ex car, 2 cars might have different color


//////////////////////////////////////////
// NVT - Noun and Verb Technique
//////////////////////////////////////////

// Nouns
// Ex Driving school web app - we will find nouns ( object (class)) in below requirement
// User goes to the website and select a slot for the classes he/she want to take : user, slot, classes
// Adds then to the cart: cart
// Check out and make payment:
// Get confirmation of the classes being booked: classes being booked

// Behaviours: Can be done using 1 class or object OR 2 or more class and object
// Ex Driving school web app - we will find nouns ( object (class)) in below requirement
// User goes to the website and select a slot for the classes he/she want to take : select the slot
// Adds then to the cart: add to cart
// Check out and make payment: make payment
// Get confirmation of the classes being booked: confirmation of class booked

// Classes
// User: name, age, type / getName(), setName()
// Slot: date, startTime, endTime
// DrivingClass: name, cost
// Cart: DrivingClass[] / addDrivingClass(DrivingClass), removeDrivingClass(DrivingClass), getCartAmount()
// CreditCard: number

//////////////////////
// Class Relationship
//////////////////////

// Has A: Composition (tight coupling) / Aggregation (loose coupling)
// Ex Customer has credit card, credit card does not exist without customer, so it's a tight coupling
// Ex Cart and Driving Lessons: without cart customer can go physically and book the classes, loose coupling

// Is A: Inheritance
// Ex Lesson Class: Parking Lesson and Driving Lesson is a  type of Lesson class

// Responsibility of Classes
// Cart 1-----N Lessons         addLesson(Lesson), getCartAmount()
// Lesson  getFees()
// Customer checkout()

// Abstraction: hiding implementation like switch on fan and fan works, how it works is hidden
// Abstraction ----> implementation is called Encapsulation (hiding as much as you can)


/////////////////////////////
// Inheritance & Polymorphism
/////////////////////////////

// Inheritance: parent child relation
// Polymorphism: is actually implementation of Inheritance
// Polymorphism in programing means child classes inherit from the same parent class can have
// multiple forms and attitudes
