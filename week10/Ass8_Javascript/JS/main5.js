const data = { firstname: "AAA", lastname: "BBB" };
Object.freeze(data);
data.lastname = "CCC";
console.log("Data is: ", data);