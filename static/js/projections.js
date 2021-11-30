// Week of the Year
var dropdown = document.getElementById("selWeek");
var opt = document.createElement("option");
opt.text = "Select Week";
opt.value = "";
dropdown.add(opt);

var unique = [...Array(52).keys()];
unique.forEach((element) => {
  var dropdown = document.getElementById("selWeek");
  var opt = document.createElement("option");
  let str = "Week ";
  str += element + 1;
  opt.text = str.toString();
  opt.value = element + 1;
  dropdown.add(opt);
});
