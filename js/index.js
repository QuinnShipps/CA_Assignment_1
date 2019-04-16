//Defines an animal object, which has a name and description
class Animal  {
    constructor(name, description)  {
        this.mname = name;
        this.mdescription = description;
    }

    getName() {
        return this.mname;
    }
    getDescription()  {
      return this.mdescription;
    }
}

//An array to hold all our animal data
//For now, the animals will be hardcoded in
var myAnimals = [new Animal('Cat', 'A cat'),
                  new Animal('Dog', 'A dog'),
                  new Animal('Rat', 'A rat'),
                  new Animal('Pig', 'A pig'),
                  new Animal('Cow', 'A cow'),
                  new Animal('Bat', 'A bat'),
                  new Animal('Yak', 'A yak'),
                  new Animal('Elk', 'An elk'),
                  new Animal('Eel', 'An eel'),
                  new Animal('Emu', 'An emu')];

function getAnimalDesc(selectedAnimal)  {
  //console.log(selectedAnimal.value);
  document.getElementById('description_box').innerHTML = myAnimals[selectedAnimal.value].getDescription();
}

function init() {

  //Dynamically create a div when this script is loaded by the webpage
  var div = document.createElement('div');
  div.id = 'block';
  div.align = 'center';
  document.getElementsByTagName('body')[0].appendChild(div);

  var leftDiv = document.createElement('div');
  leftDiv.id = 'leftDiv';
  leftDiv.align = 'right';
  leftDiv.style = 'float:left; width:45%; margin-top:20px';
  document.getElementById('block').appendChild(leftDiv);

  var rightDiv = document.createElement('div');
  rightDiv.id = 'rightDiv';
  rightDiv.align = 'left';
  rightDiv.style = 'float:right; width:45%';
  document.getElementById('block').appendChild(rightDiv);

  //Create a selection box
  var sel = document.createElement('select');
  sel.id = 'sel_animals';
  sel.style = 'font-size:20px;';
  sel.setAttribute('onchange', "getAnimalDesc(this);");

  //Populate the selection box
  for(var index = 0; index < myAnimals.length; index++)  {
    sel.options[sel.options.length] = new Option(myAnimals[index].getName(), index);
  }

  //Append the select box to the div
  document.getElementById('leftDiv').appendChild(sel);

  //Create a paragraph element to hold the animal's description
  var paragraph = document.createElement('p');
  paragraph.id = 'description_box';
  paragraph.style = 'font-size:20px;'
  paragraph.innerHTML = "Please select an animal.";
  document.getElementById('rightDiv').appendChild(paragraph);
}

//Runs the init function on load of the js file
onload = init;
