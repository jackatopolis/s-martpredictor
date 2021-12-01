console.log('predictor page')


// CREATE DROPDOWN MENUS

// Store
var dropdown = document.getElementById("selStore1");
var opt = document.createElement("option");
opt.text = 'Select Store';
opt.value = '';
dropdown.add(opt);

for (var element = 1; element < 11; element++) {
    var dropdown = document.getElementById("selStore1");
    var opt = document.createElement("option");
    let str = "Store ";
    str += element.toString();
    opt.text = str.toString();
    opt.value = element;
    dropdown.add(opt);
}

// Product
var dropdown = document.getElementById("selProduct1");
var opt = document.createElement("option");
opt.text = 'Select Product';
opt.value = '';
dropdown.add(opt);

for (var element = 1; element < 4; element++) {
    var dropdown = document.getElementById("selProduct1");
    var opt = document.createElement("option");
    let str = "Product ";
    str += element.toString();
    opt.text = str.toString();
    opt.value = element;
    dropdown.add(opt);
}

// Week of the Year
var dropdown = document.getElementById("selWeek1");
var opt = document.createElement("option");
opt.text = 'Select Week';
opt.value = '';
dropdown.add(opt);

var unique = [...Array(52).keys()];
unique.forEach((element) => {
    var dropdown = document.getElementById("selWeek1");
    var opt = document.createElement("option");
    let str = "Week ";
    str += element + 1;
    opt.text = str.toString();
    opt.value = element + 1;
    dropdown.add(opt);
}
);


// BUTTON EVENT HANDLING

d3.selectAll("button.p1").on("click", function () {

    var store = d3.select("#selStore1").property("value");
    var product = d3.select("#selProduct1").property("value");
    var week = d3.select("#selWeek1").property("value");
    var holiday = d3.select("#selHoliday1").property("value");
    var basePrice = d3.select("#basePrice1").property("value");
    var price = d3.select("#price1").property("value");
    var cost = d3.select("#cost1").property("value");

    data = {
        "store": store,
        "product": product,
        "week": week,
        "holiday": holiday,
        "basePrice": basePrice,
        "price": price,
        "cost": cost,
    };

    console.log(data);

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(d => {
            console.log('response', d)
            var quantity = d.quantity
            var revenue = quantity * price;
            var costT = quantity * cost;
            var profit = revenue - costT;

            document.getElementById("modelResults1").innerHTML = "<br><br>Quantity Sold:  " + quantity.toFixed(0) +
                "<br><br>Total Revenue:  $" + revenue.toFixed(2) +
                "<br><br>Total Cost:  $" + costT.toFixed(2) +
                "<br><br>Total Profit:  $" + profit.toFixed(2);
        }
        )
}
);