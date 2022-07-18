const panels = document.querySelectorAll('.panel') //select panel and enter into node list which is like an array

//on click, assign active class to panel 
panels.forEach((panel)=> {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
//remove active state from panel when another panel is clicked
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}