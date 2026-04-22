const Person = (firstname, lastname, age) => {
    if (typeof firstname === "undefined") {
        firstname = "";
    }
    if (typeof lastname === "undefined") {
        lastname = "";
    }
    if (typeof age === "undefined") {
        age = 0;
    }
    return firstname + " " + lastname + ", Age: " + age;
}
let result = Person();
console.log(result);