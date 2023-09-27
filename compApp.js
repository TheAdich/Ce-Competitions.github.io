const hamburgerIcon=document.querySelector(".hamburger-icon");
const hamburgerMenu=document.querySelector(".hamburger-section")
const navBar=document.querySelector(".navbar");
const guidelineBtns=document.querySelectorAll(".guideline-hover-Btn")
const guidelineLeftSection=document.querySelectorAll(".guideline-left-section");
const guidelineRightSection=document.querySelectorAll(".guideline-right-section");
const competitionWebpage=document.querySelector(".competition-webpage")
console.log(competitionWebpage)


//When we click on the hamburger menu the hamburger menu should appear 
hamburgerIcon.addEventListener("click",()=>{
    hamburgerMenu.classList.toggle("hamburger-section-show");
    competitionWebpage.classList.toggle("competition-webpage-hide")
    navBar.classList.toggle("hamburger-navbar")
});

guidelineBtns.forEach(guidelineBtn=>{
    guidelineBtn.addEventListener("click",(e)=>{
        //makign other guideline card to be hidden
        guidelineLeftSection.forEach(item=>{
            console.log(item);
            item.classList.remove("guideline-left-show");
        })
        guidelineRightSection.forEach(item=>{
            console.log(item);
            item.classList.remove("guideline-right-show");
        })
        const cardSelected=e.target.parentElement.parentElement.parentElement;
       console.log(cardSelected);
        const guideLineLeftBlock=cardSelected.childNodes[1];
      //  console.log(guideLineLeftBlock);
        const guideLineRightBlock=cardSelected.childNodes[3];
        //console.log(guideLineRightBlock);
        if(cardSelected.className==="row-card-main-container-left"){
            guideLineLeftBlock.classList.add("guideline-left-show");
        }
        else{
           
            guideLineRightBlock.classList.add("guideline-right-show");
        }
        
        
    })
})

//js for the city dropdown list

let dropdownicon = document.querySelector('.city-selection-list-input-image');
let dropdownlist = document.querySelector('.city-selection-list-option');
dropdownicon.onclick = function(){
    dropdownicon.classList.toggle('active');
    dropdownlist.classList.toggle('active');
}

function show(anything){
    document.querySelector('.city-selection-list-input-value').innerHTML = anything;
    dropdownicon.classList.toggle('active');
    dropdownlist.classList.toggle('active');
}

//Js for map section
var scrollmap = document.querySelector('.main-hero-section-map');
var bhuneswarx = 1.2;
var bhuneshwary = 1.2;
var delhix = 0.8;
var delhiy = 0.55;
var Luckx = 0.9;
var Lucky = 0.75;
//add more locations-do mapping according to backend criteria,search for new locations manually ,adjust in case of resizing
console.log(scrollmap);

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var scrollmap = document.querySelector('.main-hero-section-map');
        var scrollLeft = scrollmap.scrollWidth / 2 - window.innerWidth / 2;
        var scrollTop = scrollmap.scrollHeight / 2 - window.innerHeight / 2;
        console.log(scrollLeft);
        console.log(scrollTop);

        // Ensure the element exists
        if (scrollmap) {
            smoothScroll(scrollmap, scrollLeft, scrollTop, 2000);
        }
    }, 2000); // Delay

    setTimeout(function () {
        var scrollmap = document.querySelector('.main-hero-section-map');
        var scrollLeft = scrollmap.scrollWidth / 2 - window.innerWidth / 2;
        var scrollTop = scrollmap.scrollHeight / 2 - window.innerHeight / 2;

        if (scrollmap) {
            smoothScroll(scrollmap, scrollLeft * 0.9, scrollTop * 0.75, 4000);
        }
    }, 4000);
});

function smoothScroll(element, toLeft, toTop, duration) {
    var start = {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop,
    };
    var change = {
        scrollLeft: toLeft - start.scrollLeft,
        scrollTop: toTop - start.scrollTop,
    };
    var startTime = performance.now();

    function animateScroll(currentTime) {
        var elapsedTime = currentTime - startTime;
        var progress = Math.min(elapsedTime / duration, 1);

        element.scrollLeft = start.scrollLeft + change.scrollLeft * progress;
        element.scrollTop = start.scrollTop + change.scrollTop * progress;

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}