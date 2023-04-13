
const generateQR = document.getElementById('generateQR')
const QrCode = document.getElementById('QrCode')
const link = document.getElementById("link")

generateQR.addEventListener("click", ()=> {
       chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
         let URL = tabs[0].url;
         let QRCodeLink = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${URL}`
         QrCode.src = QRCodeLink
         QrCode.classList.remove('d-none')
         link.setAttribute('href', QRCodeLink)
   
   


        })
})


