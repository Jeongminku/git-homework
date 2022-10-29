const btn_auth = document.querySelector('.btn_auth');
const panel = document.querySelector('.acc_cont');


btn_auth.addEventListener('click', () => {
    if (panel.style.display == 'none') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
});
