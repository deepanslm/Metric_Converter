/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("lengthConv")
const litre = document.getElementById("litreConv")
const mass = document.getElementById("massConv")
const input = document.getElementById("input")

convertBtn.addEventListener("click", function(){
    
    let convalue = input.value
    
    litre.innerText = `${convalue} litres = ` + (0.264*input.value).toFixed(3) +`Gallons | ${convalue} Gallons = ` + (input.value/0.264).toFixed(3) + `litres`
    
    length.innerText = `${convalue} Meter = `+ (3.281*input.value).toFixed(3) +` Feet | ${convalue} Feet = ` + (input.value/3.281).toFixed(3) + `Meter`
        
    mass.innerText = `${convalue} Kilos = ` + (0.264*input.value).toFixed(3) + `Pounds | ${convalue} Pounds = `+ (input.value/0.264).toFixed(3) + `Kilos`
})