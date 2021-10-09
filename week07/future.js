var job = ["Programmer","Animator","Designer","Engineer"];
var city = ["Dallas","Austin","San Antonio","Houston"];
var husband = ["Alex","Joshua","Justin","Adrien"];
var numKids = [0,4,2,3];

var rando = Math.floor(Math.random() * 4)

function fortune(job,city,husband,numKids) {
document.write("You will be a " + job + " in " + city + ", and married to " + husband + " with " + numKids + " kids.");
}

fortune(job[rando],city[rando],husband[rando],numKids[rando])
