var up = document.getElementById('up');
var down = document.getElementById('down');
var skil = document.getElementById('skil');
var projectt = document.getElementById('list_project');
// project
const list_skils = ["HTML", "TAILWINDCSS", "PHP"]
const projects = {
    'HTML' : ['PROJECT','HTML'],
    'TAILWINDCSS' : ['PROJECT','TAILWINDCSS','walaupun'],
    'PHP' : ['PROJECT','PHP']
}

function displayProjects(skill) {
    projectt.innerHTML = '';
    let project = projects[skill]; // Ambil array proyek yang terkait dengan skill saat ini

    if (project) {
        console.log(`Projects for ${skill}:`);
        project.forEach(proj => {
            console.log(`- ${proj}`);
            const li = document.createElement('li');
            li.textContent = `${proj}`
            projectt.appendChild(li)
        });
    } else {
        console.log(`No projects found for ${skill}`);
    }
}
var i = 0;
skil.innerText = list_skils[i]
up.addEventListener('click', ()=>{
    
    if(i == list_skils.length -1){
        false; 
    } else {
        var p = list_skils[++i]
        displayProjects(p)
        // console.log(+i)
    }
})

down.addEventListener('click', ()=>{
    if(i <= 0){
        false;
    }else{
        console.log(--i)
        displayProjects(p)
    }
})
