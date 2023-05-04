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


    // function portfolioItemDetails (portfolioItem){
    //    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;

    
//       document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector
//        (".portfolio-item-details").innerHTML;
     
//    }

 function portfolioItemDetails(portfolioItem) {
    
     const workImg = portfolioItem.querySelector(".work-img");
    // const workImg = portfolioItem.document.getElementById("work-img");

     const itemDetails = portfolioItem.querySelector(".portfolio-item-details");
    // const itemDetails = portfolioItem.document.getElementById("portfolio-item-details");
    

  
    
    if (workImg) {
      const thumbnailImg = document.querySelector(".pp-thumbnail img");
      thumbnailImg.src  = workImg.src;
        
      }
  
    if (itemDetails) {
      const popupBody = document.querySelector(".portfolio-popup-body");
      popupBody.innerHTML = itemDetails.innerHTML;
    }
  }
  
  const portfolioItems = document.querySelectorAll(".portfolio-item-details");
//   const portfolioItems = document.getElementById("portfolio-item-details");

  portfolioItems.forEach((portfolioItem) => {
    portfolioItem.addEventListener("click", () => {
      portfolioItemDetails(portfolioItem);
    });
  });

  const portfolioItemsImg = document.querySelectorAll(".work-img");
//   const portfolioItemsImg = document.getElementById("work-img");

  portfolioItemsImg.forEach((portfolioItem) => {
    portfolioItem.addEventListener("click", () => {
      portfolioItemDetails(portfolioItem);
    });
  });



  


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