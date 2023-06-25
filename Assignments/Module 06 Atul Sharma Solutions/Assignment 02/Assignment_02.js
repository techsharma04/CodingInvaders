let feedback = prompt("Write your feedback here..!!!")
if (feedback.length >= 30){
    console.log("We really appreciate your feedback! Here is your 30% discount");
}else if(feedback.length > 10 && feedback.length < 30){
    console.log("Thanks! Here is your 15% discount");
} else{
    console.log("Hope to see you again!");
}