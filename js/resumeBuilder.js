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
 
 
 var formattedName = HTMLheaderName.replace("%data%","Guillermo Miravalles");
 var formattedRole = HTMLheaderRole.replace("%data%","Engineer");
 
 $("#header").append(formattedName);
 $("#header").append(formattedRole);
 
 
 

 