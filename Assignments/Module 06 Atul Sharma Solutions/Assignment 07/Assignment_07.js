let login = prompt("Enter login here...!!!");
let pass = prompt("Enter password here..!!!");
if (login === "admin_425" && pass === "jvv0oj45tm") {
    alert("Success..");
} else{
    for (let i = 4; i >= 0; i--){
        if (i !== 0) {
            alert("Incorrect! Try again. " + i + " attempts left");
            login = prompt("Enter login here...!!!");
            pass = prompt("Enter password here..!!!");
        } else{
            alert("No attempts left. We have to block your account");
            break;
        }
    
    }
}



