let colors = ['red' , 'green', 'rgba(133,122,200)', '#f15025'];

let btn = document.getElementById('btn')
let colorHeading = document.getElementById('colorHeading')

btn.addEventListener('click', ()=>{
    const randomColor = randomGenerate()

    document.body.style.backgroundColor = colors[randomColor]
    colorHeading.innerHTML = colors[randomColor]
})

function randomGenerate(){
  return  Math.floor(Math.random()*colors.length) 
}