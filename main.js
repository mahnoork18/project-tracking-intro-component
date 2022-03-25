const btn_ham =  document.querySelector('#ham');
const btn_close = document.querySelector('#close');
const mobile_nav = document.querySelector('.mobile-navbar');

function showMenu(){
    btn_close.style.display = 'block';
        btn_ham.style.display = 'none';
        mobile_nav.style.display = 'block';
}
function hideMenu(){
    mobile_nav.style.display = 'none';
        btn_ham.style.display = 'block';
        btn_close.style.display = 'none';
}

btn_ham.addEventListener('click', showMenu);
btn_close.addEventListener('click',hideMenu);