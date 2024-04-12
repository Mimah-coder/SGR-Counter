//incrementnumber()
//console.log(number)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
 let count=0
 console.log(saveEl)
       function increment(){
       count += 1
       countEl.textContent=count
       }
     
       // 1. Create a function, save(), which logs out the count when it's called
       function save (){
         // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
         let countStr = count + " - " 
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    saveEl.textContent += countStr  
     countEl.textContent = 0
     count = 0
            console.log(count)
       }
//strings, they can be numbers or letters
//concatinate string message and username
// Create a variable, message, that stores the string: "You have tree new notifications"
// a sting will always win over a number
// let  username = "Mimah"
// let message = "You have tree new notifications "
// let messageToUser = message + ", " + username + "!"

// //+= to avoid repetition
// messageToUser += "👋"
// console.log(messageToUser) 