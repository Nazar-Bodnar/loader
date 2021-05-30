//setTimeout(function(){
//    
//    alert("hello")
//    
//    
//},3000)

let s = 0
let blur = 10
let opacity = 1
wrap.style.filter = "blur("+blur+"px)"


setInterval(function(){
    
    if(s<100){
        
          s++
    progress.innerText = s +"%"
        
        blur = blur - 0.099
        wrap.style.filter = "blur("+blur+"px)"
        row.style.width = s+"%"
        row.style.transition = "0.2s"
        opacity = opacity-0.01
        progress.style.opacity = opacity
        
    }else{
        
        progress.style.display = "none"
        row.style.display = "none"
    }
    
    
  
    
},100)
