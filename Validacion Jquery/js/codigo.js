$(function(){
   //sacar los mensajes de error
    $("errornombreUsuario").hide();
    $("errorpasswd").hide();
    $("errorrepasswd").hide();
    $("erroremail").hide();
    
    //variables que indican valor de estado validacion
    var error_username = false;
	var error_password = false;
	var error_retype_password = false;
	var error_email = false;
    
    $("#nombreUsuario").focusout(function() {

		check_username();
		
	});

	$("#passwd").focusout(function() {

//		check_password();
		
	});

	$("#repasswd").focusout(function() {

//		check_retype_password();
		
	});

	$("#email").focusout(function() {

//		check_email();
		
	});

	function check_username() {
	
		var username_length = $("#nombreUsuario").val().length;
		
		if(username_length < 5 || username_length > 20) {
			$("#errornombreUsuario").html("debe tener entre 5 y 20 caracteres");
			$("#errornombreUsuario").show();
			error_username = true;
		} else {
			$("#errornombreUsuario").hide();
		}
	
	}
    
    function check_password() {
	
		var password_length = $("#passwd").val().length;
		
		if(password_length < 8) {
			$("#errorpasswd").html("minimo 8 caracteres");
			$("#errorpasswd").show();
			error_password = true;
		} else {
			$("#errorpasswd").hide();
		}
	
	}

	function check_retype_password() {
	
		var password = $("#passwd").val();
		var retype_password = $("#repasswd").val();
		
		if(password !=  retype_password) {
			$("#errorrepasswd").html("pasword distintos");
			$("#errorrepasswd").show();
			error_retype_password = true;
		} else {
			$("#errorrepasswd").hide();
		}
	
	}

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#email").val())) {
			$("#erroremail").hide();
		} else {
			$("#erroremail").html("Direccion inválida");
			$("#erroremail").show();
			error_email = true;
		}
	
	}

	$("#registration_form").submit(function() {
											
		error_username = false;
		error_password = false;
		error_retype_password = false;
		error_email = false;
											
		check_username();
		check_password();
		check_retype_password();
		check_email();
		
		if(error_username == false && error_password == false && error_retype_password == false && error_email == false) {
			return true;
		} else {
			return false;	
		}

	});



});