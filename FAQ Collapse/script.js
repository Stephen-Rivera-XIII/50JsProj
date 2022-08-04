const buttons = document.querySelectorAll('.faq-toggle') //select faq-toggle and enter into node list which is like an array

//on click, assign active class to panel 
buttons.forEach((button)=> {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active')
    })
})
