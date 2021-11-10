//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

function moreAboutHome(address, distanceFromTown, hasNeighbours) {
    let str = typeof(address) + typeof(distanceFromTown) + typeof(hasNeighbours);
    return str;
}


//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    if (typeof(parents) === "string" && typeof(noOfSiblings) === "number" && typeof(isNuclearFamily) === "boolean") {
        return true;
    }
    return false;
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageInText, ageInNumber) {
    if (isNaN(ageInText)) {
        return ageInText;
    }
    if (isNaN(ageInNumber)) {
        return ageInNumber;
    }
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) {
    var sweetsLeft = (totalNoOfSweets - sweetsConsumedByKaren - (sweetsConsumedInNMeters * metersToTravel)) / 2;
    if (isNaN(sweetsLeft)) {
        return "No sweets for Karen's friend";
    }
    return sweetsLeft;
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

function convertToCelsius(f) {
    if (typeof(f) === "string" || typeof(f) === "undefined" || typeof(f) === "object") {
        return "Technical Error!";
    }
    var cel = ((f - 32) * 5) / 9;
    return cel;
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

function aDifficultChoice(choice) {
    if (choice === 1) {
        return "Take her daughter to a doctor";
    } else if (choice === 2) {
        return "Talk to her husband about it";
    } else if (choice === 3) {
        return "Counsel her daughter herself";
    } else if (choice === 4) {
        return "Lock her daughter in her room";
    } else if (choice === -1) {
        return "Break down and give up all hope";
    } else if (typeof(choice) === "undefined") {
        return "Wasn't able to decide";
    } else if (choice === "I give up") {
        return "Refused to do anything for Karen";
    }
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy

function consoleKaren(strategies) {
    var st = "";
    for (const i of strategies) {
        st = st + " " + i;
    }
    return st.length;
}