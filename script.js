const charVal =document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("Remaining-counter");
let userChar=0;

const updateCounter=()=>{
    userChar=charVal.value.length;
    totalCount.innerHTML=userChar;
    remainingCount.innerHTML=150-userChar;
};
charVal.addEventListener("keyup",updateCounter);

// copy the text code
const copyText=()=>{
    charVal.select();
    charVal.setSelectionRange(0,9999); // mobile madhe all select honya sathi
    navigator.clipboard.writeText(charVal.value) //select kele ahe te copy hotay
     
}