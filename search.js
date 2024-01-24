const icon = document.querySelector('.icon')
const search = document.querySelector('.Search')
const clear = document.querySelector('.delete')
const input = document.querySelector('#inputSearch')

icon.onclick = function() {
    search.classList.toggle('ativo')
    input.value = ''
}

clear.onclick = function() {
    search.classList.remove('ativo')
    input.value = ''  
}