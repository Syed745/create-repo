let colors = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D", "E", "F"];


let colorHeading = document.getElementById('colorHeading')
let btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
   let hex = "#";
   for(var i = 0; i < 6;i++){
       hex += colors[randomGenerate()]
   }

    document.body.style.backgroundColor = hex
    colorHeading.innerHTML = hex
})

function randomGenerate(){
    return  Math.floor(Math.random()*colors.length) 
  }
