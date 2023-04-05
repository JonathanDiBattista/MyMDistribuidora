const togglemenuelement = document.getElementById('menu--hamburguesa')
const mainmenuelement = document.getElementById('main-menu')

togglemenuelement.addEventListener('click',()=>{
    mainmenuelement.classList.toggle('main-menu--show')
})