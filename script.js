const container = document.querySelector('.container')
const qrCodeBtn = document.querySelector('#qr-form button')
const qrCodeInput = document.querySelector('#qr-form input')
const qrCodeImg = document.querySelector('.img')

const generateQRCode = () => {
  const qrCodeInputValue = qrCodeInput.value
  
  if (!qrCodeInputValue) {
    alert('Insira uma URL ou texto')
  }

  qrCodeBtn.innerText = 'Gerando'

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`  

  qrCodeImg.addEventListener('load', () => {
    container.classList.add('active') 
    qrCodeBtn.innerText = 'Código gerado!'
  })

  qrCodeInput.value = ''
  
}

qrCodeBtn.addEventListener('click', () => {
  generateQRCode()
})

qrCodeInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    generateQRCode()
  }
})



