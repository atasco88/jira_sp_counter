console.log("clicked");
var total = 0;
	
var point_values = document.getElementsByClassName("customfield_10013");
count = point_values.length;

for (var i = 0; i < count; i++) {
	console.log("loop");
	if (point_values[i].childNodes[0] != null) {
		total += parseFloat(point_values[i].childNodes[0].data.trim());
	}
}

alert("Story Points: " + total);

