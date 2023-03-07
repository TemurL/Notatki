const addBull = document.querySelector('#addBull');
const noteString = document.querySelector('.note-string');

if (localStorage.notes) {
    noteString.innerHTML = localStorage.notes
}

function saving() {
    localStorage.notes = noteString.innerHTML;
}

setInterval(saving, 1000)

document.addEventListener("keydown", function(event) {
    if (event.altKey && event.code === "KeyX")
    {
        const newBull = document.createElement('img');
        newBull.setAttribute('src', './unchecked.png');
        newBull.className = 'bullet';
        newBull.addEventListener('click', () => {
    
            if (newBull.getAttribute('src') === './unchecked.png') {
                newBull.setAttribute('src', './checked.png');
            } else {
                newBull.setAttribute('src', './unchecked.png');
            }
        })

        noteString.appendChild(newBull);
        event.preventDefault();
    }

});