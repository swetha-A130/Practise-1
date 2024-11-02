const openNav = document.getElementById("open")
const closeNav = document.getElementById("close")
const sideNavBar = document.querySelector(".sidebar")
const logbt=document.getElementById("Login-btn")
const modal=document.getElementById("Loginsection")
const mainsection=document.querySelectorAll(".main .rev")
const closebtn=document.getElementById("closebtn")

logbt.onclick=hidelogin
function hidelogin(){
    sideNavBar.style.display = "none"; 
    mainsection.forEach(function(item){
        item.style.display="none";
    })
    modal.style.display="block";
}
closebtn.onclick = showlogin;
function showlogin() {
    sideNavBar.style.display = "block"; 
    mainsection.forEach(function(item) {
        item.style.display = "block";
    });
    modal.style.display = "none"; // This should hide the modal
}

// Function to openthe sidebar
openNav.addEventListener('click', openSideNavBar) 
    function openSideNavBar() {
        sideNavBar.style.display='block';//show the sidebar
};

// Function to close the sidebar
closeNav.addEventListener('click',closeSideNavBar)
function closeSideNavBar() {
    sideNavBar.style.display = 'none'; // Hide the sidebar
}

//showing the colors in the box
const mynewcolors=document.getElementById("mycolors")
const mynewbox=document.getElementById("box")
mynewcolors.addEventListener('change',function()
{
    mynewbox.style.background=mynewcolors.value
    mynewbox.textContent=mynewcolors.value
})

//Adding the border to the header
const navborder=document.getElementById("addborder")
navborder.addEventListener('click',addingborder)
function addingborder(){
    document.querySelector("header").style.border="5px solid black"
}
//For removing the border
//if(10<20){
   // navborder.removeEventListener('click',addingborder)
//}

const mainform=document.getElementById("myform")
const username=document.getElementById("nameInput")
const inputName=document.getElementById("name")
mainform.addEventListener('submit',function(e){
    e.preventDefault(e)
    const myusername=username.value
    inputName.textContent=myusername
    mainform.reset()
})
mainform.addEventListener('input',function(e){
    e.preventDefault(e)
    const myusername=username.value
    inputName.textContent=myusername
})
///changing from darktheme to lighttheme
const darkTheme = function() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#2E282A"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}
///changing from lighttheme to darktheme
const lightTheme = function() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".dark-theme").textContent = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC"

}





function eleHover(element) {
    element.style.backgroundColor = "yellow";
}

function eleOut(item) {
    item.style.backgroundColor = "#DEE7E7"
}

const changeCompany = function() {
    document.querySelector("#company").textContent = "Sales Force";
};

const normal = function() {
    document.querySelector("#company").textContent = "Company"
}

const keyPressed = function() {
    document.querySelector("body").style.backgroundColor = "white"
}

const keyDown = function() {
    document.querySelector("body").style.backgroundColor = "yellow"
}
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyPressed);
