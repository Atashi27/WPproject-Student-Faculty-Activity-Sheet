
<html>

	<head lang="en-US">
		<title>SFAS-Response</title>
		<meta charset="UTF-8">
		<meta name="description" content="Activity list">
		<meta name="keywords" content="DBIT,Faculty,Student,Project">
		<meta name="author" content="Atashi">
		<!-- <meta http-equiv="refresh" content="60">  -->
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<link rel="icon" type="image/png" href="logo.png"/>
	</head>

	
<body>
	<div id="a1">
	<table align="center" border=0 style="width:70%">
	<tr>	
		<th><img src="images/logo.png" align="right" alt="DBIT LOGO" width="150" height="150"></th>
		<th>
			<h1>DON BOSCO INSTITUTE OF TECHNOLOGY</h1>
			<h2>DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
			<h3>STUDENT FACULTY ACTIVITY SHEET</h3>
		</th>
	</tr>
	</table>
	</div>
<hr>
	<ul id="m01">
	  <li id="m01"><table><td><img src="images/home_icon.jpg" align="right" alt="Home LOGO" width="50" height="50"></td>
		<td><a href="SFAShome.html">Home</a></td></table></li>
	  <li id="m01"><table><td><img src="images/add_icon.jpg" align="right" alt="Add LOGO" width="50" height="50"></td>
		<td><a href="addactivity_jq.html">Add Activity</a></td></table></li>
	  <li id="m01"><table><td><img src="images/search_icon.jpg" align="right" alt="Search LOGO" width="50" height="50"></td>
		<td><a href="search.html">Search Team</a></td></table></li>
	  <li id="m01"><table><td><img src="images/list_all_icon.jpg" align="right" alt="List LOGO" width="50" height="50"></td>
		<td><a href="allactivity.html">All Activity list</a></td></table></li>
	</ul>
<hr>
</body>
</html>

<?php

include "connect.php";
echo "<table border=2 align=center><tr><th>Project Title</th><th>Project ID</th><th>Faculty name</th><th>Start date</th><th>End date</th><th>No. of students</th><th>Student name</th><th>Department</th><th>Class</th><th>Student ID</th><th>Role</th><th>Email-ID</th><th>Contact</th></tr>";
$sql = "select p.title,p.project_id,p.faculty_name,p.start_date,p.end_date,p.no_of_students,s.name,s.dept,s.class,s.student_id,l.role,s.email_id,s.contact from project_details p, student_details s, link_project_student l where l.project_id=p.project_id and l.student_id=s.student_id";

$result = $con->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) 
    {
        echo "<tr><td>". $row["title"]."</td><td>".$row["project_id"]."</td><td>".$row["faculty_name"]."</td><td>".$row["start_date"]."</td><td>".$row["end_date"]."</td><td>".$row["no_of_students"]."</td><td>".$row["name"]."</td><td>".$row["dept"]."</td><td>".$row["class"]."</td><td>".$row["student_id"]."</td><td>".$row["role"]."</td><td>".$row["email_id"]."</td><td>".$row["contact"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$con->close();

?>