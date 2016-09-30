console.log('have fun !');
$("button").click(function(){

	var obj = {
		nom: $('#last_name').val(),
		prenom: $('#first_name').val(),
		city: $('#city').val(),
	}
	console.log(obj);
	$("#username").text(obj.nom + " " + obj.prenom);
});


