import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";
import { CricketCoach } from "./CricketCoach";

let myGolfCoach = new GolfCoach;
let myCricketCoach = new CricketCoach;

let theCoach: Coach[] = [];
theCoach.push(myGolfCoach);
theCoach.push(myCricketCoach);

for(let tempCoach of theCoach){
    console.log(tempCoach.getDailyWorkout());
}