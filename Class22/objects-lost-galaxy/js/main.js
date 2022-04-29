//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.brand = 'Logitech'
mouse.type = 'left-handed'
mouse.color = 'black'
mouse.ergonimic = true

mouse.leftClic = function() {console.log('left click')}
mouse.rightClic = function() {console.log('right click')}
mouse.scroll = function() {console.log('scroll')}