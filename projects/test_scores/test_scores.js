var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function addScore() {
	var name = $("name").value;
	var score = $("score").value;
	var valid = true;
	if (name == "") {
		$("name_error").innerText = "Name cannot be Empty";
		valid = false;
	} else {
		$("name_error").innerText = "";
	}

	if (score == "") {
		$("score_error").innerText = "Score cannot be Empty";
		valid = false;
	}
	else if (isNaN(score) || score < 0 || score > 100) {
		$("score_error").innerText = "Score should be between 0 to 100";
		valid = false;
	} else {
		$("score_error").innerText = "";
	}

	if (valid) {
		names[names.length] = name;
		scores[scores.length] = parseFloat(parseFloat(score).toFixed(2));
		$("name").value = "";
		$("score").value = "";
	}
}

function displayResults() {
	$("results_hr").hidden = false;
	var avgScore = 0;
	var highestScore = 0;
	var highestScoredPerson = "";

	for (var i = 0; i < scores.length; i++) {
		avgScore += scores[i];
		if (highestScore < scores[i]) {
			highestScore = scores[i];
			highestScoredPerson = names[i];
		}
	}
	avgScore = (avgScore / scores.length).toFixed(2);

	var results = `
		<h2>Results</h2>
		<p>Average Score = ${avgScore}</p></br>
		<p>High Score = ${highestScoredPerson} with a score of ${highestScore}</p>
	`;

	$("results").innerHTML = results;
}

function displayScores() {
	$("scores_hr").hidden = false;
	$("scores_heading").hidden = false;
	var displayRows = "";

	for (var i = 0; i < scores.length; i++) {
		displayRows += `
			<tr>
				<td>${names[i]}</td>
				<td>${scores[i]}</td>
			</tr>
		`;
	}
	var displayScores = `
			<thead>
				<tr>
					<th>Name</th>
					<th>Score</th>
				</tr>
			</thead>
			<tbody>
				${displayRows}
			</tbody>
	`;

	$("scores_table").innerHTML = displayScores;
}

window.onload = function () {
	var heading = document.createElement("h2");
	heading.id = "scores_heading";
	heading.innerText = "Scores";
	heading.hidden = true;
	$("scores_table").before(heading);
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


