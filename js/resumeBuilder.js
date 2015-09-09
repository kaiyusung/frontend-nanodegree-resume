var bio = {
	"name": "Edward Kaiyu Sung",
	"role": "Head, Analytics and User Acquisition",
	"contacts": {
		"mobile": "(+81)50-5809-5466",
		"email": "edward.kaiyu@gmail.com",
		"github": "https://github.com/kaiyusung",
		"location": "San Francisco, CA"
	},
	"picture": "images/eddie.jpg",
	"message": "Hello! Welcome to my online resume!",
	"skills": ["Fixed Income Trading", "Analytics", "Python", "SQL"]
};

bio.display = function(){
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

	$("#topContacts").append(formattedContactInfo);
	$("#footerContacts").append(formattedContactInfo);

	if (bio.skills.length) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
};

bio.display();

var education = {
	"schools":[
		{
			"name": "Columbia University",
			"location": "New York, NY",
			"degree": "Mathematics"},
		{
			"name":"Keio University",
			"location":"Tokyo",
			"degree":"Systems Engineering"
		}
	],
 	"onlineCourses": [
		{
			"title": "Front End Programming",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		}
	]
};

education.display = function() {
	if(education.schools.length || education.onlineCourses.length) {
		for(var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolLocation);
		}

		if(education.onlineCourses.length) {
			$("#education").append(HTMLonlineClasses);
			for(var i = 0; i < education.onlineCourses.length; i++) {
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
			"title":"Analytics and User Acquisition",
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

work.display = function() {
	if(work.jobs.length){
		$("#workExperience").append(HTMLworkStart);

		for(var i = 0; i < work.jobs.length; i++){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
		}
	}
};

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton);

work.display();

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

		if (projects.projects[i].images.length){
			for (image in projects.projects[i].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

$("#map-div").append(googleMap);


