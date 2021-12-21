"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfCoach_1 = require("./GolfCoach");
var CricketCoach_1 = require("./CricketCoach");
var myGolfCoach = new GolfCoach_1.GolfCoach;
var myCricketCoach = new CricketCoach_1.CricketCoach;
var theCoach = [];
theCoach.push(myGolfCoach);
theCoach.push(myCricketCoach);
for (var _i = 0, theCoach_1 = theCoach; _i < theCoach_1.length; _i++) {
    var tempCoach = theCoach_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
