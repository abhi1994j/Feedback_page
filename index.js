const ratingEls = document.querySelectorAll(".rating")
const btn =document.getElementById("btn")
console.log(ratingEls);
const containerE1 = document.getElementById('container')
let selectedRating = "";
let container = document.getElementById("container")
ratingEls.forEach((ele)=>{
    console.log(ele);
   ele.addEventListener("click" , (e)=>{
        // console.log(e);
        removeActive();
       selectedRating = 
          e.target.innertext || e.target.parentNode.innertext;
          e.target.classList.add("active");
          e.target.parentNode.classList.add("active");
   }); 
})
btn.addEventListener('click' , (e)=>{
    console.log(e);
    if(selectedRating !== ""){
       containerE1.innerHTML = 
       `<strong>Thank you!</strong>
       <br />
       <br />
       <strong>Feddback: ${selectedRating}</strong>
       <br />
       <br />
       <span>We'll use your feedback to improve our customer support.</span>
       `;
    }
})
function removeActive(){
    ratingEls.forEach((ele)=>{
        console.log(ele);
    })
}