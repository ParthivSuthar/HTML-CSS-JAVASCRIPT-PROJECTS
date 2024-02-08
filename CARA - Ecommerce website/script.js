const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const Close = document.getElementById('close')

if(bar) {
    bar.addEventListener("click", function(){
        nav.classList.add('active')
    })
}

if(Close){
    Close.addEventListener("click", function(){
        nav.classList.remove('active')
    })
}



