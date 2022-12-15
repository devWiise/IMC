

function calc() {
   // const checkMen = document.getElementById('men').checked
   const inptWeight = Number(document.getElementById('weight').value)
   const inptHeight = Number(document.getElementById('height').value) 
   const outMsg = document.getElementById('outMsg').innerText = 'seu IMC é:'
   const outIMC = document.getElementById('yourImc')
   const imc = (inptWeight / (inptHeight * inptHeight)) 
   
   if(inptWeight === 0 && inptHeight === 0) {
      return alert('Preenchar todos os campos')    
   }

   return outIMC.innerText = `${imc.toFixed(2)}`
}


// const btnCalc = document.getElementById('buttonCalc')
// btnCalc.addEventListener('click', calc())