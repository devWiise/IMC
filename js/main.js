

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


// changeBodyColor 
function darkMode() {
   const inDarkMode = document.getElementById('darkMode')   
   inDarkMode.classList.toggle('dkMode')
}

// const btnCalc = document.getElementById('buttonCalc')
// btnCalc.addEventListener('click', calc())