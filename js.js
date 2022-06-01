function pizzaoven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaoven("deep dish", "taditional", ["mozzarella"], ["pepproni","sausage"]);
console.log(pizza1);

var pizza2 = pizzaoven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms","olive","onion"]);
console.log(pizza2);

var pizza3 = pizzaoven("thin and crispy", "white sauce", ["goat cheese"], ["pepproni"]);
console.log(pizza3);

var pizza4 = pizzaoven("gluten free", "bbq", ["mozzarella","parmesan"], ["mushrooms", "anchovies"]);
console.log(pizza4);
