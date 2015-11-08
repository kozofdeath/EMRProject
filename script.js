$(document).ready(function() {
	console.log("Hello");
	var problemNumber = 1;
	$("#addProblem").click(function() {
		$("#addProblem")
			.before('<textarea rows="6" cols="100" id="problem' + problemNumber + '" placeholder="problem' + problemNumber + '" required></textarea><br><textarea rows="6" cols="100" id="managment' + problemNumber + '" placeholder="Current Management for Problem' + problemNumber++ + '" required></textarea><br>');
		console.log(problemNumber);
	});
})