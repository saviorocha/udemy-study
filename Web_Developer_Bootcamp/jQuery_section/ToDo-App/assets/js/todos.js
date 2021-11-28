//check or uncheck clicked li
$("ul").on("click", "li", function() { // add the listener to the ul because jQuery will only updtade the event listener to elements created when the page first loaded
	$(this).toggleClass("completed");
});

// click on X to delete a todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() { // fade out the li
		$(this).remove() // remove the li 
	}); 
	event.stopPropagation(); // avoid event bubbling
})

// create new todo li
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		let todoText = $(this).val(); // taking the text from the input
		$(this).val(""); // clear the input
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></span></i>"+ todoText +"</li>"	) // add the new li to the ul
	}
});

//fade the input
$(".fa-plus-square-o").click(function() {
	$("input[type='text']").fadeToggle();
})