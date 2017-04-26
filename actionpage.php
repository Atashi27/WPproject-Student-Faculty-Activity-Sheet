
<?php
$ptitle=$_POST["ptitle"];
$projid=$_POST["projid"];
$fname=$_POST["fname"];
$sdate=$_POST["sdate"];
$edate=$_POST["edate"];
$noofstud=$_POST["noofstud"];
$demo='3';


$name1=$_POST["name1"];
$dept1=$_POST["dept1"];
$class1=$_POST["class1"];
$studentid1=$_POST["studentid1"];
$role1=$_POST["role1"];
$email1=$_POST["email1"];
$telno1=$_POST["telno1"];

$name2=$_POST["name2"];
$dept2=$_POST["dept2"];
$class2=$_POST["class2"];
$studentid2=$_POST["studentid2"];
$role2=$_POST["role2"];
$email2=$_POST["email2"];
$telno2=$_POST["telno2"];

$name3=$_POST["name3"];
$dept3=$_POST["dept3"];
$class3=$_POST["class3"];
$studentid3=$_POST["studentid3"];
$role3=$_POST["role3"];
$email3=$_POST["email3"];
$telno3=$_POST["telno3"];

$name4=$_POST["name4"];
$dept4=$_POST["dept4"];
$class4=$_POST["class4"];
$studentid4=$_POST["studentid4"];
$role4=$_POST["role4"];
$email4=$_POST["email4"];
$telno4=$_POST["telno4"];

$name5=$_POST["name5"];
$dept5=$_POST["dept5"];
$class5=$_POST["class5"];
$studentid5=$_POST["studentid5"];
$role5=$_POST["role5"];
$email5=$_POST["email5"];
$telno5=$_POST["telno5"];


include "connect.php";

$sql = "INSERT INTO project_details VALUES('$ptitle','$fname','$sdate','$edate','$noofstud','$demo')";
$sql1 = "INSERT INTO student_details VALUES('$name1','$dept1','$class1','$email1','$telno1','$studentid1')";
$sql2 = "INSERT INTO student_details VALUES('$name2','$dept2','$class2','$email2','$telno2','$studentid2')";
$sql3 = "INSERT INTO student_details VALUES('$name3','$dept3','$class3','$email3','$telno3','$studentid3')";
$sql4 = "INSERT INTO student_details VALUES('$name4','$dept4','$class4','$email4','$telno4','$studentid4')";
$sql5 = "INSERT INTO student_details VALUES('$name5','$dept5','$class5','$email5','$telno5','$studentid5')";
$sql6 = "INSERT INTO link_project_student VALUES('$projid','$studentid1','$role1')";
$sql7 = "INSERT INTO link_project_student VALUES('$projid','$studentid2','$role2')";
$sql8 = "INSERT INTO link_project_student VALUES('$projid','$studentid3','$role3')";
$sql9 = "INSERT INTO link_project_student VALUES('$projid','$studentid4','$role4')";
$sql10 = "INSERT INTO link_project_student VALUES('$projid','$studentid5','$role5')";
      
	$result = mysqli_query($con,$sql);
	$result1 = mysqli_query($con,$sql1);
	$result2 = mysqli_query($con,$sql2);
	$result3 = mysqli_query($con,$sql3);
	$result4 = mysqli_query($con,$sql4);
	$result5 = mysqli_query($con,$sql5);
	$result6 = mysqli_query($con,$sql6);
	$result7= mysqli_query($con,$sql7);
	$result8 = mysqli_query($con,$sql8);
	$result9 = mysqli_query($con,$sql9);
	$result10 = mysqli_query($con,$sql10);


?>
<html>

	<head lang="en-US">
		<title>SFAS-Successful</title>
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
	<blockquote>
	<fieldset>
	 	<legend><em>Add Activity:</em></legend>
	 	<blockquote id="a11">
	 	<br>
		<table align="center" border=0>
		<tr>
			<th>
				<h3>Adding new activity was successful!</h3>
			</th>
		</tr>
		<tr>
			<th>
			<button onclick="window.location.href='addactivity_jq.html'">Continue</button>
			</th>
		</tr>
		</table>
		<br>
		<br>
		<blockquote>
	</fieldset>
	</blockquote>
<footer><sub><em>Page created and maintained by Atashi Khatua</em></sub></footer> 
</body>
</html>


