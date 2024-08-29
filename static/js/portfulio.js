console.log(document);


function list(){
   var menu = document.getElementById('menu');
    menu.classList.remove('hidden');
    var opn= document.getElementById('open');
    opn.classList.add('hidden');
    var clo = document.getElementById('close');
    clo.classList.remove('hidden');
}


function clos() {
    var menu = document.getElementById('menu')
    menu.classList.add('hidden');
    var clo = document.getElementById('close');
    clo.classList.add('hidden');
    var opn = document.getElementById('open');
    opn.classList.remove('hidden')
}

