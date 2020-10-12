function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}
var sizePrice = {
  small: 5000,
  medium: 7000,
  large: 9000
};
var toppingPrice =[
  {
    Ham: {
      small: 500,
      medium: 1000,
      large: 1500
    },
    Pepperoni: {
      small: 600,
      medium: 1200,
      large: 1800
    },
    Mozzarella: {
      small: 700,
      medium: 1400,
      large: 2100
    },
      Sausage: {
        small: 1000,
      medium: 2000,
      large: 1500
      },
      Bacon: {
        small: 500,
      medium: 1000,
      large: 1500
      },
        Mushroom: {
          small: 800,
      medium: 1500,
      large:2000
        }
  }
  ];

var crustPrice = {
  crispy: 1500,
  stuffed: 1000,
  gluten: 1200,
 
};
function sizeCalcPrice(size) {
  if (size === "small") {
    return sizePrice.small * 1;
  } else if (size === "medium") {
    return sizePrice.medium * 1;
  } else {
    return sizePrice.large * 1;
  }
}

function crustCalcPrice(crust) {
  if (crust === "crispy") {
    return crustPrice.crispy * 1;
  } else if (crust === "stuffed") {
    return crustPrice.stuffed * 1;
  } else {
    return crustPrice.gluten * 1;
  }
}

function toppingsCalcPrice(toppings) {
  var nbrofTopping = 0;
  for (i = 0; i < toppings.length; i++) {
    if (toppings[i] == "Ham") {
      nbrofTopping  += 2000;
    }
    if (toppings[i] == "Pepperoni") {
      nbrofTopping  += 1000;
    }
    if (toppings[i] == "Mozzarella") {
      nbrofTopping  += 4500;
    }
    if (toppings[i] == "Sausage") {
      nbrofTopping  += 3000;
    }
    if (toppings[i] == "Bacon") {
      nbrofTopping  += 4000;
    }
    if (toppings[i] == "Mushroom") {
      nbrofTopping += 3500;
    }
  }
  return nbrofTopping  * 1;
}




$(document).ready(function(){
function getPizzaSize() {
    return $("#size").find(":selected").val();
  }
  function getCrust() {
  return $("#crustt").find(":selected").val();
}
function getToppings() {
    var toppingList = [];
    $(".form-check-input:checked:enabled").each(function() {
      toppingList.push($(this).val());
    });
    return toppingList;
  }

  $("form#orderform").submit(function(event) {
    event.preventDefault();
    var pizzaSize = getPizzaSize();
    var crust = getCrust();
    var toppingList = getToppings();

    var newPizza = new Pizza(pizzaSize, crust);
    newPizza.toppings.push(toppingList);
    $("#chckout").show();
    var oneOrder =
      sizeCalcPrice(pizzaSize) +
      crustCalcPrice(crust) +
      toppingsCalcPrice(toppingList);

      $("#items").append(

          "<li> Pizza size: "  +newPizza.size + "<br> crust :"+newPizza.crust+"<br> toppings: " +newPizza.toppings+ "<br> Total price: "+oneOrder+ "</li>"

        );
      });

  $("#chckout").click(function() {
    $(".checkouts").show();
    $("#checkoutslist").html($("#items").html());
  });
  $("#delivers").click(function() {
    $(".addresses").show();
  });
  $("#addre").click(function() {
    var userName = $("#username").val();
    alert("Dear "+userName+" Your order will be delivered in not more than 20 minutes."
    +" Thank you for choosing Dainty Pizzeria! Please come back again")
  });


  $("#messageform").submit(function(){
    var uname= $("input#names").val();
    alert(uname+" we have received your message. Thank you for reaching out to us.");
   });
   });
  