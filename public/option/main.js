var up = document.getElementById('up');
var down = document.getElementById('down');
var skil = document.getElementById('skil');
var project = document.getElementById('list_project');
// LIST SKILL
const list_skils = ["HTML", "TAILWINDCSS"];
// project
const projects = {
    HTML : ['PROJECT','HTML'],
    TAILWINDCSS : ['PROJECT','TAILWINDCSS']
}
Object.keys(projects).map((v,i) => {
    console.log(projects[v])
})
event
// var y = 0
// while (y < list_skils.length){
//     console.log(list_skils[y])
//     console.log(projects[y] + " - ")
//     if(list_skils[y] === projects[y]){
//     }
//     y++;
// }

// for(let [proj, value] of Object.entries(projects) ){
//     console.log(proj + " = " + value)
//     console.log(value)
//     project.innerText =  value
//     // list_skils.forEach(skill => {
//     //     console.log(`name : ${skill} = `, projects[skill])
//     //     // if()
//     // })
// }
// list_skils.forEach(skill => {
//     if (projects[skill]) {
//         // console.log(`Projects for ${skill}:`, projects[skill]);
//         projects[skill].forEach((proj, index) => {
//             project.innerText = `  ${index + 1}. ${proj}`;
//             console.log(`  ${index + 1}. ${proj}`)
//         });
//     } else {
//         console.log(`No projects found for ${skill}`);
//     }
// });
var i = 0;
// MASUKKAN SKILL KE DALAM LIST
let skils = list_skils[i]
skil.innerText = skils;

up.addEventListener('click', ()=>{
    if(i == list_skils.length - 1){
        return; 
    } else {
        skil.innerText = list_skils[++i];
    }
})

down.addEventListener('click', ()=>{
    if(i === 0){
        return; 
    } else {
        skil.innerText = list_skils[--i];
    }
})
