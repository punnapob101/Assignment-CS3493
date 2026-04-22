const Person = (firstname, lastname, age = 0) => {
    return firstname + " " + lastname + ", Age: " + age;
}
let result1 = Person("AAA", "3A", "20");
let result2 = Person("BBB", "B3");
console.log("Result1 is: " + result1);
console.log("Result2 is: " + result2);