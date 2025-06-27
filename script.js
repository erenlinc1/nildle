//declare stuff here idk
var userinput = document.getElementById('goog').value
var isvalid = false
var classcategory = ""
var tries = 5
const classAttributes = ["CAT","MHP","SPD","CD1","CD2","CD3"];
const elements = document.getElementsByClassName("something")
for (const myelement of elements) {
    if (myelement.id == "") {
        myelement.style.backgroundColor = "rgb(44,76,36)"
        console.log("Hi")
        continue;
    }
    myelement.style.visibility = "hidden"
}

class classObject {
    constructor(name, hp, speed, cd1, cd2, cd3) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.cd1 = cd1;
        this.cd2 = cd2;
        this.cd3 = cd3;
    }
}

const classTree = {
    annoyers: {
        accelerator: new classObject("accelerator",25,16,1,10,20),
        broom: new classObject("broom",75,18,6,8,15),
        burglar: new classObject("burglar",100,16,6,10,12),
        counterstriker: new classObject("counter-striker",60,15,10,15,30),
        dancecommander: new classObject("dance commander",75,18,4,6,30),
        darklord: new classObject("darklord",50,16,12,12,16),
        fighter: new classObject("fighter",75,17,1,8,8),
        idpd: new classObject("i.d.p.d",60,17,8,12,20),
        illumina: new classObject("illumina",100,16,15,20,30),
        pirate: new classObject("pirate",90,15,8,12,16),
        sorcerer: new classObject("sorcerer",60,16,6,12,15),
        thunderstruck: new classObject("thunderstruck",75,18,6,10,15),
        trafficwarden: new classObject("traffic warden",60,15,0,8,20)
    },
    rushdowns: {
        //TBA
    },
    punishers: {
        //TBA
    },
    barragers: {
        //TBA
    },
    miscelleaneous: {
        //TBA
    }
};
var actualCategory = "annoyers"
var actualClass = Object.values(classTree.annoyers.accelerator).slice(1)

function buttonPress(){
    userinput = document.getElementById('goog').value.toLowerCase().replaceAll(' ','')
    isvalid= false;
    classcategory= ""
    if (userinput == "") {
        return;
    }
    
    for (const category in classTree) { //check all 5 categories for the class the user selected
        if (userinput in classTree[category]) {
            isvalid = true;
            classcategory = category
        }
    }
    if (!isvalid) {  //if class doesn't exist, alert the user and abort the process
        alert("Choose a valid class.");
        return;
    }
    //if user reached this point, it must be a valid selection

    chosenclass= classTree[classcategory][userinput];
    //console.log(chosenclass.name + " has " + chosenclass.hp + " health.");
    document.getElementById("goog").value = "";
    // Now we set the values of the boxes
    let hack = Object.values(chosenclass).slice(1);
    let hack2 = actualClass.slice();
    for (const attribute of classAttributes) {
        let currentElement = document.getElementById(attribute +(6-tries));
        currentElement.style.visibility = "visible";
        if (attribute == "CAT") {
            currentElement.innerHTML = classcategory.toUpperCase();
            if (classcategory == actualCategory) {
                currentElement.style.backgroundColor ="green"
            }
            continue;
        }
        let currentAttribute = hack.shift()
        let currentActualClassAttribute = hack2.shift()
        currentElement.innerHTML = currentAttribute;
        if (Number(currentAttribute) < currentActualClassAttribute) {
            console.log(currentAttribute, "<", currentActualClassAttribute);
            currentElement.style.backgroundColor ="GoldenRod"
        }
        else if (Number(currentAttribute) > currentActualClassAttribute) {
            console.log(currentAttribute, ">", currentActualClassAttribute);
            currentElement.style.backgroundColor ="Gold"
        }
        else {
            console.log("amazing");
            currentElement.style.backgroundColor ="green"
        }
    }

    tries = tries -1;
    document.getElementById("tryCounter").innerHTML = "Tries remaining: " + tries;
    if (tries==0) {
        endGame();
    }
};

function endGame(){
    //TODO: Check if the user found the class; then either display "you lost, the class was:" or "you won in x tries!"
};

function newGame() {
    isvalid= false;
    classcategory= "";
    tries = 5;
    //currentElement.style.visibility = false
};