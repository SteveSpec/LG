class Order{
    constructor(name, price){
        this.price = price;
        this.name = name;
        this.number = 1
    }
    get_price(){
        return this.number*this.price;
    }

}
class Orders{
    constructor(){
        this.total_price = 0;
        this.order_array = []
    }
    add_order(Order){
        this.order_array.push(Order)
         return this.total_price += Order.get_price();
    }
    remove_order(Order){
        var ord = this.order_array.indexOf(Order);
        var anOrder = this.order_array.splice(ord, 1);
        this.total_price -= anOrder[0].price;
    }
}

// document.body.onload = addElement;
let orders = new Orders();

function get_order(element){
    var ord = new Order(element.name, parseFloat(element.id))
    orders.add_order(ord);
    document.getElementById('TotalCost').innerHTML = orders.total_price;
    // addElement(ord)
}

// function addElement (order) {
//     // create a new div element
//     const newDiv = document.createElement("div");

//     // and give it some content
//     var newContent = document.createTextNode(" | "+order.name);


//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);

//     var newContent = document.createTextNode(" | "+order.price);


//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);

//     // add the newly created element and its content into the DOM
//     const currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currentDiv);
//   }
