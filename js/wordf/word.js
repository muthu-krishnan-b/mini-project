function enroller(){
    let val=document.getElementById("input").value;
    let cont=val.split(' ').length
    const result=document.getElementById("result");
    result.innerHTML=cont+"words"



}