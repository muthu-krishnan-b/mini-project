function controller(){
    const val=Number(document.getElementById("input").value)
    const ce=(val-32)*5/9
    const result=document.getElementById("result")
    result.innerHTML=ce.toFixed(4)+"celcius"
}