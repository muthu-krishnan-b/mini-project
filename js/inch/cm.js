function convert(){
   const cm=document.getElementById("input").value
   const inch=cm/2.54
   const result=document.getElementById("result")
   result.innerHTML=inch.toFixed(3)+"inches"
}