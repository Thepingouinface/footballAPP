export function scoreTeam(team1, team2){
    if (team1 && team2 !== "") {
        return `${team1} : ${team2}`
    } else{
        return `- : -` 
    }
}

