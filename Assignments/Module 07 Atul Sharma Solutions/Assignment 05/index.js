const participants = [

    "John M.", "David H.", "Rajesh A.",

    "Sunita S.", "Mohammed A.", "Ram J.",

    "Anita R.", "Suresh R.", "Sara M.",

    "Nick C.", "Lakshmi N."
]
//dividing participants into 2 teams

//participants


//create 2 teams
team1 =[];
team2 = [];

for(const parti of participants){
    teams = Math.floor(Math.random()*2) +1;
    if(teams ===1){
        team1.push(parti);
    }else{
        team2.push(parti);
    }

}

//get the difference of both teams length
let lenArr= Math.abs(team1.length-team2.length);

//if the difference is greater than 1, loop through until the participants
//difference in each teams is not greater than 1
if(lenArr>2){
    while(Math.abs(team1.length-team2.length)>1){
        if(team1.length>team2.length){
            team2.push(team1.pop());
        }else{
            team1.push(team2.pop());
        }

    }
}
console.log("Team 1: "+team1);
console.log("Team 2: "+team2);

