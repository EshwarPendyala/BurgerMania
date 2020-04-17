class Burger{
    constructor(){
        var burgerType = "";
        var burgerCategory = "";
        var burgerQuantity = "";
        var burgerPrice = "";
    }
}

function $(id){
    return document.getElementById(id);
}

var burgerArray = [];

$('addSupremeBurger').addEventListener('click',function(){
    var burger = new Burger();
    burger.burgerType = 'Supreme Burger';
    burger.burgerCategory = $('typeOfBurger1').value;
    burger.burgerQuantity = $('supremeBurgerQuantity').value;

    if(burger.burgerCategory === "VEG")
    {
        burger.burgerPrice = 100;
    }
    else if (burger.burgerCategory === "EGG")
    {
        burger.burgerPrice = 150;
    }
    else if (burger.burgerCategory === "CHICKEN")
    {
        burger.burgerPrice = 200;
    }
    else
    {
        burger.burgerPrice = 0;
    }

    if(burger.burgerCategory !== "None")
    {
        if(burger.burgerQuantity != 0)
        {
            if(burger.burgerPrice !== 0)
            {
                burgerArray.push(burger);
                alert("Added");
            }
        }
    }
});

$('addSurpriseBurger').addEventListener('click', function () {
    var burger = new Burger();
    burger.burgerType = 'Surprise Burger';
    burger.burgerCategory = $('typeOfBurger2').value;
    burger.burgerQuantity = $('surpriseBurgerQuantity').value;

    if (burger.burgerCategory === "VEG") {
        burger.burgerPrice = 100;
    }
    else if (burger.burgerCategory === "EGG") {
        burger.burgerPrice = 150;
    }
    else if (burger.burgerCategory === "CHICKEN") {
        burger.burgerPrice = 200;
    }
    else {
        burger.burgerPrice = 0;
    }

    if (burger.burgerCategory !== "None") {
        if (burger.burgerQuantity != 0) {
            if (burger.burgerPrice !== 0) {
                burgerArray.push(burger);
                alert("Added");
            }
        }
    }
});

$('addWhopperBurger').addEventListener('click', function () {
    var burger = new Burger();
    burger.burgerType = 'Surprise Burger';
    burger.burgerCategory = $('typeOfBurger3').value;
    burger.burgerQuantity = $('whopperBurgerQuantity').value;

    if (burger.burgerCategory === "VEG") {
        burger.burgerPrice = 100;
    }
    else if (burger.burgerCategory === "EGG") {
        burger.burgerPrice = 150;
    }
    else if (burger.burgerCategory === "CHICKEN") {
        burger.burgerPrice = 200;
    }
    else {
        burger.burgerPrice = 0;
    }

    if (burger.burgerCategory !== "None") {
        if (burger.burgerQuantity != 0) {
            if (burger.burgerPrice !== 0) {
                burgerArray.push(burger);
                alert("Added");
            }
        }
    }
});

$('addChilliCheeseBurger').addEventListener('click', function () {
    var burger = new Burger();
    burger.burgerType = 'Chilli Cheese Burger';
    burger.burgerCategory = $('typeOfBurger4').value;
    burger.burgerQuantity = $('chilliCheeseBurgerQuantity').value;

    if (burger.burgerCategory === "VEG") {
        burger.burgerPrice = 100;
    }
    else if (burger.burgerCategory === "EGG") {
        burger.burgerPrice = 150;
    }
    else if (burger.burgerCategory === "CHICKEN") {
        burger.burgerPrice = 200;
    }
    else {
        burger.burgerPrice = 0;
    }

    if (burger.burgerCategory !== "None") {
        if (burger.burgerQuantity != 0) {
            if (burger.burgerPrice !== 0) {
                burgerArray.push(burger);
                alert("Added");
            }
        }
    }
});

$('addTandoorGrillBurger').addEventListener('click', function () {
    var burger = new Burger();
    burger.burgerType = 'Tandoor Grill Burger';
    burger.burgerCategory = $('typeOfBurger5').value;
    burger.burgerQuantity = $('tandoorGrillBurgerQuantity').value;

    if (burger.burgerCategory === "VEG") {
        burger.burgerPrice = 100;
    }
    else if (burger.burgerCategory === "EGG") {
        burger.burgerPrice = 150;
    }
    else if (burger.burgerCategory === "CHICKEN") {
        burger.burgerPrice = 200;
    }
    else {
        burger.burgerPrice = 0;
    }

    if (burger.burgerCategory !== "None") {
        if (burger.burgerQuantity != 0) {
            if (burger.burgerPrice !== 0) {
                burgerArray.push(burger);
                alert("Added");
            }
        }
    }
});