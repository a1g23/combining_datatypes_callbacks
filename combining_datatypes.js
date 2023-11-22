
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