function changeBg() {
   const Images = [
      'url("image1.jpg")',
      'url("image2.jpg")'
   ]
   const section = document.querySelector('body');
   const bg = Images[Math.floor(Math.random()*2)];

   section.style.backgroundImage = bg;
   section.style.height = "100%";
   section.style.width 
}
setInterval(changeBg,2000);
