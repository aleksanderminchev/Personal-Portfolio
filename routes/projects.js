const router = require("express").Router();

const projects = [
    {
        title: "Nodefolio",
        description: "Created a personal portfolio with Node.js",
        gitURL: "https://github.com/aleksanderminchev/Personal-Portfolio.git",
        images: ["../projects/personalPortfolio.png"],
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    },
    {
        title:"Spring Portfolio ",
        description:"Created a personal portfolio for a university assistant with Spring Boot",
        gitURL:"https://github.com/aleksanderminchev/PortfolioWebsite.git",
        images:["../projects/potforlioOtherPerson.png"],
        technologiesInvoled:["Spring","java","HTML","CSS"]
    },{
        title:"NodeJs Study Website",
        description:"Created a website that tells you the basics of nodejs/javascript",
        gitURL:"https://github.com/aleksanderminchev/NodeJsStudyWebsite.git",
        images:["../projects/studyWebsite.png"],
        technologiesInvoled:["Node.js", "Html", "CSS"],
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


module.exports = {
    router
};
