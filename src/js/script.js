let imgBox = document.getElementById("img-box")
let qrImg = document.getElementById("qr-img")
let qrText = document.getElementById("qr-text")

function generateQRCode() {
    if (qrText.value.length > 0) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`
        imgBox.classList.add("show-img") //adiciona a classe show-img para mostrar a imagem do QR Code
    }else{
        qrText.classList.add("error") //adiciona a classe error para mostrar o erro
        setTimeout(() => { //setTimeout serve para remover a classe error
            qrText.classList.remove("error") //remove a classe error
        }, 1000)//1000 = 1 segundo
    }
}