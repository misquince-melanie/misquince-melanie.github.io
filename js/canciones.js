function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formu = document.querySelector('#canciones');
const buttonSubmit2 = document.querySelector('#submit1');
const urlDesktop2 = 'https://web.whatsapp.com/';
const urlMobile2 = 'whatsapp://';
const telefono2 = '541136389722';

formu.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit2.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit2.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#NombreCancion').value
        let autor = document.querySelector('#Autor').value
        let link = document.querySelector('#Link').value
        // let asistencia = document.querySelector('.asistencia').value
        // let asistencia = $('input[name="asistencia"]:checked').val();
        let mensaje = 'send?phone=' + telefono2 + '&text=*_Cancion que no puede faltar_*%0A*¿Nombre de la cancion?*%0A' + nombre + '%0A*Autor o cantante*%0A' + autor + '%0A*Link*%0A' + link +''
        if(isMobile()) {
            window.open(urlMobile2 + mensaje, '_blank')
        }else{
            window.open(urlDesktop2 + mensaje, '_blank')
        }
        buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit2.disabled = false
    }, 3000);
});