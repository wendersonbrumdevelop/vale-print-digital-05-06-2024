// Possibilita usar o mesmo menu em varias paginas 
document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-conteiner').innerHTML = data;
        });
});
