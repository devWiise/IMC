

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
   const changeColorTitleIMC = document.getElementById('imcTitle')
   const changeColorParagraphIMC = document.getElementById('imcParagraph')
   const changeColorGenrerTitle = document.getElementById('genreTitle')
   const changeColorGenrerParagraph = document.getElementById('genreParagraph')
   const changeColorLabelMen = document.getElementById('menLabel')
   const changeColorLabelWoman = document.getElementById('womanLabel')
   const changeColorInputTitle = document.getElementById('inputTitle')



   changeColorBody.classList.toggle('dkMode')
   changeColorTitleIMC.classList.toggle('titleDark')
   changeColorGenrerTitle.classList.toggle('titleDark')
   changeColorParagraphIMC.classList.toggle('paragraphDark')
   changeColorGenrerParagraph.classList.toggle('titleDark')
   changeColorLabelMen.classList.toggle('paragraphDark')
   changeColorLabelWoman.classList.toggle('paragraphDark')
   changeColorInputTitle.classList.toggle('titleDark')
}



