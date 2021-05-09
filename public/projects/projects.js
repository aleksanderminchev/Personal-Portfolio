// fetch("/api/projects").then(res => res.json()).then(console.log);
(async function setActive(){
    const active= document.getElementById("projects");
    active.classList.add("active");

    const inactive=[document.getElementById("home"),document.getElementById("contacts"),document.getElementById("resume")];
    inactive.map(element=>{
        element.classList.remove("active");
    })
})(); 
(async function getProjects() {

    const response = await fetch("/api/projects");
    const result = await response.json();

    const projectsDiv = document.getElementById("project");

    result.projects.map(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("row");

        const divColumn=document.createElement("div");
        divColumn.classList.add("col-sm-6");
        const divColumnImage=document.createElement("div");
        divColumnImage.classList.add("col-sm-6");

        const projectTitle = document.createElement("h2");
        projectTitle.classList.add("project-title");
        projectTitle.innerText = project.title;

        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.innerText = project.description;
        
        const projectURL= document.createElement("a");
        projectURL.classList.add("project-url");
        projectURL.setAttribute("href",project.gitURL);
        projectURL.innerText="Download";
        
        const technologiesInvoled= document.createElement("p");
        technologiesInvoled.classList.add("project-tech");
        technologiesInvoled.innerText=project.technologiesInvoled;


       projectDiv.appendChild(divColumn);
       divColumn.appendChild(projectTitle);
       divColumn.appendChild(projectDescription);
       divColumn.appendChild(projectURL);
        divColumn.appendChild(technologiesInvoled);

       project.images.map((image)=>{
            const projectImage= document.createElement("img");
            projectImage.classList.add("project-images");
            projectImage.setAttribute("src",image);
           projectDiv.appendChild(divColumnImage);
            divColumnImage.appendChild(projectImage);
        })
     

        const newLine=document.createElement("br");
       projectsDiv.appendChild(newLine);
        projectsDiv.appendChild(projectDiv);
    });
})();


