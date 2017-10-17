document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");

let grid = function () {
  for (let i = 0; i < 40; i++) {
    let canvas = document.getElementById('container');
    let column = document.createElement('div');
    canvas.appendChild(column)
    column.style.height = '20px'
    column.style.width = '20px'
    column.style.float = 'left'
    column.className += 'pixels'
    column.style['background-color'] = 'clear'

    for (let j = 0; j < 20; j++) {
      let rows = document.createElement('div');
      column.appendChild(rows)
      rows.style.height = '20px'
      rows.style.width = '20px'
      rows.style['border-width'] = '1px'
      rows.style['border-style'] = 'solid'
      rows.style.float = 'left'
      rows.className += 'pixels'
    }
  }
}
  grid()

  let paintBrush = 'clear'

  let changeColorOfPaintBrush = function (event){
    paintBrush = event.target.style.backgroundColor
  }

  let setPaletteEvent = function () {
    let palette = document.getElementById('palette')
    palette.addEventListener('click', changeColorOfPaintBrush)
  }

  setPaletteEvent()

  let changeGridColor = function (event) {
    event.target.style.backgroundColor = paintBrush
  }

  for (let i = 0; i < document.getElementsByClassName('pixels').length; i++) {
    let pixel = document.getElementsByClassName('pixels')[i]
    console.log(pixel)
    pixel.addEventListener('click', changeGridColor)
  }
})
