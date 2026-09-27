# TypeScript OOP -- Interview Questions and Answers

## How to Use This Document

The questions are grouped by concept and move from beginner to
interview-level understanding.

For interviews, answer in this order:

1.  Give the definition.
2.  Explain the purpose.
3.  Give a small example if asked.
4.  Relate it to automation when relevant.
5.  Mention important limitations or differences.

------------------------------------------------------------------------

# Section 1 -- Classes and Objects

## 1. What is a class in TypeScript?

### Theory

A class is a blueprint used to create objects. It can contain
properties, methods, constructors, and access modifiers.

### Interview Answer

A class defines the structure and behavior that objects created from it
can have.

### Automation Example

A `LoginPage` class can contain login locators and methods such as
`enterUsername()` and `clickLoginButton()`.

------------------------------------------------------------------------

## 2. What is an object?

### Theory

An object is an instance of a class.

### Interview Answer

An object represents a concrete instance of a class and is generally
created using the `new` keyword.

------------------------------------------------------------------------

## 3. What is the difference between a class and an object?

### Answer

A class is a blueprint, whereas an object is an actual instance created
from that blueprint.

``` text
Class  → Blueprint
Object → Instance
```

------------------------------------------------------------------------

## 4. What is the purpose of the `new` keyword?

### Answer

The `new` keyword creates an object instance from a class and invokes
its constructor if one is defined.

------------------------------------------------------------------------

## 5. What is the `this` keyword?

### Theory

`this` refers to the current object.

### Answer

It is commonly used to access properties and methods belonging to the
current object, especially when a method parameter has the same name as
a class property.

------------------------------------------------------------------------

# Section 2 -- Function and Method

## 6. What is a function?

A function is a standalone reusable block of code that performs a task.

------------------------------------------------------------------------

## 7. What is a method?

A method is a function defined as part of a class or object.

------------------------------------------------------------------------

## 8. What is the difference between a function and a method?

  Function                      Method
  ----------------------------- ------------------------------------
  Standalone                    Belongs to a class/object
  Can be called independently   Usually accessed through an object
  General reusable logic        Object-specific behavior

------------------------------------------------------------------------

# Section 3 -- Inheritance

## 9. What is inheritance?

### Theory

Inheritance allows a child class to reuse members of a parent class.

### Interview Answer

In TypeScript, inheritance between classes is achieved using `extends`.
It promotes reuse of common functionality and allows child classes to
specialize parent behavior.

------------------------------------------------------------------------

## 10. What is the difference between a parent class and a child class?

### Answer

A parent class contains common functionality that can be reused. A child
class inherits that functionality and can add or customize behavior.

------------------------------------------------------------------------

## 11. What is the use of `extends`?

### Answer

`extends` establishes inheritance between classes.

``` text
Parent
  ↓
Child
```

The child can access accessible members inherited from the parent.

------------------------------------------------------------------------

## 12. How do you achieve inheritance when classes are in different files?

### Answer

Export the parent class, import it in the child file, and use `extends`.

The three steps are:

1.  Export parent.
2.  Import parent.
3.  Extend parent.

------------------------------------------------------------------------

## 13. What is multilevel inheritance?

### Theory

Multilevel inheritance is an inheritance chain with more than one level.

``` text
LoginPage
    ↓
CreateLead
    ↓
DeleteLead
```

### Interview Answer

`DeleteLead` inherits from `CreateLead`, and `CreateLead` inherits from
`LoginPage`, so the inheritance chain has multiple levels.

------------------------------------------------------------------------

## 14. What are the advantages of inheritance?

### Answer

-   Reuse common code.
-   Reduce duplication.
-   Centralize common behavior.
-   Allow specialization in child classes.
-   Support framework base classes.

------------------------------------------------------------------------

## 15. What is a potential disadvantage of inheritance?

### Answer

Deep inheritance can create strong coupling and make code harder to
understand and maintain. When classes do not have a true parent-child
relationship, composition may be more appropriate.

------------------------------------------------------------------------

# Section 4 -- Method Overloading

## 16. What is method overloading?

### Theory

Method overloading means supporting multiple method signatures with the
same method name but different parameters.

### Interview Answer

TypeScript supports overloads through multiple overload signatures and
one implementation.

------------------------------------------------------------------------

## 17. Does TypeScript support method overloading?

### Answer

Yes. TypeScript supports compile-time type checking for overloaded
method signatures, but there is only one implementation at runtime.

------------------------------------------------------------------------

## 18. Can we have multiple method implementations with the same name in TypeScript?

### Answer

No. We can define multiple overload signatures, but there must be one
implementation.

------------------------------------------------------------------------

## 19. Why is an optional parameter commonly used in method overloading?

### Answer

The implementation needs to handle different valid argument
combinations. An optional parameter can represent an argument that may
or may not be supplied.

------------------------------------------------------------------------

## 20. What is the difference between an overload signature and the implementation signature?

### Answer

An overload signature tells callers which combinations of parameters are
supported.

The implementation signature contains the actual logic that handles
those calls.

------------------------------------------------------------------------

## 21. Give a real-time automation use case for overloading.

### Answer

A reusable automation utility could support more than one calling
pattern, such as an action that accepts a locator alone or a locator
with an additional description. Overloading can make such APIs easier to
consume while preserving type safety.

------------------------------------------------------------------------

# Section 5 -- Method Overriding

## 22. What is method overriding?

### Theory

Method overriding occurs when a child class provides its own
implementation of a method inherited from the parent.

### Interview Answer

Overriding is used when the child needs behavior that differs from the
parent implementation.

------------------------------------------------------------------------

## 23. Is inheritance required for method overriding?

### Answer

Yes. Method overriding is based on a parent-child inheritance
relationship.

------------------------------------------------------------------------

## 24. What is the purpose of `super`?

### Answer

`super` provides access to the parent class.

It can be used to call a parent method or parent constructor.

------------------------------------------------------------------------

## 25. Does the parent method automatically execute when a child overrides it?

### Answer

No.

If the child overrides a method, the child implementation executes when
called. The parent implementation must be explicitly called using
`super.methodName()` when required.

------------------------------------------------------------------------

## 26. Give an automation example for method overriding.

### Answer

A base browser class may define a generic `launch()` method. Chrome,
Edge, and Firefox child classes can override `launch()` to provide
browser-specific implementation.

------------------------------------------------------------------------

# Section 6 -- Overloading vs Overriding

## 27. What is the difference between overloading and overriding?

  -----------------------------------------------------------------------
  Method Overloading                  Method Overriding
  ----------------------------------- -----------------------------------
  Same class                          Parent and child

  Same method name                    Same method name

  Different signatures                Different implementation

  TypeScript overload signatures      Inheritance

  One implementation at runtime       Child implementation can replace
                                      parent behavior
  -----------------------------------------------------------------------

### Easy Memory Trick

**Overloading → Different inputs**

**Overriding → Different implementation**

------------------------------------------------------------------------

# Section 7 -- Interface

## 28. What is an interface?

### Theory

An interface defines a contract that describes what a class should
provide.

### Interview Answer

An interface is useful when multiple classes need to follow a common
structure or capability without necessarily sharing a common
implementation.

------------------------------------------------------------------------

## 29. Can we create an object of an interface?

### Answer

No. An interface cannot be instantiated directly.

A concrete class implementing the interface can be instantiated.

------------------------------------------------------------------------

## 30. How does a class implement an interface?

### Answer

Use the `implements` keyword.

The class must provide all required interface members.

------------------------------------------------------------------------

## 31. What happens if a class does not implement all required interface members?

### Answer

TypeScript reports a compile-time error because the class does not
satisfy the interface contract.

------------------------------------------------------------------------

## 32. Does an interface provide method implementation?

### Answer

For the class-method contract being discussed here, the interface
declares what the class must provide; the implementing class provides
the method implementation.

------------------------------------------------------------------------

## 33. Can a class implement more than one interface?

### Answer

Yes. TypeScript allows a class to implement multiple interfaces.

This is useful when a class needs to satisfy multiple independent
contracts.

------------------------------------------------------------------------

# Section 8 -- Abstract Class

## 34. What is an abstract class?

### Theory

An abstract class is a base class that cannot be instantiated directly.

It can contain:

-   Abstract methods.
-   Concrete methods.
-   Properties.
-   Constructors.

### Interview Answer

An abstract class is useful when related child classes need some common
implementation while also being required to implement certain behaviors
themselves.

------------------------------------------------------------------------

## 35. Can we create an object of an abstract class?

### Answer

No. An abstract class cannot be instantiated directly.

A concrete child class must extend it.

------------------------------------------------------------------------

## 36. What is an abstract method?

### Answer

An abstract method is declared without an implementation and uses the
`abstract` keyword.

A concrete child class must implement it.

------------------------------------------------------------------------

## 37. What is a concrete method?

### Answer

A concrete method has an implementation and can be inherited and reused
by child classes.

------------------------------------------------------------------------

## 38. Can an abstract class contain concrete methods?

### Answer

Yes.

This is one of the main differences between an abstract class and an
interface when teaching class-based implementation.

------------------------------------------------------------------------

## 39. Can an abstract class have a constructor?

### Answer

Yes. An abstract class can have a constructor.

The constructor is used when a concrete child class is instantiated.

------------------------------------------------------------------------

## 40. Can an abstract class support method overriding?

### Answer

Yes.

A child class can implement abstract methods and override concrete
methods inherited from the abstract class.

------------------------------------------------------------------------

# Section 9 -- Interface vs Abstract Class

## 41. What is the difference between an interface and an abstract class?

### Theory

Both can define required behavior, but their purposes differ.

### Answer

  -----------------------------------------------------------------------
  Interface                           Abstract Class
  ----------------------------------- -----------------------------------
  Contract                            Contract + common implementation

  `implements`                        `extends`

  Cannot instantiate                  Cannot instantiate directly

  Useful for capabilities             Useful for related classes

  Does not provide normal class       Can have properties and
  state/constructor behavior          constructors

  A class can implement multiple      A class extends one class
  interfaces                          
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 42. When would you choose an interface?

### Answer

Choose an interface when the primary requirement is to define a contract
or capability that different classes should follow.

Example scenario:

Several unrelated classes must provide a `clickAction()` capability.

------------------------------------------------------------------------

## 43. When would you choose an abstract class?

### Answer

Choose an abstract class when related classes share common
implementation and also need some methods to be implemented differently
by each child.

Example scenario:

A base browser class contains common browser actions, while each browser
type implements its own `launch()`.

------------------------------------------------------------------------

## 44. Can a class extend an abstract class and implement an interface?

### Answer

Yes.

A class can extend a class and implement one or more interfaces.

Conceptually:

``` text
Abstract Base Class
        ↓
      Child Class
        ↑
   Interface Contract
```

------------------------------------------------------------------------

# Section 10 -- Abstraction and Encapsulation

## 45. What is abstraction?

### Theory

Abstraction hides unnecessary implementation details and exposes the
behavior that users of the class need.

### Automation Example

A test can call a business-level method such as `login()` without
knowing how every locator and low-level browser action is implemented.

------------------------------------------------------------------------

## 46. What is encapsulation?

### Theory

Encapsulation keeps data and behavior together and controls access to
internal details.

TypeScript supports encapsulation using access modifiers such as
`private`, `protected`, `public`, and `readonly`.

### Automation Example

Internal locators can be kept private while public Page Object methods
expose the actions required by tests.

------------------------------------------------------------------------

## 47. What is the difference between abstraction and encapsulation?

### Answer

**Abstraction** focuses on hiding unnecessary implementation details.

**Encapsulation** focuses on bundling data and behavior and controlling
access to them.

### Easy Memory Trick

``` text
Abstraction   → What should be exposed?
Encapsulation → How should access be controlled?
```

------------------------------------------------------------------------

# Section 11 -- Polymorphism

## 48. What is polymorphism?

### Theory

Polymorphism means that the same interface or method concept can
represent different implementations.

In these topics, two commonly discussed forms are:

-   Method overloading.
-   Method overriding.

### Simple Explanation

``` text
Overloading
→ Same name, different signatures

Overriding
→ Same method, different implementation
```

------------------------------------------------------------------------

# Section 12 -- Automation Framework Scenarios

## 49. How can inheritance be used in a Playwright framework?

### Answer

A framework can have a base Page Object containing common functionality,
and specific Page Objects can extend it.

For example:

``` text
BasePage
   ↓
LoginPage
   ↓
CreateLeadPage
```

Common browser/page actions can be centralized while page-specific
actions remain in individual classes.

------------------------------------------------------------------------

## 50. How can abstraction be used in automation?

### Answer

A base class can define common automation behavior while forcing child
classes to implement page- or browser-specific behavior.

This helps standardize framework design.

------------------------------------------------------------------------

## 51. How can an interface be used in automation?

### Answer

An interface can define a common contract for components that should
expose the same actions.

For example, different browser or page implementations can be required
to provide common methods.

------------------------------------------------------------------------

## 52. Why are OOP concepts useful in automation frameworks?

### Answer

They help with:

-   Reusability
-   Maintainability
-   Separation of responsibilities
-   Reduced duplication
-   Consistent framework design
-   Easier extension
-   Better organization of Page Objects and utilities

------------------------------------------------------------------------

# Section 13 -- Common Interview Traps

## 53. Is an interface a class?

No. An interface is a TypeScript type-level contract and cannot be
instantiated like a class.

------------------------------------------------------------------------

## 54. Can an abstract class be instantiated?

No.

------------------------------------------------------------------------

## 55. Can an abstract class have implemented methods?

Yes.

------------------------------------------------------------------------

## 56. Can an abstract class have a constructor?

Yes.

------------------------------------------------------------------------

## 57. Does overriding require inheritance?

Yes.

------------------------------------------------------------------------

## 58. Does overloading require inheritance?

No. Method overloading is defined within the same class using overload
signatures.

------------------------------------------------------------------------

## 59. Does `implements` provide inherited implementation?

No. `implements` means the class agrees to satisfy the interface
contract. The class provides the implementation.

------------------------------------------------------------------------

## 60. Does `super` refer to the child class?

No. `super` refers to the parent class.

------------------------------------------------------------------------

# Section 14 -- Rapid Revision

  Concept                  One-Line Explanation
  ------------------------ -----------------------------------------------
  Class                    Blueprint for creating objects
  Object                   Instance of a class
  Function                 Standalone reusable block
  Method                   Function belonging to a class/object
  `this`                   Current object
  `extends`                Class inheritance
  `implements`             Interface contract implementation
  Inheritance              Reuse parent functionality
  Multilevel inheritance   Inheritance through multiple levels
  Overloading              Same method name with different signatures
  Overriding               Child changes parent implementation
  `super`                  Access parent class
  Interface                Contract
  Abstract class           Base class with abstract and concrete members
  Abstract method          Method without implementation
  Concrete method          Method with implementation
  Abstraction              Hide unnecessary implementation details
  Encapsulation            Control access to internal data/behavior
  Polymorphism             One concept with multiple implementations

------------------------------------------------------------------------

# Section 15 -- Interview Answer Pattern

When asked about any OOP concept, use this structure:

### Definition

State what the concept means.

### Purpose

Explain why it is used.

### Example

Give a small automation-related example.

### Difference

If applicable, compare it with the related concept.

### Practical Use

Explain where it would appear in a real automation framework.

This structure helps provide a complete interview answer without giving
unnecessary code.
