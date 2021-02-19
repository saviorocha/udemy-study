let todos = [];
let input = prompt('What would you like to do?');
while (input !== "quit") {
	
	if (input === "list") {
		console.log('************');
		todos.forEach(function(todo, i) {
			console.log(i + ': ' + todo);
		});
		console.log('************');
	} else if (input === "new") {
		let newTodo = prompt("Enter new Todo");
		todos.push(newTodo);
	} else if (input === "delete") {
		let index = prompt('Enter index of todo to delete');
		todos.splice(index, 1);
	}
	input = prompt('What would you like to do?');
}