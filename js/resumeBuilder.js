/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var awesomeThoughts = "I am Jon Hall and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
console.log(awesomeThoughts);
*/


// var formattedName = HTMLheaderName.replace("%data%", "Jonathan Hall");
// var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer/Game Designer");

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);


var bio = {
	"name": "Jonathan Hall",
	"role": "Software Engineer/Game Designer",
	"contacts": {
		"mobile": "860-753-0847",
		"email": "hall.r.jonathan@gmail.com",
	},
	"welcomeMessage": "Hello, I'm Jonathan Hall and welcome to my Portfolio",
	"skills": ["Design", "Programming", "Critical Thinking"],
	"bioPic": "images/fry.jpg"
};

// Adding a javascript object via dot notation
var workInfo = {};

workInfo.position = "Senior Software Support Engineer";
workInfo.employer = "Square 9 Softworks";
workInfo.years = 2;
workInfo.locCity = "New Haven";
workInfo.locState = "CT";

// Adding a javascript object via bracket notation
var educationInfo = {};

educationInfo["lastSchool"] = "New England Institue of Technology";
educationInfo["degree"] = "Game Development and Simulation Programming";
educationInfo["yearsAttended"] = "2009 - 2012";
educationInfo["cityLocation"] = "Warwick";
educationInfo["stateLocation"] = "RI";

// needs to be fixed stil.
HTMLbioPic.src = bio.bioPic;

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

$(".biopic").append(HTMLbioPic.src = bio.bioPic);

$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLworkEmployer.replace("%data%", workInfo.employer));
$("#header").append(HTMLworkTitle.replace("%data%", workInfo.position));
$("#header").append(HTMLworkDates.replace("%data%", workInfo.years));
$("#header").append(HTMLschoolName.replace("%data%", educationInfo["lastSchool"]));
$("#header").append(HTMLschoolDegree.replace("%data%", educationInfo["degree"]));