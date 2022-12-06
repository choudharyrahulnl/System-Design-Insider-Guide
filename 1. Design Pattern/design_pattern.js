// Every pattern has a problem and a solution

// Pattern Name
// Pattern Problem
// Pattern Solution
// Pattern Consequences Pros/Cons

// Design Pattern are language independent
// Different language implement it differently

// Types:
// Creational: Class Creation / Object Creation
// Structural: Class: tell how to use inheritance / Object: organise and assemble diff objects
// Behaviour: Class: tell how to use inheritance inorder to implement algo & control & flow of class
//            Object How to write algo around objects to fulfill the task

// Creational:
//      Class: Factory Method
//      Object: Abstract Factory, Builder, Prototype, Singleton
// Structural:
//      Class: Adaptor Class
//      Object: Adaptor Object, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
// Behaviour:
//      Class: Interpreter, Template Method
//      Object: Chain of responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy

// 80% problem will be solved by 20% of pattern




/////////////////////////////////
// Factory Method Design Pattern
/////////////////////////////////

// It's creational design pattern
// Create objects of similar type
// Hide complexity of object creation
// Client code has no idea about object creation

// client code calls ------> f1() function ----> factory method interface ---->
// concrete class which implements creation of object

// Factory Class (Abstract Interface) has factoryMethod() method
// Concrete Class inherits Factory Class & implements factoryMethod() method

// Ex factory manufacture bottle lids of type metal, plastic
// client 1 want metal lids
// client 1 want plastic lids
// so depend on input manufacture will create lids

// Ex based on input: type - light, heavy and tyre number 4, 10 we can create objects
// createVehicle("light",4) -> Gives Car Object
// createVehicle("heavy",10) -> Gives Truck Object

// Architect create design & interfaces for the team
// Used in frameworks and library creation ex UI framework, create different type of buttons

// Ex Course Website has Online Courses which has modules
// Some modules are same in different course
//          www.udemy.com
//      |            |             |
//      |            |             |
//  M1 M2 M3     M1 M4 M5      M6 M7 M8

// Demo/Client -----> Course Factory -----> Course (HLD & LLD)
// Module: IntroModule, ConceptModule, DemoModule, ExerciseModule, SummaryModule

// Demo will call CourseFactory.getCourse("HLD") or CourseFactory.getCourse("LLD")
// CourseFactory is an Interface which has switch case based on input it return object
// Course is Abstract class createCourse() method
// HLD and LLD will implement createCourse() method

// Pros and Cons
// Guaranty abstraction
// Code is flexible and adoptable
// Useful for framework and library creation

// complex code
// take time to set the base
// Not a pattern that can be refactored into ( need to use from starting)

// Summary:
// Useful for creation of object that fall under same category but have different properties
// OR we can say based on property we give different object of same category
// Help in hiding complexity
// One has to start thinking ahead to implement such pattern

// Ex based on input: type - light, heavy and tyre number 4, 10 we can create objects
// In future we have tyre for water(water bus) and air (airplane) we can extend easily



/////////////////////////////////
// Builder Design Pattern
/////////////////////////////////

// It's creational design pattern
// Creation of complex objects ( classes has complex constructor )
// Helps with Immutable class
// Less need to expose setter of a class

// Ex Wardrobe/Almira has
// essential: 1 or more doors, material, number of compartments
// optional: mirror, hanging rod, wheels

// If we're going to create this class we will be going to have multiple constructors
// like door and compartment or door and wheels ...

// Now we need a constructor for mirror and door then we need to create new constructor, or
// we can use some already defined constructor and make rest field
// as null in already defined constructor and only use door and wheels

// Builder Pattern pros and cons
// Good way to handle complexity
// easy to implement
// can be refactored into

// class instance return is immutable
// uses inner static class
// sometime number of lines of code can be huge





/////////////////////////////////
// Abstract Factory Design Pattern
/////////////////////////////////


// It's creational design pattern
// Factory of factory pattern
// Create objects which belongs to a family of similar objects
// Implemented using common interface same like factory method design pattern

// Abstract Factory createObject() (Abstract Interface) -->
// Concrete Factory Interface  createObject() (Abstract Interface) -->
// Concrete Object Class createObject() real implementation

//                                 --    Factory 1  -- concrete 1 or concrete 2 or concrete 3
// Client ------> Abstract Factory --    Factory 2  -- concrete 1 or concrete 2 or concrete 3
//                                 --    Factory 3  -- concrete 1 or concrete 2 or concrete 3 

// Abstract Factory based on Param will call Factory 1 or 2 or 3
// Factory 1 based on Param will call Concrete 1 or 2 or 3

// Ex Factory manufacture furniture ( chair, sofa, table )
// client gives order to create chair then chair factory will be used
// client gives order to create sofa then sofa factory will be used

//  Pros and Cons
// Good for abstraction and family of similar objects
// Loose coupling between client and actual/concrete code
// All classes follow single responsibility principle
// Support open close principle

// code become complex with time
// pattern inside pattern difficult to understand








/////////////////////////////////
// Singleton Design Pattern
/////////////////////////////////

// It's creational design pattern
// When only 1 instance of class is needed and access that instance from whole application
// Ex DB Connection, Logger Instance
// Singleton class never accepts param, if it accepts param, then it becomes a factory, so avoid it.

// Eager Loading: Instance is already initialized as soon as the application start (singleton class initialized on app start
// but no one uses it, it's just lying until someone use it.

// Lazy Loading: Instance is initialized only when any app module calls for it. This saves lot of memory when we have multiple
// singleton class

// Pros and cons
// neat way to handle access to global resources
// easy to implement
// guarantee 1 instance
// solve well-defined problem

// Use it only if required, sometime overused
// Used with param and confused with factory
// hard to write test case
// thread safety has to be insured else can be dangerous




/////////////////////////////////
// Facade Design Pattern
/////////////////////////////////

// It's structural design pattern
// Self service restaurant: place order and pay, you need to collect the food and after finish put rest in trash & plate for wash
// Serviced restaurant: place order to waiter and after done pay


// Client -------> Facade Class doSomeOperation() ------> System 1 system1_method1 + System 2 system2_method1 +
// System 3 system3_method1 & system3_method2 where

// System 1: system1_method1 system1_method2 system1_method3
// System 2: system2_method1 system2_method2 system2_method3
// System 3: system3_method1 system3_method2 system3_method3

// Client -> Facade Class calls -> Lib 1 & Lib2 & Lib 3 for complex logic


// No specific pros and cons of facade design pattern
// It's a refactoring pattern
// makes code clean
// simplest structural design pattern
// good to think about api design



/////////////////////////////////
// Adapter Design Pattern
/////////////////////////////////

// It's structural design pattern
// Used in Java Streams Implementation
// If we have 2 Interface which are not compatible then we use adapter/wrapper in between


// Client ---> Adapter Class ----> Legacy Class

// Hospital gives bills ---> Hospital has claim department one from each insurance which takes bill and file claim ---->
// Insurance company get the claim, here hospital claim department works as adapter between hospital and insurance
// Hospital -----> Adapter -----> Insurance Company 1, Insurance Company 2, Insurance Company 3

// EX Arrays.asList(array) which convert arrays to list uses adapter pattern
// Ex DTO to Entity

