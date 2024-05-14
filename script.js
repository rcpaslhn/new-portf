const liste =document.getElementById("liste")
const menü =document.querySelector(".menu")
console.log(menü)


liste.addEventListener("mouseover",function(e){

  
   if(e.target.className == "link"){

e.target.parentElement.classList.add("active")
   }
})

liste.addEventListener("mouseout",function(e){

  
    if(e.target.className == "link"){

 e.target.parentElement.classList.remove("active")
    }
 })

   document.querySelectorAll(".link").forEach(function(el){

el.addEventListener("click",function(e){
  e.preventDefault()
  const id =this.getAttribute("href")

  document.querySelector(id).scrollIntoView({behavior:"smooth"})

})
  })

 



   menü.addEventListener("click",()=>{
      const ana__div=document.createElement("div")
    
    
      const isaret =document.createElement("div")
      isaret.style.width="30px"
      isaret.style.height="30px"
      isaret.style.padding="10px"
      isaret.style.backgroundColor="black"
      isaret.style.marginBottom="30px"
      isaret.classList="d-flex justify-content-center align-items-center"
      isaret.style.position="fixed"
      isaret.style.top="10px"
      isaret.style.right="10px"
      
      
      
    
    
    
      const i=document.createElement("i")
      i.classList="fa-solid fa-x"
      i.style.color="white"
      i.style.cursor="pointer"
    
      isaret.appendChild(i)
    
      const div =document.createElement("div")
      
      div.innerHTML=`
    
    
      <ul class="list-style-none  ">
          <li ><a href="#about" style="color: black;">About</a></li>
          <hr>
          <li ><a href="#experience" style="color: black;">Experience</a></li>
          <hr>
          <li><a href="#projects"  style="color: black;">Projects</a></li>
          <hr>
          <li><a href="#contact"  style="color: black;">Contact</a></li>
          <hr>
      </ul>
    
    </div>
    `
    ana__div.style.width="250px"
    ana__div.style.height="100vh"
    ana__div.style.position="fixed"
    ana__div.style.top="0px"
    ana__div.style.right="0px"
    ana__div.style.paddingTop="50px"
    ana__div.style.backgroundColor="white"
    
    
    ana__div.appendChild(isaret)
    ana__div.appendChild(div)
    document.body.appendChild(ana__div)

    window.addEventListener("resize",(e)=>{
      
      if(window.innerWidth<=1000){
          ana__div.style.display="none"
       
      }
  
  
  })
  
   
  

 
    
    
    i.addEventListener("click",()=>{
      ana__div.classList="d-none"
    })


    
      
    })
    



   


