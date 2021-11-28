console.log('predictor page')


// CREATE DROPDOWN MENUS

// Store - 1
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


// Store - 2
var dropdown = document.getElementById("selStore2");
var opt = document.createElement("option");
opt.text = 'Select Store';
opt.value = '';
dropdown.add(opt);

for (var element = 1; element < 11; element++) {
    var dropdown = document.getElementById("selStore2");
    var opt = document.createElement("option");
    let str = "Store ";
    str += element.toString();
    opt.text = str.toString();
    opt.value = element;
    dropdown.add(opt);
}


// Store - 3
var dropdown = document.getElementById("selStore3");
var opt = document.createElement("option");
opt.text = 'Select Store';
opt.value = '';
dropdown.add(opt);

for (var element = 1; element < 11; element++) {
    var dropdown = document.getElementById("selStore3");
    var opt = document.createElement("option");
    let str = "Store ";
    str += element.toString();
    opt.text = str.toString();
    opt.value = element;
    dropdown.add(opt);
}


// Week of the Year - 1
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

// Week of the Year - 2
var dropdown = document.getElementById("selWeek2");
var opt = document.createElement("option");
opt.text = 'Select Week';
opt.value = '';
dropdown.add(opt);

var unique = [...Array(52).keys()];
unique.forEach((element) => {
    var dropdown = document.getElementById("selWeek2");
    var opt = document.createElement("option");
    let str = "Week ";
    str += element + 1;
    opt.text = str.toString();
    opt.value = element + 1;
    dropdown.add(opt);
}
);

// Week of the Year - 3
var dropdown = document.getElementById("selWeek3");
var opt = document.createElement("option");
opt.text = 'Select Week';
opt.value = '';
dropdown.add(opt);

var unique = [...Array(52).keys()];
unique.forEach((element) => {
    var dropdown = document.getElementById("selWeek3");
    var opt = document.createElement("option");
    let str = "Week ";
    str += element + 1;
    opt.text = str.toString();
    opt.value = element + 1;
    dropdown.add(opt);
}
);




// BUTTON 1

d3.selectAll("button.p1").on("click", function () {

    var store = d3.select("#selStore1").property("value");
    var week = d3.select("#selWeek1").property("value");
    var holiday = d3.select("#selHoliday1").property("value");
    var basePrice = d3.select("#basePrice1").property("value");
    var price = d3.select("#price1").property("value");
    var cost = d3.select("#cost1").property("value");

    data = {
        "store": store,
        "product": 1,
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

            document.getElementById("modelResults1").innerHTML = "Quantity Sold: " + quantity.toFixed(0) +
                "<br>Total Revenue: $" + revenue.toFixed(2) +
                "<br>Total Cost: $" + costT.toFixed(2) +
                "<br>Total Profit: $" + profit.toFixed(2);
        }
        )
}
);


// BUTTON 2

d3.selectAll("button.p2").on("click", function () {

    var store = d3.select("#selStore2").property("value");
    var week = d3.select("#selWeek2").property("value");
    var holiday = d3.select("#selHoliday2").property("value");
    var basePrice = d3.select("#basePrice2").property("value");
    var price = d3.select("#price2").property("value");
    var cost = d3.select("#cost2").property("value");

    data = {
        "store": store,
        "product": 2,
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

            document.getElementById("modelResults2").innerHTML = "Quantity Sold: " + quantity.toFixed(0) +
                "<br>Total Revenue: $" + revenue.toFixed(2) +
                "<br>Total Cost: $" + costT.toFixed(2) +
                "<br>Total Profit: $" + profit.toFixed(2);
        }
        )
}
);


// BUTTON 3

d3.selectAll("button.p3").on("click", function () {

    var store = d3.select("#selStore3").property("value");
    var week = d3.select("#selWeek3").property("value");
    var holiday = d3.select("#selHoliday3").property("value");
    var basePrice = d3.select("#basePrice3").property("value");
    var price = d3.select("#price3").property("value");
    var cost = d3.select("#cost3").property("value");

    data = {
        "store": store,
        "product": 3,
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

            document.getElementById("modelResults3").innerHTML = "Quantity Sold: " + quantity.toFixed(0) +
                "<br>Total Revenue: $" + revenue.toFixed(2) +
                "<br>Total Cost: $" + costT.toFixed(2) +
                "<br>Total Profit: $" + profit.toFixed(2);
        }
        )
}
);