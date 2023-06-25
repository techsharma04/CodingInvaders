let character = prompt("Enter character name here...!!!");
do{
    if (character === "Peter Parker") {
        alert("Spider-man");
        character = prompt("Enter character name here...!!!");
    } else if (character === "fiona") {
        alert("Shrek");
        character = prompt("Enter character name here...!!!");
    } else if (character === "Jack Sparrow") {
        alert("The Pirates of the Caribbean");
        character = prompt("Enter character name here...!!!");
    } else if (character === "Master Shifu") {
        alert("Kung Fu Panda");
        character = prompt("Enter character name here...!!!");
    } else {
        alert("I don’t know him/her yet");
        character = prompt("Enter character name here...!!!");
    }
}
    while (character !== "0")




