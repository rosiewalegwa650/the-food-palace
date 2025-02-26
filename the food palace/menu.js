<script> //Step 1: Prompting username
let userName = prompt("Enter your preferred name:");
if (!userName || userName.trim() === "") {
    userName = "Guest";
}

// Step 2: welcoming message
alert(`Welcome to the food palace, ${userName}! please remember to enjoy every bite.`);

// Step 3: Display the Menu
let menu = ["chinese fried rice", "Biriyani", "a side of salad", "cococnut fish", "roasted cinamon pineapple"];

console.log("\nthe food palace Menu:");
menu.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// Step 4: Allow User to Add a New Dish
let newfood = prompt("Suggest a new dish to add to our menu:");
if (newfood && newfood.trim() !== "") {
    menu.push(newfood.trim());
    console.log("\nour new menu:");
    menu.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
} else {
    console.log("No dish was added. Please add a dish.");
}

    </script>