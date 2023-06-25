let login = prompt("Enter your login here...!!!");
if (login.includes("=")) {
    console.log(`This symbol = is forbidden.`);
} else if (login.includes("?")) {
    console.log(`This symbol ? is forbidden.`);
} else if (login.includes("*")) {
    console.log(`This symbol * is forbidden.`);
} else if (login.includes("^")) {
    console.log(`This symbol ^ is forbidden.`);
} else if (login.includes("$")) {
    console.log(`This symbol $ is forbidden.`);
} else if (login.includes("№")) {
    console.log(`This symbol № is forbidden.`);
} else if (login.includes("@")) {
    console.log(`This symbol @ is forbidden.`);
} else if (login.includes(",")) {
    console.log(`This symbol , is forbidden.`);
} else {
    console.log("Correct");
}


