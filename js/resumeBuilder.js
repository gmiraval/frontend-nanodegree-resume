/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*  $("#main").append("Guillermo Miravalles"); */
 
/*  var firstname = "Guillermo";
 var age = 42;
 
 console.log(firstname); */
 
/*  var firstname = "Guillermo";
 var awesomeThoughts = "I am " + firstname + " and I am AWESOME!";
 console.log(awesomeThoughts);
 
 var funThoughts = awesomeThoughts.replace("AWESOME!","FUN");
 $("#main").append(funThoughts); */
 
 
 //var formattedName = HTMLheaderName.replace("%data%","Guillermo Miravalles");
 var formattedRole = HTMLheaderRole.replace("%data%","Engineer");
 


 
 var bio = {
	"name": "Guillermo Miravalles",
	"role":	"Engineer",
	"contacts": {
		
		"mobile" : "+54 9 11 21801208",
		"email" : "miravallesg@gmail.com",
		"github":"gmiraval",
		"twitter":"@gmiraval",
		"location" : "BA"
	},
	
	"welcomeMsg" : " Bienvenidos a mi pagina!",	 
	"skills" : [
		"HTML5", "CSS", "JavaScript", "Adobe Creative Suite"
		],
	"bioPic" : "images/Bart.jpg"
 };

var education = {
	"schools" : [
		{
			"name": "enet 1",
			"city":"posadas",
			"degree":"secundario",
			"majors":"none",
			"dates":1993,
			"url":"http://www.epet1.edu.ar/"
		},
				{
			"name": "UNLP",
			"city":"La plata",
			"degree":"ing electronica",
			"majors":"Telecom",
			"dates":1999,
			"url":"https://www.ing.unlp.edu.ar/"
		}		
	],
	"onlineCourses" : [
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates":2014,
			"url":"https://classroom.udacity.com/courses/ud804"
		}
	]
}
  
var work = {
	"jobs": [
	{
		"employer":"planet express",
		"title": "delivery boy",
		"location": "Nashville, TN",
		"dates": "jan 3000 - future",
		"description": "reparto de papas"
	},
		{
		"employer":"tintoreria tito",
		"title": "planchador",
		"location": "Seattle, WA",
		"dates": "jan 1998 - dec 31, 1999",
		"description": "alisado de telas"
	}
	]
};

var projects = {
	"projects" : [
	{
		"title": "Sample Project 1",
		"dates": "2014",
		"description": "zarazas sdffsdf detritus.",
		"images" : [
		"https://en.wikipedia.org/wiki/Bart_Simpson#/media/File:Bart_Simpson_200px.png",
		"http://bartsimpsonpictures.squarelogic.net/bart-simpson-01.gif"
		
		]		
	}
	]
}

//imprimo



 $("#header").append(HTMLheaderName.replace("%data%",bio.name));
 $("#header").append(HTMLheaderRole.replace("%data%",bio.role));
 

$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));

// si hay skills imprimo-ToDo: meter un loop

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	//$("#skills").append(HTMLskills.replace("%data%", bio.skills.join('\t')));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
}

function displaywork ()
{
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);;
	
}

}

//llamo a la funcion
displaywork();


//funcion locationer
function locationizer(work_obj) {
  var a = []; // We create an empty array;
  for (var item in work_obj.jobs) { // We want to go through all jobs we have had;
    a.push(work_obj.jobs[item].location); // We collect "location" for each job and add it to the array;
  }
  return a; // Our function returns the value of the array; alternatively, we could use console.log to print the array in the console
}

//llamo a la funcion y lo mando a consola

console.log(locationizer(work));
