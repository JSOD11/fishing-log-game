
// Define the trout button
let troutbtn = document.getElementById('trout');
let trout_count = 0;

function update_trout() {
    trout_count++
    troutbtn.textContent = trout_count;
}

// Define the bass button
let bassbtn = document.getElementById('bass');
let bass_count = 0;

function update_bass() {
    bass_count++
    bassbtn.textContent = bass_count;
}

bassbtn.textContent = 0;
troutbtn.textContent = 0;

// Define the congratulations function
let congratsbtn = document.getElementById('congrats_button');
function congratulate() {
    if (bass_count + trout_count < 1) {
        alert("Unfortnately it seems you haven't caught any fish yet. Keep trying!")
    } else if (bass_count + trout_count > 9) {
        alert(`Oh no! Your boat capsized from the weight of ${bass_count + trout_count} fish!
It seems you'll have to start all over again.`);
        bass_count = 0;
        bassbtn.textContent = 0;
        trout_count = 0;
        troutbtn.textContent = 0;
    } else {
        alert(`Congratulations on catching ${bass_count + trout_count} fish!`);
    }
}

// If either button is clicked, call the respective function
troutbtn.onclick = update_trout;
bassbtn.onclick = update_bass;

// If the congrats button is clicked, call the congrats function
congratsbtn.onclick = congratulate