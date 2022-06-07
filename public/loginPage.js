"use strict";
let form = new UserForm();
form.loginFormCallback = function(data){
	ApiConnector.login(data, function(response){
		if(response.success){
			location.reload();
		}else{
			form.setLoginErrorMessage(response.error);
		}
	})
}

form.registerFormCallback = function(data){
	console.log('registr');
	ApiConnector.register(data, function(response){
		console.log(response);
		if(response.success){
			location.reload();
		}else{
			form.setRegisterErrorMessage(response.error);
		}
	})
}