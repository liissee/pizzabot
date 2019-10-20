const vegetarian = "vegetarian"
const hawaiian = "hawaiian"
const pepperoni = "pepperoni"

const pizzaPrice = 80
let orderName
let pizzaQuantity
let button
    // const btn = document.getElementById("button")

// //pop-up window saying what's on the menu
// // btn.onclick = () => {
// //     alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + ", " + pepperoni + ".")

// //function that ask the user what pizza they want and stores the input in orderName.
// // const orderPizza = () => {
// //         orderName = prompt("Enter the name of the pizza you want to order today.")
// //     }
// //invokes the orderPizza function
// // orderPizza()

//function that calculates the total price for how many pizzas the user want to order.
const totalCost = () => {
    return document.orderForm.pizzaQuantity.value * pizzaPrice
}

// /*function that calculates how long time it will take to deliver the 
// pizzas depending on pizzaQuantity.
// 1-2 pizzas: The pizzas will take 10 minutes.
// 3-5 pizzas: The pizzas will take 15 minutes.
// 6+ pizzas: The pizzas will take 20 minutes.*/
const cookingTime = () => {
    if (document.orderForm.pizzaQuantity.value >= 1 && document.orderForm.pizzaQuantity.value <= 2) {
        return 10
    } else if (document.orderForm.pizzaQuantity.value >= 3 && document.orderForm.pizzaQuantity.value <= 5) {
        return 15
    } else if (document.orderForm.pizzaQuantity.value >= 6) {
        return 20
    } else {
        return "Don't want any pizza?"
    }
}

// /*function that prints out the complete order in HTML (which pizza, how many, total price, when ready)*/
// const completedOrder = () => {
//     document.getElementById("showMessage").innerHTML = ("Great, I'll get started on your " + orderName + " right away, it will cost " +
//         totalCost() + " kr. The pizzas will be ready in " + cookingTime() + " minutes.");
// }

// /*function that ask the user how many pizza they want and stores the input in pizzaQuantity. 
// When we know how many they want we evoke the completedOrder*/
// const pizzaQuantity = () => {
//     pizzaQuantity = prompt("How many of " + orderName + " do you want?")
//     completedOrder()
// }

// /*function that checks if the user have entered a pizza from the menu. 
// If they havent they are asked to choose one and enter it again. */
// const checkOrderName = () => {
//     if (document.orderForm.pizzaType.value === "vegetarian" || document.orderForm.pizzaType.value === "hawaiian" || document.orderForm.pizzaType.value === "pepperoni") {
//         pizzaQuantity()
//     } else {
//         console.log("please choose a pizza")
//         orderPizza()
//     }
// }
// checkOrderName()


const printOrder = () => {

    console.log(document.orderForm.pizzaType.value)
    console.log(document.orderForm.pizzaQuantity.value)
    document.getElementById("showMessage").innerHTML = ("Great, I'll get started on your " + document.orderForm.pizzaType.value + " right away, it will cost " +
        totalCost() + " kr. The pizzas will be ready in " + cookingTime() + " minutes.");

    if (document.orderForm.pizzaType.value === "pepperoni") {
        document.getElementById("showMessage").style.display = "inline-block";
        document.getElementById("hawaiian-image").style.display = "none";
        document.getElementById("pepperoni-image").style.display = "inline";
        document.getElementById("vegetarian-image").style.display = "none";
    } else if (document.orderForm.pizzaType.value === "hawaiian") {
        document.getElementById("showMessage").style.display = "inline-block";
        document.getElementById("hawaiian-image").style.display = "inline";
        document.getElementById("pepperoni-image").style.display = "none";
        document.getElementById("vegetarian-image").style.display = "none";
    } else {
        document.getElementById("showMessage").style.display = "inline-block";
        document.getElementById("hawaiian-image").style.display = "none";
        document.getElementById("pepperoni-image").style.display = "none";
        document.getElementById("vegetarian-image").style.display = "inline";
    }
}