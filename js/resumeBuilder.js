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
    "projects": [{
        "title": "Traffic Pattern Analysis",
        "dates": "2015",
        "description": 'Intercepting and examining daily traffic data and usage rates to detrmine optimal ' +
            'network capabilities.',
        "images": ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc7EWpTKu3N49ViH0hjGXbGAPuZjtX8G' +
            '-KeNQIiEEM3jCD7aapAQ',
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQksj2YMfvj3U4-yxrkZJogBaLSkX3mfR' +
            '9wYPjZ0ditoq2yEAIVqQ',
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMMukaROu6fNt1FwsHhu3_DPWohOvE9k' +
            'p9OcFWdSWcYKO_1MM46g',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQh77qBUQgw5Mx8NFM3DsCWYKX_2Wxe' +
            'miQs5HSqm63FB5UbKm'
        ]
    }, {
        "title": "Portfolio",
        "dates": "2015",
        "description": 'My online portfolio provides a way to reveal my credentials to the world. It allows ' +
            'packages the best evidence of my candidacy for employment such as my resume, ' +
            'design work, artwork, reports, lesson plans, transcripts, certifications, articles, ' +
            'letters, and more in a form easily accessible via the Internet. It is a good way to ' +
            'show the scope and quality of my experience and training, and to demonstrate my ' +
            'talent and my ability to produce high-quality work in Web Development.',
        "images": ['https://images.pexels.com/photos/48727/pexels-photo-48727.jpeg?h=350&auto=compress&cs=tinysrgb']
    }]
};

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


//internationalize button

$("#main").append(internationalizeButton);


//internationalize name-usa funcion en helper.js-todo hardcoded -un horror :)
function inName(name) {
    console.log(name)
    var firstLast = name.trim().split(" ");
    console.log(firstLast)
    firstLast[0] = firstLast[0][0].toUpperCase()+firstLast[0].slice(1).toLowerCase();
    firstLast[1] = firstLast[1].toUpperCase();
    return firstLast[0]+" "+firstLast[1];
}

//projects.display function

projects.display = function() {
    var data = '%data%';

    for (var i = 0; i < projects.projects.length; i++) {
        // create new div for work experience
        $("#projects").append(HTMLprojectStart);

        var formattedProjTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        $(".project-entry:last").append(formattedProjTitle);

        var formattedProjDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjDates);

        var formattedProjDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
        $(".project-entry:last").append(formattedProjDescription);

        if (projects.projects[i].images.length > 0) {
            for (var p = 0; p < projects.projects[i].images.length; p++) {
                var formattedProjImage = HTMLprojectImage.replace(data, projects.projects[i].images[p]);
                $(".project-entry:last").append(formattedProjImage);
            }
        }
    }
};

//...y llamo la funcion
projects.display();

