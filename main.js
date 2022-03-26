const btn_ham =  document.querySelector('#ham');
const btn_close = document.querySelector('#close');
const mobile_nav = document.querySelector('.mobile-navbar');

function showMenu(){
    btn_close.classList.remove("hide");
    btn_ham.classList.add("hide");
        mobile_nav.classList.remove('hide')
}
function hideMenu(){
    mobile_nav.classList.add('hide')
    btn_close.classList.add("hide");
    btn_ham.classList.remove("hide");
}

btn_ham.addEventListener('click', showMenu);
btn_close.addEventListener('click',hideMenu);
