//Pages variables
let trainingPage = document.getElementById("trainingPage");
let assetsPage = document.getElementById("assetsPage");
let aboutPage = document.getElementById("aboutPage");

//Navbar buttons variables
let navBtnTraining = document.getElementById("navBtnTraining");
let navBtnAssets = document.getElementById("navBtnAssets");
let navBtnAbout = document.getElementById("navBtnAbout");

//SideBar buttons variables
let sideBtnIphone = document.getElementById("sideBtnIphone");
let sideBtnIpad = document.getElementById("sideBtnIpad");
let sideBtnNpiTracker = document.getElementById("sideBtnNpiTracker");
let sideBtnDemoContent = document.getElementById("sideBtnDemoContent");

//Article variables
let iphoneArticle = document.getElementById("iphoneArticle");
let ipadArticle = document.getElementById("ipadArticle");
let npiTrackerArticle = document.getElementById("npiTrackerArticle");
let demoContentArticle = document.getElementById("demoContentArticle");
let pickOne = document.getElementById("pickOne")

//Navbar eventListeners
navBtnTraining.addEventListener("click", goToTraining);
navBtnAssets.addEventListener("click", goToAssets);
navBtnAbout.addEventListener("click", goToAbout);

//Pages swap
function goToTraining() {
    pickOne.style.display = "flex";
    trainingPage.style.display = "flex";
    assetsPage.style.display = "none";
    aboutPage.style.display = "none"

    iphoneArticle.style.display = "none";
    ipadArticle.style.display = "none";
    npiTrackerArticle.style.display = "none";
    demoContentArticle.style.display = "none"

}
function goToAssets() {
    trainingPage.style.display = "none";
    assetsPage.style.display = "flex";
    aboutPage.style.display = "none"

    iphoneArticle.style.display = "none";
    ipadArticle.style.display = "none";
    npiTrackerArticle.style.display = "none";
    demoContentArticle.style.display = "none"

}
function goToAbout() {
    trainingPage.style.display = "none";
    assetsPage.style.display = "none";
    aboutPage.style.display = "flex"

    iphoneArticle.style.display = "none";
    ipadArticle.style.display = "none";
    npiTrackerArticle.style.display = "none";
    demoContentArticle.style.display = "none"

}

//SideBar eventListeners
sideBtnIphone.addEventListener("click", showIphone);
sideBtnIpad.addEventListener("click", showIpad);
sideBtnNpiTracker.addEventListener("click", showNpiTracker);
sideBtnDemoContent.addEventListener("click", showDemoContent);

//Article swap
function showIphone() {
    pickOne.style.display = "none";
    iphoneArticle.style.display = "flex";
    ipadArticle.style.display = "none";
    npiTrackerArticle.style.display = "none";
    demoContentArticle.style.display = "none"
}

function showIpad() {
    pickOne.style.display = "none";
    iphoneArticle.style.display = "none";
    ipadArticle.style.display = "flex";
    npiTrackerArticle.style.display = "none";
    demoContentArticle.style.display = "none"
}

function showNpiTracker() {
    pickOne.style.display = "none";
    iphoneArticle.style.display = "none";
    ipadArticle.style.display = "none";
    npiTrackerArticle.style.display = "flex";
    demoContentArticle.style.display = "none"
}

function showDemoContent() {
    pickOne.style.display = "none";
    iphoneArticle.style.display = "none";
    ipadArticle.style.display = "none";
    npiTrackerArticle.style.display = "none";
    demoContentArticle.style.display = "flex"
}


