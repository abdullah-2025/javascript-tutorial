const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function restaurantMenu() {
    // Displaying the menu
    let menu = "Welcome to Our Restaurant!\nPlease select from the following menu:\n";
    menu += "1. Burger - $5.99\n";
    menu += "2. Pizza - $7.99\n";
    menu += "3. Salad - $4.99\n";
    menu += "4. Pasta - $6.99\n";
    menu += "5. Drink - $1.99\n";

    rl.question(menu + "Enter the number of your choice: ", function(choice) {
        // Decision based on user input
        if (choice == "1") {
            console.log("You have selected a Burger. Price: $5.99");
        } else if (choice == "2") {
            console.log("You have selected a Pizza. Price: $7.99");
        } else if (choice == "3") {
            console.log("You have selected a Salad. Price: $4.99");
        } else if (choice == "4") {
            console.log("You have selected Pasta. Price: $6.99");
        } else if (choice == "5") {
            console.log("You have selected a Drink. Price: $1.99");
        } else {
            console.log("Invalid choice! Please select a valid menu item.");
        }

        // Close the readline interface after the operation
        rl.close();
    });
}

// Call the function to run the program
restaurantMenu();
