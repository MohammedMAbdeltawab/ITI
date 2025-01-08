
var items=Array.from(document.querySelectorAll(".img-item"))   ;
var lightContainer=document.querySelector(".lightbox-container");
var lightItem=document.querySelector(".lightbox-item");
var currentIdx=0;
var nextSlide=document.getElementById("next");
var prevSlide=document.getElementById("prev");
var closeSlide=document.getElementById("close");

for(var i=0;i<items.length;i++){
    
    items[i].addEventListener('click',function(e){
        currentIdx=items.indexOf(e.target);
        lightContainer.classList.replace("d-none","d-flex");
        lightItem.style.backgroundImage=`url(${e.target.getAttribute("src")})`;
    });
}

function slide(idx){
   currentIdx+=idx;
   if(currentIdx<0){
    currentIdx=items.length-1;
   }
   if(currentIdx==items.length){
    currentIdx=0;
   }
    var newImg=items[currentIdx].getAttribute("src");
    lightItem.style.backgroundImage=`url(${newImg})`;
}

nextSlide.addEventListener('click',function(e){
    slide(1);
});

prevSlide.addEventListener('click',function(e){
    slide(-1);
});
closeSlide.addEventListener('click',function(e){
lightContainer.classList.replace("d-flex","d-none");
});

document.addEventListener('keydown',function(e){

if(e.key=="ArrowRight"||e.key=="ArrowUp"){
    slide(1);
}
else if(e.key=="ArrowLeft"||e.key=="ArrowDown"){
    slide(-1);
}
else if(e.key=="Escape"){
    
        lightContainer.classList.replace("d-flex","d-none");
     
}



});