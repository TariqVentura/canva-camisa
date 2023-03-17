const btn_img_1 = document.getElementById('btn-camisa-1')
const btn_img_2 = document.getElementById('btn-camisa-2')
const btn_texto = document.getElementById('texto-canva')
const texto = document.getElementById('texto')


function cargarCanvas (id_Canva) {
    var elemento = document.getElementById('canva-img')
    if (elemento && elemento.getContext) {
        var contexto = elemento.getContext('2d')
        if(contexto){
            return contexto
        }
    }return false
}

btn_img_1.addEventListener('click', function () {
    var ctx = cargarCanvas('canva-img')
    if (ctx) {
        const img = new Image()
        img.src = './imagenes/camisa 1.webp'
        ctx.beginPath()
        img.onload = function () {
            ctx.drawImage(img, 0, 0, 250, 250)
        }
    }
})

btn_img_2.addEventListener('click', function () {
    var ctx = cargarCanvas('canva-img')
    if (ctx) {
        const img = new Image()
        img.src = './imagenes/camisa 2.webp'
        ctx.beginPath()
        img.onload = function () {
            ctx.drawImage(img, 0, 0, 250, 250)
        }
    }
})

texto.addEventListener('keyup', function(){
    var ctx = cargarCanvas('canva-img')
    var texto_ultimo = document.getElementById('texto').value
    if (ctx) {
        ctx.fillText(texto_ultimo,100,125);
        console.log(texto_ultimo)
    }
})

// btn_texto.addEventListener('click', function () {
//     var texto = document.getElementById('texto').value
//     var ctx = cargarCanvas('canva-img')
//     if (ctx) {
//         ctx.fillText(texto,50,50);
//         console.log(texto)
//     }
// })