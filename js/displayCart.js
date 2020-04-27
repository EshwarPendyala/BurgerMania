var burgerArray = localStorage.getItem('burgerArray');
function $(id){
    return document.getElementById(id);
}

burgerList = JSON.parse(burgerArray);
var cartTable = $("cartTable");
var td6;
for (var i = 0; i < burgerList.length; i++) {
    // var tr = "<tr>";
    var tr = cartTable.insertRow(i);
    var td1 = tr.insertCell(0);
    td1.innerHTML = burgerList[i].burgerType;
    var td2 = tr.insertCell(1);
    td2.innerHTML = burgerList[i].burgerCategory;
    var td3 = tr.insertCell(2);
    td3.innerHTML = burgerList[i].burgerQuantity;
    var td4 = tr.insertCell(3);
    td4.innerHTML = burgerList[i].burgerPrice;
    var td5 = tr.insertCell(4);
    td5.innerHTML = burgerList[i].burgerPrice * burgerList[i].burgerQuantity;
    var td6 = tr.insertCell(5);
    td6.innerHTML = "X";
}

var cells = document.getElementsByTagName('td');
for(var i=0; i<cells.length;i++)
{
    var cell = cells[i];
    if (cell.cellIndex === 5) {
    cell.onclick = function(){
        
            var delIndex = this.parentNode.rowIndex;
            burgerList.slice(delIndex);
            alert(burgerList);
            $('cartTable').deleteRow(this.parentNode.rowIndex);
        }
    }
}

var quantity = 0;
var price = 0;

for (var i = 0; i<burgerList.length; i++)
{
    quantity = quantity + parseInt(burgerList[i].burgerQuantity);
    price = price + parseInt(burgerList[i].burgerPrice) * parseInt(burgerList[i].burgerQuantity);
}

var finalOrderData = { 
    totalQuantity : quantity, 
    totalPrice : price
}

$('placeOrder').addEventListener('click',function(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:9876/orders", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            alert(response);
        }
    };
    xhttp.send(JSON.stringify(finalOrderData));
})