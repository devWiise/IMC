

function calcIMC() {
   // const checkMen = document.getElementById('men').checked
   const inWeight = document.getElementById('weight')
   const inHeight = document.getElementById('height')
   document.getElementById('outMsg').innerText = 'seu IMC é:'
   const outIMC = document.getElementById('yourImc')
   // convert
   const peso = Number(inWeight.value)
   const altura = Number(inHeight.value)
   
   const imc = (peso / (altura * altura)) 
   console.log(typeof inWeight)

   return outIMC.innerText = `${imc.toFixed(2)}`
}


function darkMode() {
   const changeColorBody = document.getElementById('darkMode')   
   changeColorBody.classList.toggle('containerDarkMode')

}

// Effects input
const inputLabel = document.querySelectorAll('.input__label')
const inputImc = document.querySelectorAll('.input__imc')

inputImc.forEach((element, i) => {
   
   element.addEventListener('focus', (e) => {
      inputLabel[i].classList.add('isfocu')
      console.log(i)
   })

   element.addEventListener('blur', (e) => {
      if(e.target.value === '') {
         inputLabel[i].classList.remove('isfocu')
      }
      console.log('onblur')
   })
});

