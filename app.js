// Méthode 1 
//-----------
// console.log('have fun !');

// var object = {};

// $("input").change(function(){
// 	var pre = $("#first_name").val(); // Get value of input Id first_name
// 	var nom = $("#last_name").val(); // Get value of input Id last_name
// 	var ville = $("#city").val() // Get value of input Id city

// 	// console.log(pre);
// 	// console.log(nom);
// 	// console.log(ville);
// 	object.first_name = pre; // Get this into object (syntaxe = object.key = value)
// 	object.last_name = nom; // Get this into object (syntaxe = object.key = value)
// 	object.city = ville; // Get this into object (syntaxe = object.key = value)

// 	$("#username").html(pre + " " + nom);
// 	console.log(object);
// });


// Méthode 2 optimisation
//------------------------
console.log('have fun !');

var object = {};

$("input").change(function(){

	object.first_name = $("#first_name").val(); // Get this into object (syntaxe = object.key = value)
	object.last_name = $("#last_name").val(); // Get this into object (syntaxe = object.key = value)
	object.city = $("#city").val() // Get this into object (syntaxe = object.key = value)

	$("#username").html(object.first_name + " " + object.last_name);

	console.log(object);
});