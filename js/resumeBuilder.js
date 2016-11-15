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
 
 
 // var formattedName = HTMLheaderName.replace("%data%","Guillermo Miravalles");
 // var formattedRole = HTMLheaderRole.replace("%data%","Engineer");
 
/*  $("#header").append(formattedName);
 $("#header").append(formattedRole); */
 
 // $("#header").prepend(formattedRole);
 // $("#header").prepend(formattedName);
 
 var bio = {
	"name": "Guillermo",
	"role":	"eng",
	"contacts": {
		
		"mobile": "+54 9 11 21801208",
		"email":"miravallesg@gmail.com",
		"github":"gmiraval",
		"twitter":"@gmiraval",
		"location" : "BA"
	},
	
	"welcome message" : " Bienvenidos a mi pagina!",	 
	"skills" : ["grosso", "genio", "capo"],
	"bioPic" : "images/Bart.jpg"
 };
 
// $("#main").append(bio.name);
// $("#main").append(bio["role"]);

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
		"dates": "jan 3000 - future",
		"description": "reparto de papas"
	},
		{
		"employer":"tintoreria tito",
		"title": "planchador",
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