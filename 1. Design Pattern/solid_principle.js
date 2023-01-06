///////////////////////////////////
// Single responsibility principle
///////////////////////////////////

// Employee Class has
//      Calculate Salary: Chief Financial Officer 1 Actor
//      Calculate Hours worked: HR 1 Actor
//      Save Employee Data: Technical Manager 1 Actor
// Salary bases on hour if one change will impact other, this violates single responsibility principle
// If your class being called by multiple actors that mean you break ssp
// We can break the Employee class like
// EmployeeSalary: CFO
// EmployeeHours: HR
// EmployeeData: Technical
// We can use facade design pattern to do business logic to calculate something

// Ex Bill Class have finialAmount and saveBill and printBill
// If tomorrow we change saveBill implementation then we might end up changing Bill Class, so we can
// take our saveBill to datastore class which will solve the problem
// Similar printBill can be moved to its own class PrintBill class


//////////////////////////////////////////////
// Open for Extension, Closed for Modification
//////////////////////////////////////////////

// In doing so, we stop ourselves from modifying existing code and causing potential new bugs
// Of course, the one exception to the rule is when fixing bugs in existing code.

// To make a class open for extension: create a new class and use extend with old class
// Example Giutar Class is there and now we need to extend the functionality then we can create SuperCoolGuitarWithFlames extends Guitar 



////////////////////////////////
// Liskov Substitution Principle
////////////////////////////////

// Use inheritance properly
// If a function takes an instance then this function can take instance of derived classes as well


//////////////////////////////////
// Interface Segregation Principle
//////////////////////////////////

// Instead of designing 2 fat interface, design multiple small interfaces
// fat interface means which includes lots of functionality and hide lots of functionality



//////////////////////////////////
// Dependency Inversion Principle
//////////////////////////////////

// Client should depend on interface and should not know about the actual implementation
// Class A -----> Depends on Class B -----> Depends on Class C
// Any change in Class C will affect Class B & any change in Class B will affect Class A
// Solution: Class A ------> Interface B <---- Class B Implement
//                               ^
//                               |
//                           Interface C <---- Class C Implement
// Now any change in any class won't break anything
