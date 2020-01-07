function copyEmail(e) {
  let box = document.createElement("div");
  box.style.cssText = `
  width: 80px;
  height: 30px;
  background-color: #706D6E;
  color: #ffffff;
  position: absolute;
  margin-top: 20px;
  border-radius: 5px;
  text-align: center;
  line-height: 1.5;
  z-index: 100;
  transition: 0.5s ease-out;
  `;
  box.classList.add("mango");
  box.textContent = "copied";
  box.style.left = e.pageX + "px";
  box.style.top = e.pageY + "px";
  document.body.append(box);
  setTimeout( () => {
    box.remove();
  }, 1000);

    let targ = document.getElementsByClassName("email-copy")[0];
    let myRange = new Range();
    myRange.selectNode(targ);
    document.getSelection().addRange(myRange);
    document.execCommand("copy");
    setTimeout( () => {
        style.textContent = "";
    }, 1000);
    
}

let emailTargCopy = document.getElementsByClassName("titles")[2];
emailTargCopy.addEventListener("click", copyEmail, false);

window.onload = function() {
    let control = document.getElementsByClassName("control-panel")[0];
    
    setTimeout( () => {
        control.style.marginRight = "0vw";
    }, 1500);
}

function downloadCv() {
    let url = "https://raw.githubusercontent.com/freelancer2020/Portofilio2020/master/moje-cv-2019%20(1).pdf";
    fetch(url)
    .then(response => {
        return response.arrayBuffer();
    })
    .then(cv => {
        let a = document.createElement("a");
        document.body.append(a);
        let blob = new Blob([cv], {type: "application/pdf"});
        let link = URL.createObjectURL(blob);
        a.href = link;
        a.download = "mycv.pdf";
        a.click();
        URL.revokeObjectURL(blob);
    })
    .catch(err => alert(err.message));
}

const userClick = document.getElementById("download");
userClick.addEventListener("click", downloadCv, false);


const mainReview = document.getElementsByClassName("container")[0];
function fetchAboutTemplate() {
    let smart = mainReview.children.length;
   while(smart) {
       smart--;
       mainReview.children[smart].remove();
   }
   mainReview.style.marginBottom = "0px";
    let url = "https://raw.githubusercontent.com/freelancer2020/Portofilio2020/master/templates/about.html";
    let header = new Headers();
    let init = {
        method: "GET",
        cache: "no-cache",
    }
    
    let reg = new Request(url, init);
    fetch(reg)
    .then(response => {
        return response.text();
    })
    .then(content => {
        let parser = new DOMParser();
        let contents =  parser.parseFromString(content, "text/html");
        let target = document.getElementsByClassName("container")[0];
        let frame_A = document.createElement("div");
        frame_A.classList.add("mig_1");
        frame_A.style.cssText = `
        display: flex;
        overflow-x: hidden;
        align-items: center;`;
        target.append(frame_A);
        let initContent = contents.getElementById("aboutTemplate");
        let renderContent = initContent.content.cloneNode(true);
        frame_A.append(renderContent);
    })
    .catch(err => alert(err.message));
}

function fetchEducationTemplate() {
    let smart = mainReview.children.length;
   while(smart) {
    smart--;
    mainReview.children[smart].remove();
}
    mainReview.style.marginBottom = "0px";
    let url = "https://raw.githubusercontent.com/freelancer2020/Portofilio2020/master/templates/education.html";
    let header = new Headers();
    let init = {
        method: "GET",
        cache: "no-cache",
    }
    
    let reg = new Request(url, init);
    fetch(reg)
    .then(response => {
        return response.text();
    })
    .then(content => {
        let parser = new DOMParser();
        let contents =  parser.parseFromString(content, "text/html");
        let target = document.getElementsByClassName("container")[0];
        let frame_B = document.createElement("div");
        frame_B.classList.add("mig_2");
        frame_B.style.cssText = `
        display: flex;
        overflow-x: hidden;
        align-items: center;`;
        target.append(frame_B);
        let initContent = contents.getElementById("education");
        let renderContent = initContent.content.cloneNode(true);
        frame_B.append(renderContent);
    })
    .catch(err => alert(err.message));
}

function fetchExperinceTemplate() {
    let frame_C = document.createElement("div");
    frame_C.classList.add("mig_3");
    let smart = mainReview.children.length;
    let malbornRoad = document.getElementsByClassName("container")[0];
   
   while(smart) {
    smart--;
    mainReview.children[smart].remove();
   }

    malbornRoad.style.marginBottom = "0px";
    let url = "https://raw.githubusercontent.com/freelancer2020/Portofilio2020/master/templates/experince.html";
    let header = new Headers();
    let init = {
        method: "GET",
        cache: "no-cache",
    }
    
    let reg = new Request(url, init);
    fetch(reg)
    .then(response => {
        return response.text();
    })
    .then(content => {
        let parser = new DOMParser();
        let contents =  parser.parseFromString(content, "text/html");
        frame_C.style.cssText = `
        display: flex;
        overflow-x: hidden;
        align-items: center;`;
        malbornRoad.append(frame_C);
        let initContent = contents.getElementById("experince");
        let renderContent = initContent.content.cloneNode(true);
        frame_C.append(renderContent);
    })
    .then( () => {
        const user = document.getElementsByClassName("bottom")[0];
        const user2 = document.getElementsByClassName("top")[0];
        let targ = document.getElementsByClassName("ball")[0];
        const yearsFixer = document.getElementsByClassName("fixer");
        const view = document.getElementsByClassName("stage");
        
        
let counter = 0;
let n = -1;
let x = 0;
let arr = [10, 34, 58];
let rock = view[0].clientHeight;
let arr_2 = [rock, rock * 2];
let arr_3 = [rock * 2, rock ];

 function experinceDown() {
  if (counter >= arr.length -1) {
    return;
  }
  counter++;
  n++;
  x++;
  targ.style.marginTop = `${arr[counter]}vh`;
  view[0].style.marginTop = -( x * rock) + "px";
 setUpYear();
}




function experinceUp() {
  if (counter <= 0) {
    return;
  }
  counter--;
  n--;
  x--;
  targ.style.marginTop = `${arr[counter]}vh`;
  view[0].style.marginTop = - ( x * rock) + "px";
  
  setUpYear();
  
}


function setUpYear() {
  let indicator = document.getElementsByClassName("ball")[0];
  switch(x) {
  case 1:
    yearsFixer[1].classList.add("fixerAs");
    yearsFixer[0].classList.remove("fixerAs");
    yearsFixer[2].classList.remove("fixerAs");
    break;
  case 2:
    yearsFixer[2].classList.add("fixerAs");
    yearsFixer[1].classList.remove("fixerAs");
    yearsFixer[0].classList.remove("fixerAs");
    break;
  case 0:
    yearsFixer[0].classList.add("fixerAs");
    yearsFixer[1].classList.remove("fixerAs");
    yearsFixer[2].classList.remove("fixerAs");
    break;
    default: return;
  }
}
        user.addEventListener("click", experinceDown, false );
        user2.addEventListener("click", experinceUp, false);
    })
    .catch(err => alert(err.message));
}

function fetchSkillsTemplate() {
    let smart = mainReview.children.length;
   while(smart) {
       smart--;
       mainReview.children[smart].remove();
   }
   mainReview.style.marginBottom = "0px";
    let url = "https://raw.githubusercontent.com/freelancer2020/Portofilio2020/master/templates/skills.html";
    let header = new Headers();
    let init = {
        method: "GET",
        cache: "no-cache",
    }
    
    let reg = new Request(url, init);
    fetch(reg)
    .then(response => {
        return response.text();
    })
    .then(content => {
        let parser = new DOMParser();
        let contents =  parser.parseFromString(content, "text/html");
        let target = document.getElementsByClassName("container")[0];
        let frame_A = document.createElement("div");
        frame_A.classList.add("mig_4");
        frame_A.style.cssText = `
        display: flex;
        overflow-x: hidden;
        align-items: center;`;
        target.append(frame_A);
        let initContent = contents.getElementById("skills-template");
        let renderContent = initContent.content.cloneNode(true);
        frame_A.append(renderContent);
    })
    .catch(err => alert(err.message));
}

let [sec, minute, hour] = [0, 0, 0];
function fetchLanguagesTemplate() {
    let smart = mainReview.children.length;
   while(smart) {
       smart--;
       mainReview.children[smart].remove();
   }
   mainReview.style.marginBottom = "0px";
    let url = "https://raw.githubusercontent.com/freelancer2020/Portofilio2020/master/templates/languages.html";
    let header = new Headers();
    let init = {
        method: "GET",
        cache: "no-cache",
    }
    
    let reg = new Request(url, init);
    fetch(reg)
    .then(response => {
        return response.text();
    })
    .then(content => {
        let parser = new DOMParser();
        let contents =  parser.parseFromString(content, "text/html");
        let target = document.getElementsByClassName("container")[0];
        let frame_A = document.createElement("div");
        frame_A.classList.add("mig_5");
        frame_A.style.cssText = `
        display: flex;
        overflow-x: hidden;
        align-items: center;`;
        target.append(frame_A);
        let initContent = contents.getElementById("language");
        let renderContent = initContent.content.cloneNode(true);
        frame_A.append(renderContent);
    })
    .then( () => {
          
          function setTime() {
                 let h = document.getElementsByClassName("timer-hour");
                 let m = document.getElementsByClassName("timer-minute");
                 let s = document.getElementsByClassName("timer-sec");

            for (let i = 0; i < s.length && i < m.length && i < h.length; i++) {
                  s[i].textContent = sec;
                  m[i].textContent = minute;
                  h[i].textContent = hour;
               }
  
            sec++;
         if (sec > 59) {
            minute++;
           sec = 0;
         }
          if (minute > 59) {
             hour++;
             minute = 0;
         }
           if (hour > 23) {
             sec = 0;
              minute = 0;
              hour = 0;
         }
  
    }
        
            setInterval( () => {
                setTime();
         }, 1000);
        
    })
    .catch(err => alert(err.message));
}

function fetchAwardTemplate() {
    let smart = mainReview.children.length;
   while(smart) {
       smart--;
       mainReview.children[smart].remove();
   }
   mainReview.style.marginBottom = "0px";
    let url = "https://raw.githubusercontent.com/freelancer2020/Portofilio2020/master/templates/award.html";
    let header = new Headers();
    let init = {
        method: "GET",
        cache: "no-cache",
    }
    
    let reg = new Request(url, init);
    fetch(reg)
    .then(response => {
        return response.text();
    })
    .then(content => {
        let parser = new DOMParser();
        let contents =  parser.parseFromString(content, "text/html");
        let target = document.getElementsByClassName("container")[0];
        let frame_A = document.createElement("div");
        frame_A.classList.add("mig_6");
        frame_A.style.cssText = `
        display: flex;
        overflow-x: hidden;
        align-items: center;`;
        target.append(frame_A);
        let initContent = contents.getElementById("award");
        let renderContent = initContent.content.cloneNode(true);
        frame_A.append(renderContent);
    })
    .then( () => {
        let styleScript = document.createElement("script");
        styleScript.classList.add("porter");
        styleScript.src = "https://kit.fontawesome.com/7d2d0643b6.js";
        styleScript.crossOrigin = "anonymous";
        let headTarg = document.getElementsByTagName("head")[0];
        headTarg.append(styleScript);
    })
    .catch(err => alert(err.message));
}

function fetchInterestsTemplate() {
    let smart = mainReview.children.length;
   while(smart) {
       smart--;
       mainReview.children[smart].remove();
   }
   mainReview.style.marginBottom = "0px";
    let url = "https://raw.githubusercontent.com/freelancer2020/Portofilio2020/master/templates/interests.html";
    let header = new Headers();
    let init = {
        method: "GET",
        cache: "no-cache",
    }
    
    let reg = new Request(url, init);
    fetch(reg)
    .then(response => {
        return response.text();
    })
    .then(content => {
        let parser = new DOMParser();
        let contents =  parser.parseFromString(content, "text/html");
        let target = document.getElementsByClassName("container")[0];
        let frame_A = document.createElement("div");
        frame_A.classList.add("mig_7");
        frame_A.style.cssText = `
        display: flex;
        overflow-x: hidden;
        align-items: center;`;
        target.append(frame_A);
        let initContent = contents.getElementById("interests");
        let renderContent = initContent.content.cloneNode(true);
        frame_A.append(renderContent);
    })
    .then( () => {
        let styleScript = document.createElement("script");
        styleScript.classList.add("porter");
        styleScript.src = "https://kit.fontawesome.com/7d2d0643b6.js";
        styleScript.crossOrigin = "anonymous";
        let headTarg = document.getElementsByTagName("head")[0];
        headTarg.append(styleScript);
    })
    .catch(err => alert(err.message));
}

function openContent(e) {
    if (!e) {
        e = window.event;
    }
    let target = e.currentTarget;
    switch(target.id) {
        case "control-aboutA":
            fetchAboutTemplate();
            break;
        case "control-aboutB":
            fetchAboutTemplate();
            break;
        case "control-aboutC":
            fetchAboutTemplate();
            break;
        case "control-edA":
            fetchEducationTemplate();
            break;
        case "control-edB":
            fetchEducationTemplate();
            break;
        case "control-edC":
            fetchEducationTemplate();
        case "control-exA":
            fetchExperinceTemplate();
            break;
        case "control-exB":
            fetchExperinceTemplate();
            break;
        case "control-exC":
            fetchExperinceTemplate();
            break;
        default: return;
    }
}
const userControl = document.getElementsByClassName("control-panel")[0];
//userControl.addEventListener("click", openContent, false);



//alternative function

function openAbout() {
    fetchAboutTemplate();
    for (let i = 0; i < global_Array.length; i++) {
        global_Array[i].classList.remove("greenFrame");
    }
    this.classList.add("greenFrame");
}

function openEducation() {
    fetchEducationTemplate();
    for (let i = 0; i < global_Array.length; i++) {
        global_Array[i].classList.remove("greenFrame");
    }
    this.classList.add("greenFrame");
}

function openEx() {
    fetchExperinceTemplate();
    for (let i = 0; i < global_Array.length; i++) {
        global_Array[i].classList.remove("greenFrame");
    }
    this.classList.add("greenFrame");
}

function openSkills() {
    fetchSkillsTemplate();
    
    for (let i = 0; i < global_Array.length; i++) {
        global_Array[i].classList.remove("greenFrame");
    }
    this.classList.add("greenFrame");
}

function openLanguages() {
    fetchLanguagesTemplate();
    for (let i = 0; i < global_Array.length; i++) {
        global_Array[i].classList.remove("greenFrame");
    }
    this.classList.add("greenFrame");
}

function openAward() {
    fetchAwardTemplate();
    for (let i = 0; i < global_Array.length; i++) {
        global_Array[i].classList.remove("greenFrame");
    }
    this.classList.add("greenFrame");
}

function openInterests() {
    fetchInterestsTemplate();
    for (let i = 0; i < global_Array.length; i++) {
        global_Array[i].classList.remove("greenFrame");
    }
    this.classList.add("greenFrame");
}


let user_click_1 = document.getElementsByClassName("item")[0];
let user_click_2  = document.getElementsByClassName("item")[1];
let user_click_3 = document.getElementsByClassName("item")[2];
let user_click_4 = document.getElementsByClassName("item")[3];
let user_click_5 = document.getElementsByClassName("item")[4];
let user_click_6 = document.getElementsByClassName("item")[5];
let user_click_7 = document.getElementsByClassName("item")[6];
let global_Array = [user_click_1, user_click_2, user_click_3, user_click_4, user_click_5, user_click_6, user_click_7];


user_click_1.onclick = openAbout;
user_click_2.onclick = openEducation;
user_click_3.onclick = openEx;
user_click_4.onclick = openSkills;
user_click_5.onclick = openLanguages;
user_click_6.onclick = openAward;
user_click_7.onclick = openInterests;



// Mobile device functions
const menu = document.getElementsByClassName("container-mobile")[0];
function openMobileMenu() {
    menu.classList.toggle("mobileAd");
}

const sig = document.getElementById("clickable");
sig.addEventListener("click", openMobileMenu, false);

function initMobileMenu() {
    menu.classList.toggle("openView");
    let targov = document.getElementsByClassName("mobile-home-container")[0];
    targov.style.marginTop = "-96vh";
}

const userInit = document.getElementById("hinter");
userInit.addEventListener("click", initMobileMenu, false);

function testing() {
    let targov = document.getElementsByClassName("mobile-home-container")[0];
    targov.style.marginTop = "-4vh";
    menu.classList.toggle("openView");
    let i = targov.children.length;
    while(i) {
        i--;
        targov.children[i].remove();
    }

    let mobileRep = document.createElement("div");
    targov.append(mobileRep);
    let url = "https://raw.githubusercontent.com/freelancer2020/freelancer2020.github.io/master/MobileTemplates/mobileAbout.html";
    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(page => {
        let parser = new DOMParser();
        let wholePage = parser.parseFromString(page, "text/html");
        let contentPage = wholePage.getElementById("about-mobile");
        let contentTemplate = contentPage.content.cloneNode(true);
        mobileRep.append(contentTemplate);
    })
    .catch(err => console.log(err.message));
}

const userA = document.getElementsByClassName("item-mobile")[0];
userA.onclick = testing;

function mobileEd() {
    let targov = document.getElementsByClassName("mobile-home-container")[0];
    targov.style.marginTop = "-4vh";
    menu.classList.toggle("openView");
    let i = targov.children.length;
    while(i) {
        i--;
        targov.children[i].remove();
    }

    let mobileRep = document.createElement("div");
    targov.append(mobileRep);
    let url = "https://raw.githubusercontent.com/freelancer2020/freelancer2020.github.io/master/MobileTemplates/educationMobile.html";
    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(page => {
        let parser = new DOMParser();
        let wholePage = parser.parseFromString(page, "text/html");
        let contentPage = wholePage.getElementById("mobile-education");
        let contentTemplate = contentPage.content.cloneNode(true);
        mobileRep.append(contentTemplate);
    })
    .catch(err => console.log(err.message));
}
const userB = document.getElementsByClassName("item-mobile")[1];
userB.onclick = mobileEd;

function mobileEx() {
    let targov = document.getElementsByClassName("mobile-home-container")[0];
    targov.style.marginTop = "-4vh";
    menu.classList.toggle("openView");
    let i = targov.children.length;
    while(i) {
        i--;
        targov.children[i].remove();
    }

    let mobileRep = document.createElement("div");
    targov.append(mobileRep);
    let url = "https://raw.githubusercontent.com/freelancer2020/freelancer2020.github.io/master/MobileTemplates/mobileJobs.html";
    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(page => {
        let parser = new DOMParser();
        let wholePage = parser.parseFromString(page, "text/html");
        let contentPage = wholePage.getElementById("mobileJobstemplate");
        let contentTemplate = contentPage.content.cloneNode(true);
        mobileRep.append(contentTemplate);
    })
    .then( () => {
        let n = 0;
    const collectionPoints = document.getElementsByClassName("jobs-points");
    let views = document.getElementsByClassName("jobs-view")[0].children;
    
    function arrowLeft() {
        if (n >= 2) {
            return;
        }
        n++;
        for (let x = 0; x < collectionPoints.length; x++) {
            collectionPoints[x].classList.remove("rops");
        }
        views[0].style.marginLeft =  - n * views[0].clientWidth + "px";
        collectionPoints[n].classList.add("rops");
    }


    function arrowRight() {
        if (n <= 0) {
            return;
        }
        n--;
       
        for (let z = 0; z < collectionPoints.length; z++) {
            collectionPoints[z].classList.remove("rops");
        }
        views[0].style.marginLeft =  - n * views[0].clientWidth + "px";
        collectionPoints[n].classList.add("rops");
    }

    const user = document.getElementsByClassName("jobs-box-arrow-left")[0];
    const user2 = document.getElementsByClassName("jobs-box-arrow-right")[0];

    user.addEventListener("click", arrowLeft, false);
    user2.addEventListener("click", arrowRight, false);
    
   //jQuery swipe*******************************************************************************
    let tam = document.getElementsByClassName("accenture")[0];
    $(".jobs-view").swipe({
        swipeStatus: function(event, phase, direction, distance, finges, fingersData, currentDirection) {
            if (direction == "left" && phase == "end") {
                if (n >= 2) {
                    return;
                }
                for (let x = 0; x < collectionPoints.length; x++) {
                    collectionPoints[x].classList.remove("rops");
                }
                n++;
                tam.style.marginLeft = - n * tam.clientWidth + "px";
                collectionPoints[n].classList.add("rops");
            }
            if (direction == "right" && phase == "end") {
                if (n <= 0) {
                    return;
                }
                for (let x = 0; x < collectionPoints.length; x++) {
                    collectionPoints[x].classList.remove("rops");
                }
                n--;
                tam.style.marginLeft = - n * tam.clientWidth + "px";
                collectionPoints[n].classList.add("rops");

            }
        }
    })
    


    })
    .catch(err => alert(err.message));
}

const userC = document.getElementsByClassName("item-mobile")[2];
userC.onclick = mobileEx;


function mobileSkills() {
    let targov = document.getElementsByClassName("mobile-home-container")[0];
    targov.style.marginTop = "-4vh";
    menu.classList.toggle("openView");
    let i = targov.children.length;
    while(i) {
        i--;
        targov.children[i].remove();
    }



    let mobileRep = document.createElement("div");
    targov.append(mobileRep);
    let url = "https://raw.githubusercontent.com/freelancer2020/freelancer2020.github.io/master/MobileTemplates/mobileSkilss.html";
    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(page => {
        let parser = new DOMParser();
        let wholePage = parser.parseFromString(page, "text/html");
        let contentPage = wholePage.getElementById("mobileSkills");
        let contentTemplate = contentPage.content.cloneNode(true);
        mobileRep.append(contentTemplate);
    })
    .then( () => {
        const slide = document.getElementsByClassName("header-slider")[0];
        const selectWord = document.getElementsByClassName("slider-word")[0];
        const targMobile = document.getElementsByClassName("container-level-items")[0];
        const  allPoints = document.getElementsByClassName("pointer");

slide.onclick = function() {
  const arrows = document.getElementsByClassName("arrow")[0];
  targMobile.classList.toggle("open-level");
  arrows.classList.toggle("arrow-rotate");
}

function pointActive() {
    for (let x = 0; x < allPoints.length; x++) {
        allPoints[x].classList.remove("pointed");
    }
    this.classList.add("pointed");
        setTimeout( () => {
            targMobile.classList.remove("open-level");
            selectWord.textContent = this.parentElement.previousElementSibling.textContent;
        }, 500);
}

allPoints[0].onclick = function() {
    setTimeout( () => {
        fetchIntermediateLevel();
    }, 500);
}

function fetchIntermediateLevel() {
    const skillsPlace = document.getElementsByClassName("mobile-skills-bottom")[0];
    let i = skillsPlace.children.length;
    while(i) {
        i--;
        skillsPlace.children[i].remove();
     }
    const skillsBase = document.createElement("div");
    skillsPlace.append(skillsBase);
    let url = "https://raw.githubusercontent.com/freelancer2020/freelancer2020.github.io/master/MobileTemplates/intermediateLevel.html";
    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(data => {
        let parser = new DOMParser();
        let initData = parser.parseFromString(data, "text/html");
        let initPage = initData.getElementById("interMediate");
        skillsBase.append(initPage.content.cloneNode(true));
    })
    .catch(err => alert(err.message));
}

for (let i = 0; i < allPoints.length; i++) {
    allPoints[i].addEventListener("click", pointActive, false);
}

    })
    .catch(err => alert(err.message));
}

const userD = document.getElementsByClassName("item-mobile")[3];
userD.onclick = mobileSkills;

//```````````````````````````````````````````````````````````````````````````

let  catchPointer;

function fetchAdvancedeLevel() {
    const skillsPlace = document.getElementsByClassName("mobile-skills-bottom")[0];
    let i = skillsPlace.children.length;
    while(i) {
        i--;
        skillsPlace.children[i].remove();
     }
    const skillsBase = document.createElement("div");
    skillsPlace.append(skillsBase);
    let url = "https://raw.githubusercontent.com/freelancer2020/freelancer2020.github.io/master/MobileTemplates/advancedLevel.htmll";
    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(data => {
        let parser = new DOMParser();
        let initData = parser.parseFromString(data, "text/html");
        let initPage = initData.getElementById("container-advanced");
        skillsBase.append(initPage.content.cloneNode(true));
        let logos = document.createElement("script");
        logos.src = "https://kit.fontawesome.com/7d2d0643b6.js";
        logos.crossOrigin = "anonymous";
        document.getElementsByTagName("head")[0].append(logos);
    })
    .then( () => {
        catchPointer = document.getElementsByClassName("pointer");
    })
   .catch(err => alert(err.message));
}


catchPointer[1].onclick = function() {
    setTimeout( () => {
        fetchAdvancedeLevel();
    }, 500);
}



   
