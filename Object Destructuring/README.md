## What is Object Destructuring

Object Destructuring is a JavaScript feature that allows you to extract properties from an object and assign them to
variables. It’s a powerful feature introduced in ES6 that allows you to extract values from objects and assign them to
variables using a concise syntax.

## 📌 1. Basic Object Destructuring:

### Basic Syntax of Object Destructuring:

```javascript
const {key} = object;
```

### Example:

```javascript
const user = {name: "Alice", age: 25};

const {name, age} = user;

console.log(name); // "Alice"
console.log(age);  // 25
```

## 📌 2. Destructuring with Different Variable Names

You can rename the variables during destructuring using ``:``

### Example:

```javascript
const user = {name: "Alice", age: 25};

const {name: userName, age: userAge} = user;

console.log(userName); // "Alice"
console.log(userAge);  // 25
```

## 📌 3. Default Values in Destructuring

You can assign a default value to a variable if the property is not present in the object.

### Example:

```javascript
const user = {name: "Alice"};

const {name, age = 30} = user;

console.log(name); // "Alice"
console.log(age);  // 30 (default used)
```

## 📌 4. Nested Object Destructuring

You can also use nested object destructuring to extract properties from nested objects.

### Example:

```javascript
const user = {
    name: "Alice",
    address: {
        city: "New York",
        zip: 10001
    }
};

const {
    address: {city, zip}
} = user;

console.log(city); // "New York"
console.log(zip);  // 10001
```

## 📌 5. Destructuring in Function Parameters

You can also use object destructuring in function parameters to extract properties from objects.

### Example:

```javascript
function greet({name, age}) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

const user = {name: "Alice", age: 25};
greet(user); // "Hello, Alice. You are 25 years old."
```

## 📌 6. Rest Operator in Destructuring

The rest operator ``...`` can be used to collect the remaining properties of an object into an array.

### Example:

```javascript
const user = {name: "Alice", age: 25, country: "USA"};

const {name, ...rest} = user;

console.log(name); // "Alice"
console.log(rest); // { age: 25, country: "USA" }
```

## 📌 7. Combining Arrays and Objects

You can combine array destructuring and object destructuring to extract elements from an array and properties from an
object.

### Example:

```javascript
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30}
];

const [{name: firstName}, {age: secondAge}] = users;

console.log(firstName); // "Alice"
console.log(secondAge); // 30
```

## 📌 8. Destructuring with Computed Property Names

You can use computed property names to dynamically access properties of an object.

### Example:

```javascript
const key = "name";
const user = {name: "Alice", age: 25};

const {[key]: userName} = user;

console.log(userName); // "Alice"
```