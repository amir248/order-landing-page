let rusAll=document.querySelectorAll('#rus');
let rus= document.querySelector('#rus');
let engAll=document.querySelectorAll('#eng');
let eng=document.querySelector('#eng');
// console.log(rusAll.length + " "+engAll.length);
let checkbox=document.querySelector("#LanguageCheck");
document.querySelector("#LanguageCheck").addEventListener("click",()=>{
    // console.log('click');
    changeLanguageNow();
});

function changeLanguageNow(){
    for(let j=0;j<engAll.length;j++){
        if(checkbox.checked==true){
            // console.log('Checkbox Checked');
            if(rus!==undefined){
                rusAll[j].style.display="none";
             }
             if(eng!==undefined){
                 engAll[j].style.display="";
             }
            //  checkbox.checked='true';
            
        }else if(checkbox.checked==false){
            // console.log('NOT');
            if(rus!==undefined){
                rusAll[j].style.display="block";
             }
             if(eng!==undefined){
                 engAll[j].style.display="none";
             }
             window.location.search=="?rus";
            }
        
    }
}
changeLanguageNow();

function changeCheckbox(event){
    if(window.location.search=='?rus'){
        // console.log('rus');
        checkbox.checked=false;
        changeLanguageNow();
        // event.preventDefault();
        // window.location.search="";

    }else if(window.location.search=="?eng"){
        // console.log('eng');
        changeLanguageNow();
        // event.preventDefault();
        // window.location.search="?rus";
    }else{
        // console.log('else');
        changeLanguageNow();
    }
    // console.log(window.location.href);
}
changeCheckbox();