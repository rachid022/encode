
document.getElementById("select").addEventListener("change", ()=>{

    document.body.style.background=document.getElementById('select').value;
});
    var result=document.getElementById("result");
    var text=document.getElementById("text");
    var select=document.getElementById("select");
    
document.getElementById("text").addEventListener("input", ()=>{
    codage_decodage();
});
function codage_decodage(){
    if(select.value=="encode"){
        result.value=btoa(text.value);
    }else{
        result.value=atob(text.value);
    }
}
    text.value="WRITE YOUR TEXT HERE FOR ENCODE OR DECODE:";
    result.value="FIN RESULT HERE:";
setTimeout( ()=>{
    text.value="";
    result.value="";
},1000);