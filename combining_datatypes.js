
// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = ["red", "orange", "yellow", "turquoise"]
console.log(crayonBox[1])

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: "metal",
        color: "",
        size: "",
    }
}

console.log(bottle.cap.material)

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    "taxi",
    {
        vendorName: "",
        price: 3
    },
    "hotel"
]

console.log(receipt[1].price)


// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [["alex", "mike", "liam"], "building2", "building3"]
console.log(apartmentBuilding[0][1])


// ************************************ 

// Combine objects, arrays, and functions more than one level deep

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {
    return {
        item: "scarf",
        size: "6 ft",
        color: "black",
    }
}

console.log(knit().item)

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
    return {
        colorCrayon: ["red", "orange", "yellow", "turquoise"]
    }
}

console.log(crayonSelector().colorCrayon[2])

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = () => {
    const options = () => {
        console.log("select a song")
    }
    options()
}

powerButton()

// Model a Vending Machine

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price

const vendingMachine = [
    {
    id: 1,
    name: "belvita",
    price: 2.25
    },
    {
    id: 2,
    name: "nutrigrain bar",
    price: 1.75
    },
    {
    id: 3,
    name: "cliff bar",
    price: 3.25
    }
];

const vend = (userChoice) => {
    return userChoice -= 1 // this will return the value of the index
}

// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

console.log(vendingMachine[vend(3)])

// this works but im having trouble with .vend working? does that need to be a method? I need to have the variable somehow ensure its delivering an index




