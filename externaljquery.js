$(document).ready(function(){
	$("form[name='myform']").validate({

		rules:{
			fname:"required",
			ptitle:
				{
				rangelength: [1,50],
				required:true,
				alphabets:true
				},
			sdate:
				{
				required:true,
				date:true
				},
			edate:
				{
				required:true,
				date:true
				},
			noofstud:
				{
				digits:true,
				required:true,
				range: [1, 20]
				},
			name1:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			name2:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			name3:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			name4:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			name5:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			role1:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			role2:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			role3:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			role4:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			role5:
				{
				rangelength: [1,30],
				required:true,
				alphabets:true
				},
			dept1:"required",
			dept2:"required",
			dept3:"required",
			dept4:"required",
			dept5:"required",
			class1:"required",
			class2:"required",
			class3:"required",
			class4:"required",
			class5:"required",
			telno1:
				{
				digits:true,
				required:true,
				minlength:10,
				maxlength:10
				},
			telno2:
				{
				digits:true,
				required:true,
				minlength:10,
				maxlength:10
				},
			telno3:
				{
				digits:true,
				required:true,
				minlength:10,
				maxlength:10
				},
			telno4:
				{
				digits:true,
				required:true,
				minlength:10,
				maxlength:10
				},
			telno5:
				{
				digits:true,
				required:true,
				minlength:10,
				maxlength:10
				},
			email1:
				{
				rangelength: [1,30],
				required:true,
				email:true
				},
			email2:
				{
				rangelength: [1,30],
				required:true,
				email:true
				},
			email3:
				{
				rangelength: [1,30],
				required:true,
				email:true
				},
			email4:
				{
				rangelength: [1,30],
				required:true,
				email:true
				},
			email5:
				{
				rangelength: [1,30],
				required:true,
				email:true
				},
		},
		messages:{
			fname:"*",
			ptitle:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			sdate:
				{
				required:"*",
				date:" !"
				},
			edate:
				{
				required:"*",
				date:" !"
				},
			noofstud:
			{
				digits:" !",
				required:"*",
				range:" !"
			},
			name1:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			name2:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			name3:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			name4:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			name5:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			role1:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			role2:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			role3:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			role4:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			role5:
			{
				rangelength:" !",
				alphabets:" !",
				required:"*",
			},
			dept1:"*",
			dept2:"*",
			dept3:"*",
			dept4:"*",
			dept5:"*",
			class1:"*",
			class2:"*",
			class3:"*",
			class4:"*",
			class5:"*",
			telno1:
			{
				digits:" !",
				required:"*",
				minlength:" !",
				maxlength:" !"
			},
			telno2:
			{
				digits:" !",
				required:"*",
				minlength:" !",
				maxlength:" !"
			},
			telno3:
			{
				digits:" !",
				required:"*",
				minlength:" !",
				maxlength:" !"
			},
			telno4:
			{
				digits:" !",
				required:"*",
				minlength:" !",
				maxlength:" !"
			},
			telno5:
			{
				digits:" !",
				required:"*",
				minlength:" !",
				maxlength:" !"
			},
			email1:
			{
				rangelength:" !",
				required:"*",
				email:" !"
			},
			email2:
			{
				rangelength:" !",
				required:"*",
				email:" !"
			},
			email3:
			{
				rangelength:" !",
				required:"*",
				email:" !"
			},
			email4:
			{
				rangelength:" !",
				required:"*",
				email:" !"
			},
			email5:
			{
				rangelength:" !",
				required:"*",
				email:" !"
			},
		},
		submitHandler:function(form){
			form.submit();
		}
	});
});
jQuery.validator.addMethod("alphabets",function(value,element){return this.optional(element)||/^[a-zA-z ]+$/i.test(value);}," !");