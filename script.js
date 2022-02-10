
// POPUP SCREEN CONTACT ME OPEN CLOSE. 
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

// SETUP SKILL PROGRESS BARS 
const progressBarJava = document.querySelector(".java");
const progressBarSpring = document.querySelector(".spring");
const progressBarHTML = document.querySelector(".HTML");
const progressBarJS = document.querySelector(".js");
const progressBarMK = document.querySelector(".mk");
const progressBarGit = document.querySelector(".git");

const changeProgressSkill = (progress) => {
  progressBarJava.style.width = `${progress = 80}%`;
  progressBarSpring.style.width = `${progress = 50}%`;
  progressBarHTML.style.width = `${progress = 60}%`;
  progressBarJS.style.width = `${progress = 20}%`;
  progressBarMK.style.width = `${progress = 80}%`;
  progressBarGit.style.width = `${progress = 50}%`;
};

setTimeout(() => changeProgressSkill(100), 1000);

// SETUP LANGUAGE PROGRESS BARS
const progressBarDutch = document.querySelector(".dutch");
const progressBarEnglish = document.querySelector(".english");
const progressBarFrench = document.querySelector(".french");

const changeProgressLanguage = (progress) => {
    progressBarDutch.style.width = `${progress = 100}%`;
    progressBarEnglish.style.width = `${progress = 75}%`;
    progressBarFrench.style.width = `${progress = 20}%`;
};

setTimeout(() => changeProgressLanguage(100), 1000);

// SHOW AND HIDE THE EXPERIENCE TABLE
function hideShowTable() {

    let actionOnButton = document.getElementById("workExperience")

    if( actionOnButton.style.display === "block") {
        actionOnButton.style.display = "none";
    } else {
        actionOnButton.style.display = "block";
    }
}