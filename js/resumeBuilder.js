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

var workInfo = {
	"currentJob": {
		"position": "Senior Support Engineer",
		"locCity": "New Haven",
		"locState": "CT",
		"yearsWorked": 2
	},
};

var educationInfo = {
	

};

HTMLbioPic.src = bio.bioPic;

// changed me - NOW

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

$("#header").append(HTMLbioPic.src = bio.bioPic);

$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));



//$("#header").append(HTMLcontactGeneric.replace("%data%", bio.contacts));