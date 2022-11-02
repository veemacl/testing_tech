function reverseString() // Coding Task 1
{
    let name = prompt("Please enter a name", ""); // Prompts user to enter a name
    if (name != null) // Proceeds once user has input a name
    {
        let splitName = name.split(""); // Splits name into array
        let reverseName = splitName.reverse(); // Reverses array
        reverseName = reverseName.join(""); // Joins array into string
        return reverseName; // Returns reversed name variable
    }
    return;
}

function reverseArray() // Coding Task 2
{
    let array = [] // Initialises array
    let len = prompt("Please enter an array length", ""); // Prompts user for array length
    if (len != null) // Proceeds once user has input an array length
    {
        for (var i = 0; i < len; i++) // Recurses depending on user-input length
        {
            array[i] = prompt('Enter array element ' + (i+1)); // Prompts user for array elements
        }
    array = array.reverse(); // Reverses array
    return array; // Returns reversed array
    }
    return;
}

function mostExpensiveItem() // Coding Task 3
{
    let highestPrice = 0.0; // Variable to compare prices
    let itemNum = 0; // Array location of item of highest cost
    const item = 
    [
        { name: "irn bru", price: 3.25, stock: 50 },
        { name: "fanta", price: 3.98, stock: 45 },
        { name: "diet coke", price: 4.40, stock: 38 }, 
        { name: "7up", price: 3.99, stock: 42 }, 
     ]
     const len = item.length; // Gets length of item array
     for (var i = 0; i < len; i++) // Iterates through item array
     {
        if ((item[i].stock * item[i].price) > highestPrice) // If current stock * price is > highestPrice
        {
            highestPrice = (item[i].stock * item[i].price); // Set highestPrice to that value
            itemNum = i; // The highest cost item becomes that item
        }
     }
     return item[itemNum]; // Returns highest cost item
}