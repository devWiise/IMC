

function calc() {
   // const checkMen = document.getElementById('men').checked
   const inptWeight = document.getElementById('weight')
   const inptHeight = document.getElementById('height')
   const outMsg = document.getElementById('outMsg').innerText = 'seu IMC é:'
   const outIMC = document.getElementById('yourImc')
   // convert
   const peso = Number(inptWeight.value)
   const altura = Number(inptHeight.value)
   
   const imc = (peso / (altura * altura)) 
   
   if((peso === 0 || peso === isNaN(peso)) && (altura === 0 || altura === isNaN(altura)) ) {
      alert('Preenchar todos os campos') 
      return 
   }
   
   
   return outIMC.innerText = `${imc.toFixed(2)}`
}


// const btnCalc = document.getElementById('buttonCalc')
// btnCalc.addEventListener('click', calc())