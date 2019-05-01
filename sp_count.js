var total = 0;

// In my specific instance I am working with a cloud Atlassian hosted Jira instance and I have found that the Story Point values are presented inside of a <td> tag with class name "customfield_10013". I have not tested on any other instance of Jira so you may need to modify the below line to work with your particular instance of Jira. 
var point_values = document.getElementsByClassName("customfield_10013");
var wrong_page = 0;
if (point_values == null || point_values.length < 1) {
	wrong_page = 1;
}

for (var i = 0; i < point_values.length; i++) {
	if (point_values[i].childNodes[0] != null) {
		total += parseFloat(point_values[i].childNodes[0].data.trim());
	}
}
if (!wrong_page){ 
	alert("Story Points: " + total);
} else {
	alert("No Story Points found.  Ensure that you sure you are viewing the results of a query in Jira and that \"Story Points\" is added as a column.");
}
