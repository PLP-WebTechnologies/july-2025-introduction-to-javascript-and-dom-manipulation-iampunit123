
//  PART 1: Variable Declarations & Conditionals

let age = 18;
let name = "Punit";
let isStudent = true;

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}


//   PART 2: Custom Functions

// Function 1: Greet user
function greetUser(username) {
  return "Hello, " + username + "! Welcome to the site.";
}

// Function 2: Add numbers
function addNumbers(a, b) {
  return a + b;
}

console.log(greetUser("Punit"));
console.log("5 + 10 =", addNumbers(5, 10));


//   PART 3: Loops

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count:", i);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
  console.log("While Loop Count:", counter);
  counter++;
}


//  * PART 4: DOM Interactions

// 1. Change text content
document.getElementById("message").innerText = "This text was changed by JavaScript!";

// 2. Add event listener to button (change color)
document.getElementById("colorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightyellow";
});

// 3. Generate list items dynamically
document.getElementById("listBtn").addEventListener("click", function () {
  let list = document.getElementById("myList");
  list.innerHTML = ""; // clear old items

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = "Item " + i;
    list.appendChild(li);
  }
});
