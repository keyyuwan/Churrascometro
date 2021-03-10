const inputElementAdults = document.getElementById("adults")
const inputElementKids = document.getElementById("kids")
const inputElementDuration = document.getElementById("duration")
const result = document.querySelector("div .result")

function calculate() {
    const numberOfAdults = inputElementAdults.value
    const numberOfKids = inputElementKids.value
    const durationTime = inputElementDuration.value

    const meatAmount = (meatPP(durationTime) * numberOfAdults) + (meatPP(durationTime) * numberOfKids) / 2
    const beerAmount = beerPP(durationTime) * numberOfAdults
    const beverageAmount = (beveragePP(durationTime) * numberOfAdults) + (beveragePP(durationTime) * numberOfKids) / 2
 
    result.innerHTML = `<p>|${Math.ceil(meatAmount / 1000)}kg de Carne</p>`
    result.innerHTML += `<p>|${Math.ceil(beerAmount / 1000)}L de Cerveja</p>`
    result.innerHTML += `<p>|${Math.ceil(beverageAmount / 1000)}L de Bebidas (Água / Refris)</p>`
}

function meatPP(duration) {
    if (duration >= 6) {
        return 650
    } else {
        return 400
    }
}

function beerPP(duration) {
    if (duration >= 6) {
        return 1200
    } else {
        return 2000
    }
}

function beveragePP(duration) {
    if (duration >= 6) {
        return 1000
    } else {
        return 1500
    }
}