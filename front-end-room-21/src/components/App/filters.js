/*
 For text filters, you must set the default value to "any",
 for positive integer filters you must set it to 0 
 Contact printerfissh693@gmail.com if you want to use "any" as data or want another filter type
*/

const region = [
    { text: "Select a region", value: "any" },
    { text: "West Midlands", value: "West%Midlands" },
    { text: "East Midlands", value: "East%Midlands" },
    { text: "Greater London", value: "Greater%London" },
    { text: "North East", value: "North%East" },
    { text: "North West", value: "North%West" },
    { text: "South East", value: "South%East" },
    { text: "South West", value: "South%West" },
    { text: "East of England", value: "East%of%England" },
    { text: "Yorkshire and the Humber", value: "Yorkshire" },
  ];
  
  const bootcamp = [
    { text: "Select a bootcamp", value: 0 },
    { text: "Cohort 1", value: 1 },
    { text: "Cohort 2", value: 2 },
    { text: "Cohort 3", value: 3 },
    { text: "Cohort 4", value: 4 },
    { text: "Cohort 5", value: 5 },
    { text: "Cohort 6", value: 6 },
    { text: "Cohort 7", value: 7 },
    { text: "Cohort 8", value: 8 },
    { text: "Cohort 9", value: 9 },
    { text: "Cohort 10", value: 10 },
    { text: "Cohort 11", value: 11 },
    { text: "Cohort 12", value: 12 },
  ];

  const jobTitle = [
    {text: 'Select a job title', value: "any"},
    {text: 'Bootcamper', value: 'bootcamper'},
    {text: 'Front-end Developer', value: 'frontend'},
    {text: 'Back-end Developer', value: 'backend'},
    {text: 'Full Stack Developer', value: 'fullstack'},
    {text: 'UI/UX', value: 'uiux'},
    {text: 'Coach', value: 'coach'},
    {text: 'DevOps', value: 'devops'},
    {text: 'Director', value: 'director'}
  ]

  export const filters = [{category: 'region', data: region}, {category: 'Bootcampnumber', data: bootcamp}];