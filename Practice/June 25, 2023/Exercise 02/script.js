const btn = document.querySelector("button")

btn.addEventListener('click', () => {
   let x = Math.floor(Math.random()*500)+1;
   let y = Math.floor(Math.random()*500)+1;
   console.log(x, y)
   btn.style.marginLeft = `${x}px`;
   btn.style.marginTop = `${y}px`;
    
})
