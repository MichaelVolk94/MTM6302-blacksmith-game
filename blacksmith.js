
  let gold = 10;
let ore = 2;
let wood = 4;
let fireLit = false;
let sword= 4 
let axe= 4

// Variables
let fireStatus = false;
// let wood = 3


// Functions

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 * To stop a fire:
 *    The fire must be going
 */
function fire () {
  if (fireStatus === true && wood > 0){
    fireStatus = false
    wood = wood - 1
    console.log('You have started a fire.')
  }
  else if (fireStatus === false) {
    console.log('You have put out the fire')
    fireStatus = true
  }
  else {
    console.log('You do not have enough wood to start a fire')
  }
}

/**
 * buy
 */

function buy(item){
  if (item === 'ore' && gold >= 3 && fireStatus === false){
    ore = ore + 1
    gold = gold - 3
    console.log('You bought 1 ore')
  }
  if  (item === 'wood'){
    fireStatus = false
wood = wood + 1
gold = gold - 1
console.log('You bought 1 wood')
}
}


/**
 * make
 */
function make(item){
  if (item === 'sword' && wood >= 2) {
    ore = ore - 2
    wood = wood - 1
    console.log('You have made 1 sword')
  }
  if (item === 'axe') {
    ore = ore - 1
    wood = wood - 2
    console.log('You have made 1 axe')
  }
  else {
    return "Invalid item.";
  }
}

/**
 * sell
 */
function sell(item){
  if (item === 'sword') {
    gold = gold + 5
    console.log('You have sold 1 sword')
  }
  if (item === 'axe') {
    gold = gold + 4
    console.log('You have now sold 1 axe')
  } else {
    return "Invalid item.";
  }
}


/**
 * inventory
 * Shows the players current inventory
 */

function displayInventory(){
  console.log('Current Inventory: Gold: X, Ore: X, Wood: X, Swords: X, Axes: X')
  return `Inventory:
  Gold: ${gold}
  Ore: ${ore}
  Wood: ${wood}
  Swords: ${sword}
  Axes: ${axe}`;
}

function executeCommand() {
  const commandInput = document.getElementById("commandInput");
  const outputElement = document.getElementById("output");

  const command = commandInput.value.toLowerCase();

  let output;
  switch (command) {
    case "buy ore":
    case "buy wood":
      output = buy(command.split(' ')[1]);
      break;
    case "make sword":
    case "make axe":
      output = make(command.split(' ')[1]);
      break;
    case "sell sword":
    case "sell axe":
      output = sell(command.split(' ')[1]);
      break;
    case "fire":
      output = fire();
      break;
    case "inventory":
      output = displayInventory();
      break;
    case "help":
      output = help();
      break;
      default:
      output = "Invalid command. Type 'help' for instructions.";
  }
  outputElement.textContent = output;
  commandInput.value = "";
}

/**
 * Help Command
 * Returns the instruction on how to play the game.
 */
function help () {
  return `INSTRUCTIONS:
  Blacksmith is a simple text base game. 
  
  As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:
  - buy(item)
  - make(item)
  - sell(item)
  - fire()
  - inventory()
  - help()`
}

// Log the help() function
console.log(help())