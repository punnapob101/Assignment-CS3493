
const data = (fullname, ...language) => {
    return language.map(lang => fullname + " รู้ภาษา: " + lang);
}
console.log(data("AAA 3A", "Java", "C++", "C#"));
