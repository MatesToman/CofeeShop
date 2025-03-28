function pozdrav() {
    alert("Děkujeme. že jste navštívili naši kavárnu!")
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Přepnout tmavý režim';
    toggleButton.classList.add('dark-mode-toggle');
    toggleButton.addEventListener('click', toggleDarkMode);
    document.body.appendChild(toggleButton);
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
