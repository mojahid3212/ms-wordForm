
document.getElementById('btn-bold').addEventListener('click',function(){
    const textField= document.getElementById('input-field');
    textField.style.fontWeight='bold';
    
})
document.getElementById('btn-italic').addEventListener('click',function(){
    document.getElementById('input-field').style.fontStyle='italic';
})
document.getElementById('text-underline').addEventListener('click',function(){
   
    document.getElementById('input-field').style.textDecoration='underline';
})
document.getElementById('btn-text-left').addEventListener('click',function(){
   
    document.getElementById('input-field').style.textAlign='left';
})
document.getElementById('btn-text-center').addEventListener('click',function(){
   
    document.getElementById('input-field').style.textAlign='center';
})
document.getElementById('text-right').addEventListener('click',function(){
   
    document.getElementById('input-field').style.textAlign='right';
})
document.getElementById('text-justify').addEventListener('click',function(){
   
    document.getElementById('input-field').style.textAlign='justify';
})
document.getElementById('favcolor').addEventListener('change',function(){
    const myColor= document.getElementById('favcolor').value ;
    document.getElementById('input-field').style.color=myColor;
})