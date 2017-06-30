console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var midEarth = document.createElement("section");
  midEarth.setAttribute("id", "middle-earth");
  for (var i = 0; i < lands.length; i++) {
    var landName = document.createTextNode(lands[i]);
    var eachLand = document.createElement("h1");
    var indLand = document.createElement("article");
    
    
    eachLand.appendChild(landName);
    indLand.appendChild(eachLand);
    alert(indLand);
    midEarth.appendChild(indLand);
    
  }
  body.appendChild(midEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitArea = document.querySelector("article");
  var bunchOfHobbits = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
    
    var hobbitName = document.createTextNode(hobbits[i]);
    var hobbitList = document.createElement("li");
    hobbitList.setAttribute("id", "the-hobs");
    hobbitList.appendChild(hobbitName);
    //alert(hobbitList);
    bunchOfHobbits.appendChild(hobbitList);

  }
  hobbitArea.appendChild(bunchOfHobbits);


}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement("div");
  theRing.setAttribute("id", "the-ring");
  body.appendChild(theRing);
  theRing.className = 'magic-imbued-jewelry';
  document.getElementById("the-ring").addEventListener("click", nazgulScreech)
  var frodo = document.getElementsByTagName('li')[0];
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var newBuddies = document.createElement("aside");
  var listOfBuddies = document.createElement("ul");
  newBuddies.appendChild(listOfBuddies);

  for (var i = 0; i < buddies.length; i++) {
    
    var buddiesName = document.createTextNode(buddies[i]);
    var someBuddies = document.createElement("li");
    // someBuddies.setAttribute("id", "the-buddies");
    someBuddies.appendChild(buddiesName);
    // alert(buddiesList);
    listOfBuddies.appendChild(someBuddies);

  }
  body.appendChild(newBuddies);

}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.getElementsByTagName("li")[7];
  strider.innerHTML = "Aragorn";
  
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var theHobs = document.querySelectorAll("#the-hobs");
  var insertLocation = document.getElementsByTagName("article")[1];
  var rivendellArea = document.getElementsByTagName("h1")[1];
  console.log("the hobbs are" + theHobs);
  console.log(rivendellArea);
  console.log(theHobs.length);
  insertLocation.insertBefore(rivendellArea, insertLocation.secondChild);
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var newFellowShipDiv = document.createElement("div");
  newFellowShipDiv.setAttribute("id", "the-fellowship");
  var theFellows = document.getElementsByTagName("li")
  for(var i = 0; i < theFellows.length; i++ ) {
    theFellows[i].setAttribute("id", "the-fellowship");
    alert("has joined the party");
  }
}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.getElementsByTagName("li")[4];
  gandalf.setInnerHTML = "Gandalf the White";
  gandalf.setAttribute("style", "background-color: white, border: 2px solid grey");
}

theBalrog();
// Part 9

function hornOfGondor() {
  alert("the horn of gondor has been blown");
  var boromirKilled = document.getElementsByTagName("li")[8];
  boromirKilled.setAttribute("style", "background-color: white");
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

hornOfGondor();
// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var newLocationDiv = document.createElement("div");
  newLocationDiv.setAttribute("id", "mount-doom");
  var mordorLocation = document.getElementsByTagName("h1")[2];
  var frodoDude = document.getElementsByTagName("li")[0];
  var samDude = document.getElementsByTagName("li")[1];
  mordorLocation.appendChild(frodoDude);
  mordorLocation.appendChild(samDude);
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var newGollumDiv = document.createElement("div");
  newGollumDiv.setAttribute("id", "gollum");
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
