for (let i=0; i<6; i++){
document.querySelectorAll('.baseball-upper')[i].addEventListener('mouseover',()=>{
document.querySelectorAll('.baseball-under')[i].style.marginTop = '-205px'
})
document.querySelectorAll('.baseball-upper')[i].addEventListener('mouseout',()=>{
document.querySelectorAll('.baseball-under')[i].style.marginTop = '0px'
})
}


