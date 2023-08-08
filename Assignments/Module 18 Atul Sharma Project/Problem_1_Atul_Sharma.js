const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

let result = [0, 0, 1];
let winner = {};

let findWinner = (comp, res) => {
    for (let i in res) {
        if (res[i] === 1) {
            if (winner.hasOwnProperty(comp[i][0])) {
                winner[comp[i][0]] += 3;
            } else {
                winner[comp[i][0]] = 3;
            }

        } else if (res[i] === 0) {
            if (winner.hasOwnProperty(comp[i][1])) {
                winner[comp[i][1]] += 3;
            } else {
                winner[comp[i][1]] = 3;
            }
        }
    }
    let values = Object.values(winner);
    let max = Math.max(...values);
    for (let items in winner) {
        if (winner[items] === max) {
            console.log(items);
        };
    }

}

findWinner(competitions, result);




// SPACE COMPLEXITY:
// The space complexity of the solution is primarily determined by the space used to store the points object. This object(winner) stores the points for each team.
// In the worst case, there can be 'n' teams, where 'n' is the number of competitions. Therefore, the space complexity is O(n), where 'n' is the number of teams.


// TIME COMPLEXITY:
// The first loop iterates through the competitions and results arrays, which has a time complexity of O(n), where 'n' is the number of competitions.
// The second loop iterates through the points object to find the team with the highest points. In the worst case, there are 'n' teams, so the time complexity of this loop is O(n).
// Combining both loops, the overall time complexity of the solution is O(n + n) = O(n), where 'n' is the number of competitions.


// The space complexity of O(n) and a time complexity of O(n), where 'n' is the number of competitions or teams.