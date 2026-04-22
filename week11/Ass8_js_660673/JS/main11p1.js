const data = (fullname, ...language) => {
    return fullname + " " + language.join(", ");
}
console.log("ข้อมูลลูกค้า: " + data("AAA 3A", "Java", "C++", "C#"));