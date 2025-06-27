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
        continue;
    }
    myelement.style.visibility = "hidden"
}

class classObject {
    constructor(hp, speed, cd1, cd2, cd3) {
        this.hp = hp;
        this.speed = speed;
        this.cd1 = cd1;
        this.cd2 = cd2;
        this.cd3 = cd3;
    }
}

const classTree = {
    annoyers: {
        accelerator: new classObject(25,16,1,10,20),
        broom: new classObject(75,18,6,8,15),
        burglar: new classObject(100,16,6,10,12),
        counterstriker: new classObject(60,15,10,15,30),
        dancecommander: new classObject(75,18,4,6,30),
        darklord: new classObject(50,16,12,12,16),
        fighter: new classObject(75,17,1,8,8),
        idpd: new classObject(60,17,8,12,20),
        illumina: new classObject(100,16,15,20,30),
        pirate: new classObject(90,15,8,12,16),
        sorcerer: new classObject(60,16,6,12,15),
        thunderstruck: new classObject(75,18,6,10,15),
        trafficwarden: new classObject(60,15,0,8,20)
    },
    rushdowns: {
        amateurdentist: new classObject(90,16,5,8,10),
        caretaker: new classObject(80,16,3,10,15),
        demon: new classObject(60,18,5,6,10),
        doombringer: new classObject(75,16,6,12,20),
        dwarf: new classObject(75,20,1,10,15),
        firebrand: new classObject(100,16,8,12,16),
        footballer: new classObject(60,20,6,10,25),
        freak: new classObject(75,18,10,26,30),
        heirofbreath: new classObject(80,16,6,8,20),
        holydiver: new classObject(50,18,6,12,14),
        neophyte: new classObject(80,18,5,10,15),
        nightcreeper: new classObject(75,20,10,12,12),
        ninja: new classObject(60,20,5,10,10),
        ruiner: new classObject(60,20,4,10,15),
        ultra: new classObject(75,18,8,8,16)
    },
    punishers: {
        anarchist: new classObject(90,17,3,10,20),
        assistant: new classObject(80,18,4,10,15),
        champion: new classObject(100,14,8,10,16),
        commander: new classObject(90,16,1,12,60),
        cyborg: new classObject(100,16,8,8,15),
        deusexmachina: new classObject(75,18,6,8,15),
        enforcer: new classObject(100,15,6,8,15),
        heretic: new classObject(90,15,12,12,16),
        icedagger: new classObject(100,16,6,6,12),
        lancer: new classObject(75,17,6,12,25),
        machinist: new classObject(100,15,8,8,12),
        maniac: new classObject(110,14,6,6,10),
        mutant: new classObject(75,16,12,16,30),
        panzermensch: new classObject(115,14,6,12,20),
        professionaldentist: new classObject(50,18,5,0,8),
        soldier: new classObject(100,16,8,10,15),
        timelord: new classObject(60,17,6,12,25)
    },
    barragers: {
        adventurer: new classObject(100,16,0,0,15),
        athlete: new classObject(115,14,4,8,12),
        callahan: new classObject(80,15,8,10,14),
        cultist: new classObject(90,16,1,10,12),
        darkheart: new classObject(100,16,10,15,15),
        deckard: new classObject(90,16,10,10,10),
        gravedigger: new classObject(80,16,0,6,12),
        gunsword: new classObject(90,16,0,4,10),
        hollow: new classObject(90,16,0,15,30),
        psionic: new classObject(100,16,8,10,15),
        reaper: new classObject(100,16,4,8,20),
        shotokan: new classObject(80,16,5,8,10),
        sunslammer: new classObject(100,16,1,20,30),
        survivalist: new classObject(100,16,0,6,6),
        swordfighter: new classObject(100,16,6,8,12),
        swordmaster: new classObject(100,16,12,12,15),
        tree: new classObject(75,16,15,20,20),
        vampire: new classObject(90,18,0,8,8),
        venomshank: new classObject(100,16,4,10,15),
    },
    miscelleaneous: {
        blackjack: new classObject(100,16,0,0,1),
        bro: new classObject(50,20,6,12,12),
        brosbro: new classObject(50,20,6,8,15),
        claymore: new classObject(100,16,0,15,15),
        correspondent: new classObject(40,15,5,20,20),
        dicekind: new classObject(80,16,1,1,8),
        doom: new classObject(80,16,0,1,12),
        hollis: new classObject(100,16,5,8,15),
        medic: new classObject(40,16,4,20,30),
        mixmaster: new classObject(25,13,1,10,60),
        nostalgia: new classObject(80,16,3,6,30),
        priest: new classObject(50,16,6,8,30),
        surgeon: new classObject(90,16,6,6,15),
        warlock: new classObject(80,17,2,6,10),
        witheredhandofevil: new classObject(75,16,4,15,20)
    }
};
var availableCategories = Object.keys(classTree)
var actualCategory = String(availableCategories[availableCategories.length * Math.random() | 0])
var availableClasses = Object.keys(classTree[actualCategory])
var lord = String(availableClasses[availableClasses.length * Math.random() | 0])
var actualClass = Object.values(classTree[actualCategory][lord])



function buttonPress(){
    userinput = document.getElementById('goog').value.toLowerCase().replaceAll(' ','').replaceAll("-","").replaceAll("'","").replaceAll(".","")
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
    document.getElementById("goog").value = "";
    // Now we set the values of the boxes
    let hack = Object.values(chosenclass);
    let hack2 = actualClass.slice();
    for (const attribute of classAttributes) {
        let currentElement = document.getElementById(attribute +(6-tries));
        currentElement.style.visibility = "visible";
        if (attribute == "CAT") {
            currentElement.innerHTML = classcategory.toUpperCase();
            if (classcategory == actualCategory) {
                currentElement.style.backgroundColor ="green"
            }
            else {
               currentElement.style.backgroundColor ="rgb(122, 0, 0)" 
            }
            continue;
        }
        let currentAttribute = hack.shift()
        let currentActualClassAttribute = hack2.shift()
        currentElement.innerHTML = currentAttribute;
        if (Number(currentAttribute) < currentActualClassAttribute) {
            currentElement.style.backgroundImage="url(upblack.png)"
            currentElement.style.backgroundRepeat = "round"
        }
        else if (Number(currentAttribute) > currentActualClassAttribute) {
            currentElement.style.backgroundImage="url(downblack.png)"
            currentElement.style.backgroundRepeat = "round"
        }
        else {
            currentElement.style.backgroundColor ="green"
        }
    }
    if (userinput == lord){
        endGame(true)
    }

    tries = tries -1;
    document.getElementById("tryCounter").innerHTML = "Tries remaining: " + tries;
    if (tries==0) {
        endGame(false);
        document.getElementById("tryCounter").innerHTML = "You have no more tries!";
    }
};

function endGame(state){
    document.getElementById("^_^").disabled = true;
    if (state){
        alert("Congrats! You have won! Refresh the page to play again.")
    }
    else {
        alert("You lost! The class was: "+lord+ "\nRefresh the page to play again.")
    }
};
