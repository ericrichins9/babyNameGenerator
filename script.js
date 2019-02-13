var boyNames = [
    "Liam", 
    "Noah", 
    "William", 
    "James", 
    "Logan", 
    "Benjamin",
    "Mason",
    "Elijah",
    "Oliver",
    "Jacob",
    "Lucas",
    "Michael",
    "Alexander",
    "Ethan",
    "Daniel",
    "Matthew",
    "Aiden",
    "Henry",
    "Joseph",
    "Jackson",
    "Samuel",
    "Sebastian",
    "David",
    "Carter",
    "Wyatt"];


var girlNames = [    
    "Liama", 
    "Noaha", 
    "Williama", 
    "Jamesa", 
    "Logana", 
    "Benjamina",
    "Masona",
    "Elijaha",
    "Olivera",
    "Jacoba",
    "Lucasa",
    "Michaela",
    "Alexandera",
    "Ethana",
    "Daniela",
    "Matthewa",
    "Aidena",
    "Henrya",
    "Josepha",
    "Jacksona",
    "Samuela",
    "Sebastiana",
    "Davida",
    "Cartera",
    "Wyatta"
];
var btn = document.getElementById('gen-name');
var nameContainer = document.getElementById('name-container');
var savedNameContainer = document.getElementById('saved-name-container');
var boyNameBtn = document.getElementById('boy-btn');
var girlNameBtn = document.getElementById('girl-btn');
var lastName = document.getElementById('last-name');
var saveName = document.getElementById('save-name');
var newSavedNameContainer = document.createElement('div');
var mars = document.getElementById('mars');
var venus = document.getElementById('venus');

btn.addEventListener('click',function(event){
    generateRandomName()
});


function generateRandomName(){
    //if radio button 'boy' is selected, pick from boyNames array. else, pick from girlNames array, else, message "pick a gender"
    if (lastName.value === ""){
        alert("Hey, your baby needs a last name!")
    }
    else if (boyNameBtn.checked){
        genAppropriateName(boyNames);
    }
    else if (girlNameBtn.checked){
        genAppropriateName(girlNames);
    }
    else {
        alert("Pick a Name, Yo");
    }
}

function genAppropriateName(names){
    var randomFirstName = getRandElem(names);
    var randomMidName = getRandElem(names);
    while (randomMidName === randomFirstName){
        randomMidName = getRandElem(names);
    }
    printName(randomFirstName,randomMidName);
}
    
function printName(firstName,midName){  
        //Create a container for new name
        var newNameContainer = document.createElement('div');
        //create an element to hold name and add name to container
        var newName = document.createElement('h3');
        //newName.className = 'name';
        newName.innerText = firstName + " " + midName + " " + lastName.value;
        newNameContainer.appendChild(newName);
        //add name  to dom
        nameContainer.innerHTML = newNameContainer.outerHTML;

        saveName.style.display = 'block';

}

saveName.addEventListener('click',function(event){
    saveRandomName()
});

function saveRandomName(){ 
    // console.log('hi');

    var newSavedName = document.createElement('h3');
    newSavedName.innerText = nameContainer.innerHTML
    newSavedNameContainer.appendChild(newSavedName);
    savedNameContainer.innerHTML = newSavedNameContainer.innerText;
    mars.style.display = 'inline';
    
}

function getRandElem(arr){
    return arr[genRandNum(0,arr.length - 1)];
}

function genRandNum(min,max){
    var rnum = Math.floor(Math.random() * (max-min +1) + min);
    return rnum;
}
