// Step 1: Variable Data
const burgers = ['Hamburger', 'Cheeseburger'];   // global array
let featuredDrink = 'Strawberry Milkshake';    // global variable

// Step 2: Function and Block
function addBurger() {
  const newBurger = 'Flatburger';   // function-scoped variable
  burgers.push(newBurger);        // add to burgers array
}

// Step 3: Variable Declaration and Scope
if (true) {
  const anotherNewBurger = 'Maple Bacon Burger'; // block-scoped variable
  burgers.push(anotherNewBurger);              // add to burgers array

  function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';           // change global variable
  }

}

// ✅ Testing
console.log(burgers); // ['Hamburger', 'Cheeseburger', 'Flat
addBurger();
console.log(burgers); // ['Hamburger', 'Cheeseburger', 'Flat
console.log(featuredDrink); // 'The JavaShake' (after change)



// Now call the function to change the drink
changeFeaturedDrink();
console.log(featuredDrink); // 'The JavaShake' (after change)


