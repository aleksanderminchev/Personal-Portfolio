(async function setActive(){
    const active= document.getElementById("resume");
    active.classList.add("active");

    const inactive=[document.getElementById("home"),document.getElementById("projects"),document.getElementById("contacts")];
    inactive.map(element=>{
        element.classList.remove("active");
    })
})(); 