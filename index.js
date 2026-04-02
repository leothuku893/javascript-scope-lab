// Step 1: Variable Data
let burgers = ['Hamburger', 'Cheeseburger'];   // global array
let featuredDrink = 'Strawberry Milkshake';    // global variable

// Step 2: Function and Block
function addBurger() {
  let newBurger = 'Flatburger';   // function-scoped variable
  burgers.push(newBurger);        // add to burgers array
}

// Step 3: Variable Declaration and Scope
if (true) {
  let anotherNewBurger = 'Maple Bacon Burger'; // block-scoped variable
  burgers.push(anotherNewBurger);              // add to burgers array

  function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';           // change global variable
  }

  // Example usage inside the block
  changeFeaturedDrink();
}

// ✅ Testing
addBurger();
console.log(burgers);        // ['Hamburger', 'Cheeseburger', 'Maple Bacon Burger', 'Flatburger']
console.log(featuredDrink);  // 'The JavaShake'
