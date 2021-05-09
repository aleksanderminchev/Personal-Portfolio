(async function setActive(){
    const active= document.getElementById("contacts");
    active.classList.add("active");

    const inactive=[document.getElementById("home"),document.getElementById("projects"),document.getElementById("resume")];
    inactive.map(element=>{
        element.classList.remove("active");
    })
})(); 