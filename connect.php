<?php

	$servername = "localhost" ;
	$username   = "root" ;
	$password   = "star" ;
	$db ="student_faculty_activity_sheet";
	// Create connection
	$con = new mysqli($servername, $username, $password,$db);
	
	//Check connection
	if ($con -> connect_error)
	{
		die ("Connection failed : ".$con -> connect_error);
	}
	
	//echo "Connected sucessfully and data recorded in database<br>";
	
?>