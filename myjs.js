function validateform()
{  
	var letters=/^[A-Za-z]+$/;
	var numletter=/^[0-9A-Za-z]+$/;
	var num=/^[0-9]+$/;
	var phoneno=/^\d{10}$/;
	var nums=/^[0-9/]+$/;
	var emailvalid =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	var faculty=document.myform.fname.value;
	var title=document.myform.ptitle.value; 

	var startdate=document.myform.sdate.value;
	var enddate=document.myform.edate.value;
	var noofstd=document.myform.noofstud.value;
	
	var name1=document.myform.name1.value;
	var name2=document.myform.name2.value;
	var name3=document.myform.name3.value;
	var name4=document.myform.name4.value;
	var name5=document.myform.name5.value;

	var class1=document.myform.class1.value;
	var class2=document.myform.class2.value;
	var class3=document.myform.class3.value;
	var class4=document.myform.class4.value;
	var class5=document.myform.class5.value;

	var dept1=document.myform.dept1.value;
	var dept2=document.myform.dept2.value;
	var dept3=document.myform.dept3.value;
	var dept4=document.myform.dept4.value;
	var dept5=document.myform.dept5.value;
	
	var role1=document.myform.role1.value;
	var role2=document.myform.role2.value;	
	var role3=document.myform.role3.value;	
	var role4=document.myform.role4.value;	
	var role5=document.myform.role5.value;
	
	var num1=document.myform.telno1.value;
	var num2=document.myform.telno2.value;
	var num3=document.myform.telno3.value;
	var num4=document.myform.telno4.value;
	var num5=document.myform.telno5.value;
	
	var em1=document.myform.email1.value;  
	var em2=document.myform.email2.value;  
	var em3=document.myform.email3.value;  
	var em4=document.myform.email4.value;  
	var em5=document.myform.email5.value;  

	var start=new Date(startdate);
	var end=new Date(enddate);   
	
	var sd=start.getTime();
	var ed=end.getTime();
	






	

	if (faculty=="notallowed") 
		{
			alert("Faculty name is compulsory");
			return false;
        	}   
	/*Title cannot be empty*/
	if (title==null || title=="")
		{  
		  alert("Title field is compulsory");
		  return false;  
		}
	/* It is assumed that title field can contain numbers and alphabets only*/
	if (title.match(numletter))
		{
		}
	else
		{
		  alert("Title can contain only alphabets and numbers"); 
		  return false;
		}
	if(startdate==""||startdate==null)
		{
		   alert("Start date is compulsory");
		   return false;
		}
	/*
	if (startdate.match(nums))
		{
		}
	else
		{
		  alert("Start date can contain only numbers"); 
		  return false;
		}
	*/
	if(enddate==""||enddate==null)
		{
		   alert("End date is compulsory");
		   return false;
		}
	/*
	if (enddate.match(nums))
		{
		}
	else
		{
		  alert("End date should contain only numbers"); 
		  return false;
		}
	*/
	/* Validates end date to be after start date only */
	if(sd>ed)
		{
		   alert("Start date cannot be after the end date");
		   return false;
		}

	/*Checking if no of students is numeric */
	if (noofstd==null || noofstd=="")
		{  
		  alert("No of students field is compulsory");  
		  return false;  
		}
	if (noofstd.match(num))
		{
		}
	else
		{
		  alert("No of students is not numeric"); 
		  return false;
		}






	//1
	/*Name cannot be empty*/
	if(name1==null || name1=="")
		{  
		  alert("Name field is compulsory");  
		  return false;  
		}


	/* It is assumed that name field can contain alphabets only*/
	if(name1.match(letters))
		{   
		}
	else
		{
		  alert("Name should contain only alphabets"); 
		  return false;
		}

	if (dept1=="notallowed") 
		{
			alert("Department field is compulsory");
			return false;
        	}
	if (class1=="notallowed") 
		{
			alert("Class field is compulsory");
			return false;
        	}
	/*Role cannot be empty*/
	if(role1==null || role1=="")
		{  
		  alert("Role field is compulsory");  
		  return false;  
		}


	/* It is assumed that role field can contain alphabets only*/
	if (role1.match(letters))
		{
		}
	else
		{
		  alert("Role should contain only alphabets"); 
		  return false;
		}
	if(em1==null || em1=="")
		{  
		  alert("Email field is compulsory");  
		  return false;  
		}

	/*Email Validation*/
	if (em1.match(emailvalid))
		{  
		}
	else
		{
	   	  alert("Please enter a valid e-mail address");  
	      	  return false;  
	        }

	if(num1==null || num1=="")
		{  
		  alert("Contact field is compulsory");  
		  return false;  
		}

	/*Number validation*/ 
	if (isNaN(num1))
		{  
		  alert("Contact should be Numeric")  
		  return false;  
		}
	if (num1.match(phoneno))
		{  
		}
	else
		{
	   	  alert("Contact number does not contain 10 digits");  
	      return false;  
	    }

	




	//2
	/*Name cannot be empty*/
	if(name2==null || name2=="")
		{  
		  alert("Name field is compulsory");  
		  return false;  
		}


	/* It is assumed that name field can contain alphabets only*/
	if(name2.match(letters))
		{   
		}
	else
		{
		  alert("Name should contain only alphabets"); 
		  return false;
		}

	if (dept2=="notallowed") 
		{
			alert("Department field is compulsory");
			return false;
        	}
	if (class2=="notallowed") 
		{
			alert("Class field is compulsory");
			return false;
        	}
	/*Role cannot be empty*/
	if(role2==null || role2=="")
		{  
		  alert("Role field is compulsory");  
		  return false;  
		}


	/* It is assumed that role field can contain alphabets only*/
	if (role2.match(letters))
		{
		}
	else
		{
		  alert("Role should contain only alphabets"); 
		  return false;
		}
	if(em2==null || em2=="")
		{  
		  alert("Email field is compulsory");  
		  return false;  
		}

	/*Email Validation*/
	if (em2.match(emailvalid))
		{  
		}
	else
		{
	   	  alert("Please enter a valid e-mail address");  
	      	  return false;  
	        }

	if(num2==null || num2=="")
		{  
		  alert("Contact field is compulsory");  
		  return false;  
		}

	/*Number validation*/ 
	if (isNaN(num2))
		{  
		  alert("Contact should be Numeric")  
		  return false;  
		}	
	if (num2.match(phoneno))
		{  
		}
	else
		{
	   	  alert("Contact number does not contain 10 digits");  
	      return false;  
	    }

	



	//3
		/*Name cannot be empty*/
	if(name3==null || name3=="")
		{  
		  alert("Name field is compulsory");  
		  return false;  
		}


	/* It is assumed that name field can contain alphabets only*/
	if(name3.match(letters))
		{   
		}
	else
		{
		  alert("Name should contain only alphabets"); 
		  return false;
		}

	if (dept3=="notallowed") 
		{
			alert("Department field is compulsory");
			return false;
        	}
	if (class3=="notallowed") 
		{
			alert("Class field is compulsory");
			return false;
        	}
	/*Role cannot be empty*/
	if(role3==null || role3=="")
		{  
		  alert("Role field is compulsory");  
		  return false;  
		}


	/* It is assumed that role field can contain alphabets only*/
	if (role3.match(letters))
		{
		}
	else
		{
		  alert("Role should contain only alphabets"); 
		  return false;
		}
	if(em3==null || em3=="")
		{  
		  alert("Email field is compulsory");  
		  return false;  
		}

	/*Email Validation*/
	if (em3.match(emailvalid))
		{  
		}
	else
		{
	   	  alert("Please enter a valid e-mail address");  
	      	  return false;  
	        }

	if(num3==null || num3=="")
		{  
		  alert("Contact field is compulsory");  
		  return false;  
		}

	/*Number validation*/ 
	if (isNaN(num3))
		{  
		  alert("Contact should be Numeric")  
		  return false;  
		}
	if (num3.match(phoneno))
		{  
		}
	else
		{
	   	  alert("Contact number does not contain 10 digits");  
	      return false;  
	    }








	//4
		/*Name cannot be empty*/
	if(name4==null || name4=="")
		{  
		  alert("Name field is compulsory");  
		  return false;  
		}


	/* It is assumed that name field can contain alphabets only*/
	if(name4.match(letters))
		{   
		}
	else
		{
		  alert("Name should contain only alphabets"); 
		  return false;
		}

	if (dept4=="notallowed") 
		{
			alert("Department field is compulsory");
			return false;
        	}
	if (class4=="notallowed") 
		{
			alert("Class field is compulsory");
			return false;
        	}
	/*Role cannot be empty*/
	if(role4==null || role4=="")
		{  
		  alert("Role field is compulsory");  
		  return false;  
		}


	/* It is assumed that role field can contain alphabets only*/
	if (role4.match(letters))
		{
		}
	else
		{
		  alert("Role should contain only alphabets"); 
		  return false;
		}
	if(em4==null || em4=="")
		{  
		  alert("Email field is compulsory");  
		  return false;  
		}

	/*Email Validation*/
	if (em4.match(emailvalid))
		{  
		}
	else
		{
	   	  alert("Please enter a valid e-mail address");  
	      	  return false;  
	        }

	if(num4==null || num4=="")
		{  
		  alert("Contact field is compulsory");  
		  return false;  
		}

	/*Number validation*/ 
	if (isNaN(num4))
		{  
		  alert("Contact should be Numeric")  
		  return false;  
		}
	if (num4.match(phoneno))
		{  
		}
	else
		{
	   	  alert("Contact number does not contain 10 digits");  
	      return false;  
	    }







	//5
		/*Name cannot be empty*/
	if(name5==null || name5=="")
		{  
		  alert("Name field is compulsory");  
		  return false;  
		}


	/* It is assumed that name field can contain alphabets only*/
	if(name5.match(letters))
		{   
		}
	else
		{
		  alert("Name should contain only alphabets"); 
		  return false;
		}

	if (dept5=="notallowed") 
		{
			alert("Department field is compulsory");
			return false;
        	}
	if (class5=="notallowed") 
		{
			alert("Class field is compulsory");
			return false;
        	}
	/*Role cannot be empty*/
	if(role5==null || role5=="")
		{  
		  alert("Role field is compulsory");  
		  return false;  
		}


	/* It is assumed that role field can contain alphabets only*/
	if (role5.match(letters))
		{
		}
	else
		{
		  alert("Role should contain only alphabets"); 
		  return false;
		}
	if(em5==null || em5=="")
		{  
		  alert("Email field is compulsory");  
		  return false;  
		}

	/*Email Validation*/
	if (em5.match(emailvalid))
		{  
		}
	else
		{
	   	  alert("Please enter a valid e-mail address");  
	      	  return false;  
	        }

	if(num5==null || num5=="")
		{  
		  alert("Contact field is compulsory");  
		  return false;  
		}

	/*Number validation*/ 
	if (isNaN(num5))
		{  
		  alert("Contact should be Numeric")  
		  return false;  
		}
	if (num5.match(phoneno))
		{  
		}
	else
		{
	   	  alert("Contact number does not contain 10 digits");  
	      return false;  
	    }




	
}
/*
function getDuration()
{  	  
		var startdate=document.myform.sdate.value;
		var enddate=document.myform.edate.value;
		var startd=getDate(startdate);
		var endd=getDate(enddate);
		var x= startd-endd;
        document.getElementById("abcd").value = x;		
}
*/
