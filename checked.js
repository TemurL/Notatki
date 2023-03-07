const bulletAll = document.querySelectorAll('.bullet');

bulletAll.forEach((bullet) => {
    bullet.addEventListener('click', () => {
    
        if (bullet.getAttribute('src') === './unchecked.png') {
            bullet.setAttribute('src', './checked.png');
        } else {
            bullet.setAttribute('src', './unchecked.png');
        }
    })
})