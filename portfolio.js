// ==============================SHOW SIDEBAR=========================================================
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navHome = document.getElementById("homes"),
      navLogo = document.getElementById("logo"),
      navAbout = document.getElementById("abouts"),
      navSkills = document.getElementById("skillss"),
      navProjects = document.getElementById("projects"),
      navContact = document.getElementById("contacts")





// ========SIDEBAR SHOW===========
// validate if constant exists
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add('show-sidebar')
    })
}


//========= SIDEBAR HIDDEN==========
// validate if constant exists
if(navClose){
    navClose.addEventListener("click" , () =>{
        navMenu.classList.remove('show-sidebar')
    })
}

// =======NAVLINK HIDDEN===========
// validate if constant exists
if(navHome){
    navHome.addEventListener("click", () =>{
       navMenu.classList.remove('show-sidebar') 
    })
}

if(navAbout){
    navAbout.addEventListener("click", () =>{
       navMenu.classList.remove('show-sidebar') 
    })
}

if(navSkills){
    navSkills.addEventListener("click", () =>{
       navMenu.classList.remove('show-sidebar') 
    })
}

if(navProjects){
    navProjects.addEventListener("click", () =>{
       navMenu.classList.remove('show-sidebar') 
    })
}

if(navContact){
    navContact.addEventListener("click", () =>{
       navMenu.classList.remove('show-sidebar') 
    })
}

if(navLogo){
    navLogo.addEventListener("click", () =>{
       navMenu.classList.remove('show-sidebar') 
    })
}

//=========================================== navlink toggle============================================
// const navbarLinks = document.querySelectorAll("[data-navbar-link]");

// for (let i=0; i < navbarLinks.length; 1++){
//     navbarLinks[1].addEventListener("click", function() {
//         navbar.classList.toggle("active");
//         overlay.classList.toggle("active");
//     });
// }






// ==========================================SKILLS TABS=================================================
// const tabs = document.querySelectorAll('[data-target]'),
//     tabcontent = document.querySelectorAll('[data-content]')

//     tabs.forEach(tab => {
//         tab.addEventListener("click", () => {
//             const target = document.querySelector(tab.dataset.target)

//             tabcontent.forEach(tabcontents => {
//                 tabcontents.classList.remove('skills-active')
//             })

//             target.classList.add('skills-active')

            
//             tabs.forEach(tab => {
//                 tab.classList.remove('skills-active')
//             })

//             tab.classList.add('skills-active')
//         })
//     })





// ==========================================MIXLTUP FILTER PORTFOLIO======================================
let mixerportfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});


// =================LINK ACTIVE WORK=========
const linkwork = document.querySelectorAll('.work-item')

function activework(){
    linkwork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l=> l.addEventListener('click', activework))

// ===== WORK popup=====
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work-button")) {
        toggleportfoliopopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function toggleportfoliopopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");

}

document.querySelector(".portfolio-popup-close").addEventListener("click", toggleportfoliopopup)


//   function portfolioItemDetails (portfolioItem){
//      document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;

    
//       document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector
//       (".portfolio-item-details").innerHTML;
     
//  }

// Select the element with class "portfolio-popup-body"
// var popupBodyElement = document.querySelector(".portfolio-popup-body");

// // Select all elements with class "portfolio-item-details"
// var detailsElements = document.querySelectorAll(".portfolio-item-details");

// // Loop through the selected elements and concatenate their innerHTML property values
// var contents = "";
// for (var i = 0; i < detailsElements.length; i++) {
//   contents += detailsElements[i].innerHTML;
// }

// // Set the innerHTML property of the "portfolio-popup-body" element to the concatenated contents
// popupBodyElement.innerHTML = contents;



// // Select the element with class "portfolio-popup-body"
// var popupBodyElement = document.querySelector(".pp-thumbnail img").src;

// // Select all elements with class "portfolio-item-details"
// var detailsElements = document.querySelectorAll(".work-img").src;

// // Loop through the selected elements and concatenate their innerHTML property values
// var contents = "";
// for (var i = 0; i < detailsElements.length; i++) {
//   contents += detailsElements[i].innerHTML;
// }

// // Set the innerHTML property of the "portfolio-popup-body" element to the concatenated contents
// popupBodyElement.innerHTML = contents;


//  // Select all elements with class "portfolio-popup-body"
// var popupBodyElements = document.querySelectorAll(".portfolio-popup-body");

// // Select all elements with class "portfolio-item-details"
// var detailsElements = document.querySelectorAll(".portfolio-item-details");

// // Loop through the selected elements and set the innerHTML property individually
// for (var i = 0; i < popupBodyElements.length; i++) {
//   // Set the innerHTML property of the current popup body element to the innerHTML property of the corresponding details element
//   popupBodyElements[i].innerHTML = detailsElements[i].innerHTML;
// }

  

// Select all elements with class "portfolio-popup-body"
var popupBodyElements = document.querySelectorAll(".portfolio-popup-body");

// Select all elements with class "portfolio-item-details"
var detailsElements = document.querySelectorAll(".portfolio-item-details");

// Log the innerHTML property of each details element to the console
// for (var i = 0; i < detailsElements.length; i++) {
//   console.log(detailsElements[i].innerHTML);
// }

// Loop through the selected elements and set the innerHTML property individually
for (var i = 0; i < detailsElements.length; ) {
  // Set the innerHTML property of the current popup body element to the innerHTML property of the corresponding details element
  popupBodyElements[i].innerHTML = detailsElements[i].innerHTML;
}


// Select all elements with class "pp-thumbnail"
var thumbnailElements = document.querySelectorAll(".pp-thumbnail img").src;

// Select all elements with class "work-im
var workImgElements = document.querySelectorAll(".work-img").src;

// Loop through the selected elements and set the src attribute individually
for (var i = 0; i < workImgElements.length; i++) {
  // Set the src attribute of the current work-img element to the src attribute of the corresponding thumbnail element
  thumbnailElements[i].src = workImgElements[i].src;
}




// ==========================================CONTACT INPUT ANIMATION=========================================
// const inputs = Document.querySelectorAll(".input");

// function focusfunc(){
//     let parent = this.parentNode;
//     parent.classList.add("focus");
//  }

//  function blurfunc(){
//     let parent = this.parentNode;
//     if(this.value == ""){
//         parent.classList.remove("focus");
//     }
//  }

//  inputs.forEach((input) =>{
//     input.addEventListener("focus, focusfunc");
//     input.addEventListener("blur", blurfunc);
//  })


// ai============



// import alanBtn from "@alan-ai/alan-sdk-web";

// var alanBtnInstance = alanBtn({
//   key: "ae24f32e5c72cb2e802ce585725cb0cc2e956eca572e1d8b807a3e2338fdd0dc/stage",
//   onCommand: function (commandData) {
//     if (commandData.command === "go:back") {
//       // Call the client code that will react to the received command
//     }
//   },
//   rootEl: document.getElementById("alan-btn"),
// });