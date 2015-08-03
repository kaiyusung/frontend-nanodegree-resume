var appendObjectProperties = function(object, location, formatter, propertyPlaceholder, valuePlaceholder) {
  for (var property in object) {
    var value = object[property];
    var data = formatter.replace(propertyPlaceholder, property)
                        .replace(valuePlaceholder, value);
    $(location).append(data);
  }
};

var appendListOfObjects = function(list, location, formatter, valuePlaceholder) {
  for (var key in list) {
    $(location).append(formatter.replace(valuePlaceholder, list[key]));
  }
};

var replaceData = function(data, formatter, dataPlaceholder) {
  dataPlaceholder = dataPlaceholder || '%data%';
  return formatter.replace(dataPlaceholder, data);
};




//var formattedName = HTMLheaderName.replace("%data%","Edward Kaiyu Sung");
//var formattedRole = HTMLheaderRole.replace("%data%", "Analytics Manager");

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


var bio = {
	"name": "Edward Kaiyu Sung",
	"role": "Marketing Analytics",
	"contacts": {
	"mobile": "415-823-4583",
	"email": "edward.kaiyu@gmail.com",
	"github": "https://github.com/kaiyusung",
	"location": "San Francisco, CA"
     },
	"picture": "images/fry.jpg",
	"message": "Hello! Welcome to my online resume!",
	"skills": ["Fixed Income Trading", "Analytics", "Python", "SQL"]
};

var formattedName =  HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.message);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
};

for (i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
};


var education = {
	"schools":[
		 {
		  "name": "Columbia University",
		  'location': 'New York, NY',
		  "degree": "Mathematics"},
		  {
		  	"name":"Keio University",
		  	"location":"Tokyo",
		  	"degree":"Systems Engineering"
		  }
	  ],
 	"onlineCourses": [
		  {
		  	"title": "JavaScript Syntax",
		  	"school": "Udacity",
		  	"dates": 2015,
		  	"url": "http://www.udacity.com"
		  }
  	]
  };

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolLocation);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
};

education.display();


var work = {
	"jobs":[
		{
		"employer":"DeNA",
		"title":"Marketing Analytics",
		"location": "San Francisco"
		},
		{
		"employer":"Goldman Sachs",
		"title":"USD Rates Trader",
		"location": "Tokyo"
		},
		{
		"employer":"Nomura Securities",
		"title":"Yen Rates Trader",
		"location": "Tokyo"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "(Un)tuple",
			"dates": "Ongoing - ",
			"description": "Amazing way to analysis events.",
			"url": "https://github.com/kaiyusung",
			"images": ""
		},
		{
			"title": "Online Portfolio",
			"dates": "July 2015",
			"description": "Online portfolio made for the Udacity course",
			"url": "https://github.com/kaiyusung",
			"images": ""
		}
	]
};



function locationizer(work_obj){
	var locationArray = [];

	for (var job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

function displayWork () {
	if(work.jobs.length > 0){
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
		}
	}
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton);

displayWork();

//pretty much everything in JavaScript is an Object!!!

//This is encapsulation.
projects.display = function() {
	for (i in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[i].images.length > 0){
			for (image in projects.projects[i].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);


