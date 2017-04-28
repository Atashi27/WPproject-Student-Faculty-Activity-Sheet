# WPproject-Student-Faculty-Activity-Sheet
Student Faculty Activity Sheet is a web interface developed to manage college level projects and activities.The basic idea behind this application is to manage student activity in Don Bosco Institute Of Technology.
The home page is SFAShome.html but the main form is in Add Activity tab i.e. addactivity_jq.html (which is validated using jQuery file externaljquery.js which in turn uses files jquery.js and jquery.validate.js  which are offline files from jquery.com and jqueryvalidation.org respectively) and addactivity_js.html (which is validated by javascript using myjs.js file).
The files connect.php involves to establish connectivity with the database. The file actionpage.php enters the data in the database and the files responsepage.php involves fetching data from the database and displaying it in tabular form.
The file student_faculty_activity_sheet is a sql file of the database having three tables project_details, student_details and link_project_student.
Rest of the pages are yet incomplete.
