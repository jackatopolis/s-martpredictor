console.log('predictor page')

var dataset = {
    "raw": {"store": [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3],
            "product": [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5] 
        },
    "clean": 0
};
// 'dataset' is one object with keys
// raw: 
// clean: 



// CREATE DROPDOWN MENUS

// Store
var dropdown = document.getElementById("selStore");
var opt = document.createElement("option"); 
opt.text = 'Select Store';
opt.value = '';
dropdown.add(opt);

var unique = dataset["raw"]["store"].filter((v, i, a) => a.indexOf(v) === i)
console.log(unique)
unique.forEach( (element) => {
    var dropdown = document.getElementById("selStore");
    var opt = document.createElement("option"); 
    let str = "Store ";
    str += element;
    opt.text = str.toString();
    opt.value = str.toString();
    dropdown.add(opt);
}
);

// Product
var dropdown = document.getElementById("selProduct");
var opt = document.createElement("option"); 
opt.text = 'Select Product';
opt.value = '';
dropdown.add(opt);

var unique = dataset["raw"]["product"].filter((v, i, a) => a.indexOf(v) === i)
console.log(unique)
unique.forEach( (element) => {
    var dropdown = document.getElementById("selProduct");
    var opt = document.createElement("option"); 
    let str = "Product ";
    str += element;
    opt.text = str.toString();
    opt.value = str.toString();
    dropdown.add(opt);
}
);

// Week of the Year
var dropdown = document.getElementById("selWeek");
var opt = document.createElement("option"); 
opt.text = 'Select Week';
opt.value = '';
dropdown.add(opt);

var unique = [...Array(52).keys()];
console.log(unique)
unique.forEach( (element) => {
    var dropdown = document.getElementById("selWeek");
    var opt = document.createElement("option"); 
    let str = "Week ";
    str += element+1;
    opt.text = str.toString();
    opt.value = str.toString();
    dropdown.add(opt);
}
);

// Holiday
var dropdown = document.getElementById("selHoliday");
var opt = document.createElement("option"); 
opt.text = 'Holiday';
opt.value = '';
dropdown.add(opt);

var unique = ["Yes","No"];
console.log(unique)
unique.forEach( (element) => {
    var dropdown = document.getElementById("selHoliday");
    var opt = document.createElement("option"); 
    opt.text = element.toString();
    opt.value = element.toString();
    dropdown.add(opt);
}
);
