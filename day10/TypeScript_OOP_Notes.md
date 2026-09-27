# TypeScript OOP -- Complete Notes

## 1. Object-Oriented Programming in TypeScript

Object-Oriented Programming (OOP) is a programming approach where
software is organized around **objects** that contain data and behavior.

TypeScript supports the major OOP concepts:

-   Classes and Objects
-   Encapsulation
-   Inheritance
-   Polymorphism
-   Abstraction
-   Interfaces

These concepts are especially useful in automation frameworks because
test code can be organized into reusable Page Objects, Base Classes,
utilities, and common actions.

------------------------------------------------------------------------

# 2. Class

## Theory

A **class** is a blueprint or template used to create objects.

A class can contain:

-   Properties -- represent data/state.
-   Methods -- represent actions/behavior.
-   Constructors -- initialize objects.
-   Access modifiers -- control visibility.
-   Getters and setters -- control access to data.

### Automation Example

A `LoginPage` class can contain:

-   Username locator
-   Password locator
-   Login button locator
-   `enterUsername()`
-   `enterPassword()`
-   `clickLoginButton()`

The class represents the behavior of a Login page.

------------------------------------------------------------------------

# 3. Object

## Theory

An **object** is an instance of a class.

The `new` keyword is normally used to create an object.

### Example

``` typescript
class LoginPage {
    clickLogin() {
        console.log("Login clicked");
    }
}

let loginPage = new LoginPage();
loginPage.clickLogin();
```

### Important Terms

  Term       Meaning
  ---------- ------------------------------
  Class      Blueprint
  Object     Instance of a class
  Property   Data/state
  Method     Action/behavior
  `new`      Creates an object
  `this`     Refers to the current object

------------------------------------------------------------------------

# 4. Function vs Method

## Theory

A **function** is a standalone reusable block of code.

A **method** is a function that belongs to a class or object.

### Function

A function can be called independently.

### Method

A method is normally accessed through a class object.

### Automation Context

A standalone utility function might perform a general calculation, while
a Page Object method might perform an action such as:

`loginPage.clickLoginButton()`

### Quick Comparison

  Function                 Method
  ------------------------ ----------------------------------
  Standalone               Belongs to a class/object
  Called independently     Usually called through an object
  General reusable logic   Object-specific behavior

------------------------------------------------------------------------

# 5. `this` Keyword

## Theory

`this` refers to the **current object**.

It is commonly used when a method needs to access a property belonging
to the same object.

For example, if a class has a property called `username` and a method
has a local parameter also called `username`, `this.username` clearly
refers to the class property.

### Why it is useful

It helps distinguish:

-   Local variables/parameters
-   Class properties

### Automation Example

A Page Object may store a locator as a property and use `this.locator`
inside its methods.

------------------------------------------------------------------------

# 6. Inheritance

## Theory

**Inheritance** allows one class to reuse members of another class.

-   Parent class -- provides common functionality.
-   Child class -- inherits and can add its own functionality.

TypeScript uses the `extends` keyword for class inheritance.

### Automation Example

A `LoginPage` can contain common login actions. A `CreateLead` page can
extend it and add lead-specific actions.

``` text
LoginPage
    ↓
CreateLead
```

### Benefits

-   Code reuse
-   Less duplication
-   Centralized common functionality
-   Easier maintenance
-   Supports framework-level base classes

### Inheritance Across Files

When classes are in different files:

1.  Export the parent class.
2.  Import it in the child file.
3.  Use `extends`.

------------------------------------------------------------------------

# 7. Multilevel Inheritance

## Theory

**Multilevel inheritance** occurs when inheritance continues through
multiple levels.

``` text
LoginPage
    ↓
CreateLead
    ↓
DeleteLead
```

`DeleteLead` inherits from `CreateLead`, and `CreateLead` inherits from
`LoginPage`.

Therefore, the `DeleteLead` object can access members inherited through
the chain.

### Automation Use Case

A framework may have:

``` text
BasePage
    ↓
LeadPage
    ↓
CreateLeadPage
```

Common browser/page actions can be kept in `BasePage`, while specialized
functionality is added at lower levels.

### Caution

Very deep inheritance hierarchies can make code harder to understand.
Composition and smaller reusable utilities can sometimes be preferable.

------------------------------------------------------------------------

# 8. Method Overloading

## Theory

**Method overloading** means allowing the same method name to support
different parameter combinations.

TypeScript implements overloads using:

1.  Multiple overload signatures.
2.  One implementation.

### Example

``` typescript
class Calculator {
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    add(a: number, b: number, c?: number): number {
        return c !== undefined ? a + b + c : a + b;
    }
}
```

### Important Points

-   Method name remains the same.
-   Parameters/signatures differ.
-   TypeScript uses overload signatures for type checking.
-   There is only one runtime implementation.
-   Optional parameters are commonly used in the implementation.

### Automation Use Case

A utility may support different input combinations, such as an action
that accepts a locator alone or a locator plus an action description.

### Common Interview Trap

Do not say that TypeScript creates multiple runtime methods with the
same name. It does not. There is one implementation.

------------------------------------------------------------------------

# 9. Method Overriding

## Theory

**Method overriding** occurs when a child class provides a new
implementation for a method already defined in the parent class.

Inheritance is required.

### Example

``` typescript
class LaunchBrowser {
    launch() {
        console.log("Launching browser");
    }
}

class LaunchChrome extends LaunchBrowser {
    launch() {
        console.log("Launching Chrome");
    }
}
```

### Why Override?

A parent can define common behavior while child classes customize
behavior.

### Automation Example

A generic browser class can define `launch()`, while browser-specific
classes can provide Chrome, Edge, or Firefox behavior.

------------------------------------------------------------------------

# 10. `super` Keyword

## Theory

`super` is used inside a child class to access the parent class.

It can be used to:

-   Call a parent method.
-   Call a parent constructor.

### Example

``` typescript
class LaunchChrome extends LaunchBrowser {
    launch() {
        super.launch();
        console.log("Launching Chrome");
    }
}
```

### Execution Flow

``` text
Child launch()
      ↓
super.launch()
      ↓
Parent launch()
      ↓
Child-specific code
```

### Important Point

The parent method does not automatically execute when a child overrides
it. Use `super.methodName()` when the parent implementation is also
required.

------------------------------------------------------------------------

# 11. Interface

## Theory

An **interface** defines a contract.

It describes what a class should provide without supplying the normal
implementation of those class methods.

A class uses `implements` to follow an interface.

### Example

``` typescript
interface BrowserAction {
    clickAction(): void;
    fillValue(): string;
}
```

A class implementing this interface must provide the required members.

### Key Characteristics

-   Defines a contract.
-   Supports structural typing.
-   A class can implement an interface.
-   An interface cannot be instantiated directly.
-   Useful when unrelated classes need to follow the same contract.

### Automation Example

Different page/action classes may be required to support common actions
such as click and fill.

------------------------------------------------------------------------

# 12. `implements` Keyword

## Theory

`implements` tells TypeScript that a class must satisfy an interface.

Conceptually:

``` text
Interface
    ↓
Contract
    ↓
Class implements Interface
    ↓
Class provides implementation
```

### Important Point

`implements` does not mean that the class inherits implementation from
the interface. The class must provide the required implementation
itself.

------------------------------------------------------------------------

# 13. Abstract Class

## Theory

An **abstract class** is a base class that cannot be instantiated
directly.

It can contain both:

-   Abstract methods -- no implementation.
-   Concrete methods -- have implementation.

It can also contain properties and constructors.

### Example

``` typescript
abstract class Browser {
    abstract launch(): void;

    closeBrowser(): void {
        console.log("Browser closed");
    }
}
```

### Important Point

The abstract class defines some common behavior and leaves some behavior
for child classes to implement.

------------------------------------------------------------------------

# 14. Abstract Method

## Theory

An **abstract method** is declared without a method body and uses the
`abstract` keyword.

Example:

``` typescript
abstract launch(): void;
```

A concrete child class must provide the implementation.

### Why Use Abstract Methods?

They force child classes to provide behavior that is different for each
implementation.

### Automation Example

A base browser class may require every browser implementation to define
its own `launch()` method.

------------------------------------------------------------------------

# 15. Concrete Method

## Theory

A **concrete method** has an implementation.

An abstract class can contain concrete methods for behavior that is
common to all child classes.

### Example

``` typescript
closeBrowser(): void {
    console.log("Browser closed");
}
```

All child classes can reuse this implementation unless they choose to
override it.

------------------------------------------------------------------------

# 16. Implementing an Abstract Class

A child class uses `extends` and must implement all inherited abstract
methods before it can be instantiated.

Example:

``` typescript
class ChromeBrowser extends Browser {
    launch(): void {
        console.log("Launching Chrome");
    }
}
```

### Rule

If a concrete child class does not implement required abstract methods,
TypeScript reports a compile-time error.

------------------------------------------------------------------------

# 17. Interface vs Abstract Class

  -----------------------------------------------------------------------
  Interface                           Abstract Class
  ----------------------------------- -----------------------------------
  Defines a contract                  Defines a contract plus common
                                      implementation

  Class uses `implements`             Child uses `extends`

  Cannot be instantiated              Cannot be instantiated directly

  Mainly describes required structure Can contain abstract and concrete
                                      members

  Does not provide normal class       Can have properties and
  state/constructor behavior          constructors

  Useful for common                   Useful for related classes sharing
  capabilities/contracts              behavior
  -----------------------------------------------------------------------

### Beginner-Friendly Rule

**Interface → What should be provided**

**Abstract class → What should be provided + some common
implementation**

This is a simplified learning rule; TypeScript's type system provides
additional interface capabilities.

------------------------------------------------------------------------

# 18. Constructors

## Theory

A **constructor** is a special method used to initialize an object when
it is created.

It runs automatically when `new` is used.

### Important OOP Point

An abstract class can have a constructor.

An interface does not have a class constructor because an interface is
not a class and cannot be instantiated.

### Automation Use Case

A base Page Object constructor commonly receives a Playwright `Page`
object and stores it for use by page methods.

------------------------------------------------------------------------

# 19. Polymorphism

## Theory

**Polymorphism** means one common interface or parent type can represent
different implementations.

Two relevant forms in these topics are:

### Compile-Time / Type-Level Polymorphism

Method overloading allows one method name to represent different
accepted signatures.

### Runtime Polymorphism

Method overriding allows a child implementation to provide different
behavior for the same parent method.

### Simple View

``` text
Overloading  → Same name, different signatures
Overriding   → Same method, different implementation
```

------------------------------------------------------------------------

# 20. Encapsulation

## Theory

**Encapsulation** means keeping data and behavior together and
controlling how internal data is accessed.

TypeScript supports encapsulation using access modifiers such as:

-   `public`
-   `private`
-   `protected`
-   `readonly`

### Automation Example

A locator or internal implementation detail can be kept private while
exposing a public method such as `login()`.

### Benefit

The test should interact with the Page Object through meaningful methods
instead of directly manipulating every internal detail.

------------------------------------------------------------------------

# 21. Abstraction

## Theory

**Abstraction** means exposing the required behavior while hiding
unnecessary implementation details.

In TypeScript, abstraction can be achieved using:

-   Interfaces
-   Abstract classes
-   Encapsulation

### Automation Example

A test can call:

`loginPage.login(username, password)`

without needing to know every locator and low-level interaction used
internally.

------------------------------------------------------------------------

# 22. OOP Concepts in Automation

  OOP Concept      Example in Automation
  ---------------- --------------------------------------------------
  Class            `LoginPage`
  Object           `new LoginPage()`
  Property         Locator or Page reference
  Method           `clickLoginButton()`
  Inheritance      `CreateLead extends LoginPage`
  Overloading      Utility supporting multiple parameter signatures
  Overriding       Browser-specific `launch()`
  Interface        Common action contract
  Abstract class   Base Page/Base Browser
  Encapsulation    Private locators/internal state
  Abstraction      Expose business-level actions

------------------------------------------------------------------------

# 23. Best Practices

1.  Keep classes focused on one responsibility.
2.  Use meaningful method names such as `enterUsername()` and
    `clickLoginButton()`.
3.  Avoid unnecessarily deep inheritance.
4.  Put common behavior in a suitable base class.
5.  Use interfaces when the primary need is a contract.
6.  Use abstract classes when common implementation is also required.
7.  Keep implementation details hidden where possible.
8.  Prefer composition when inheritance creates unnecessary coupling.
9.  Use method overloading only when multiple signatures genuinely
    improve the API.
10. Keep Page Object methods focused on user actions and validations.

------------------------------------------------------------------------

# 24. Quick Revision

``` text
Class
→ Blueprint

Object
→ Instance of a class

Method
→ Action/behavior inside a class

Inheritance
→ Reuse parent functionality

Multilevel Inheritance
→ Inheritance through multiple levels

Overloading
→ Same method name, different signatures

Overriding
→ Child changes parent method implementation

Interface
→ Contract

Abstract Class
→ Contract + common implementation

Abstract Method
→ Method without implementation

Concrete Method
→ Method with implementation

super
→ Access parent class

extends
→ Class inheritance

implements
→ Interface implementation

new
→ Creates an object
```
