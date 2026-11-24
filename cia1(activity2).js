
// Q1. Create a JSON Object
let student1 = {
    name: "Arun",
    age: 25,
    department: "IT"
};
console.log(student1);

// Q2. Access JSON Properties
let student2 = {
    name: "Priya",
    age: 22,
    city: "Bangalore"
};
console.log(student2.name);
console.log(student2.city);

// Q3. Convert JSON into JavaScript Object
let student = '{"name":"Ravi","age":24}';
let obj = JSON.parse(student);
console.log(obj.name);

// Q4. Convert JavaScript Object into JSON
let student3 = {
    name: "Arun",
    age: 25,
    city: "Bangalore"
};
let jsonString = JSON.stringify(student3);
console.log(jsonString);

// Q5. Create a Simple XML Document
let xml = `
<student>
    <name>Kumar</name>
    <age>23</age>
    <department>CSE</department>
</student>
`;
console.log(xml);

// Q6. Fetch User Name
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log(data.name))
.catch(error => console.log(error));

// Q7. Fetch User Phone Number
fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response => response.json())
.then(data => console.log(data.phone))
.catch(error => console.log(error));

// Q8. Display Multiple Users
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(user => console.log(user.name));
})
.catch(error => console.log(error));

// Q9. Fetch Company Information
fetch("https://jsonplaceholder.typicode.com/users/4")
.then(response => response.json())
.then(data => {
    console.log(data.company.name);
    console.log(data.website);
})
.catch(error => console.log(error));

// Q10. Handle Errors Using Fetch API
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Error:", error));
