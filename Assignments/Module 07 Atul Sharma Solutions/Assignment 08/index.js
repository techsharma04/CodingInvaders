// let participants = prompt("Enter the name here separated by commas");
let participants = "Atul, Kapil, Raghu, Shama, Sunidhi, Anmol"
participants = participants.split(",");
 
let numArray = [];
let num = 0;

for(let part of participants)
{
do{
     num = Math.floor(Math.random() * participants.length)+1;
 
}while(numArray.includes(num)){
    numArray.push(num)
    console.log(`${part} ${num}`)
}
}








// //get the list of participants
// let parti = prompt("Enter the name of participants");
// console.log("Input string entered is: "+parti);

// //change to array
// let partiArray = parti.split(",");

// //array to store the distributed no
// let disNo =[];


// for(const participants of partiArray){
    
//     let assigned=0; //indicator to denote the particpant is assigned with no
    
//     while(assigned===0){
//         let found=0;
//         let distriNumber= Math.floor(Math.random()*(partiArray.length))+1;
        
//         //push the first value directly, if the length of no array is 0, it is 
//         //the first entry so directly assign value

//         //check whether the no is alloted
//         for(let i=0; i<disNo.length; i++){
//             if(disNo[i] === distriNumber){//check whether the no is already taken
//                 found =1;
//                 break;
                
//             }
//         }            
        
//         if(found ===0){//denoted the not found in array no(not assigned still)
//             disNo.push(distriNumber);
//             console.log(`${participants.trim()} - ${distriNumber}`);
//             assigned =1;

//         }        
//     }
        
// }
