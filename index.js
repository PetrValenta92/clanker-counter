
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let fixEl = document.getElementById("fix-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function fix() {
    count = 0
    countEl.textContent = count
}
