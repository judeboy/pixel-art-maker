document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");

let grid = function () {
  for (let i = 0; i < 20; i++) {
    let canvas = document.getElementById('container');
    let column = document.createElement('div');
    canvas.appendChild(column)
    column.style.height = '20px'
    column.style.width = '20px'
    column.style.float = 'left'
    column.className += 'pixels'

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

  let changeGridColor = function (event) {
    event.target.style.backgroundColor = paintBrush;
    return false;
  }

  for (let i = 0; i < document.getElementsByClassName('pixels').length; i++) {
    let pixel = document.getElementsByClassName('pixels')[i]
    console.log(pixel)
    pixel.addEventListener('click', changeGridColor)
  }
})

function setPaletteEvent () {
  let palette = document.getElementById('palette');
  palette.addEventListener('click', changeColorOfPaintBrush)
}

let paintBrush = '#ff0000';

function changeColorOfPaintBrush(event){paintBrush = event.target.style.backgroundColor;
}
setPaletteEvent();



//
// })


// let removeColor = function (event) {
//   event.target.style.backgroundColor = 'white';
//   return false;
// }
// let palette = function () {
//   for (let y = 0; y < 4; y++) {
//     let color = document.getElementById('con');
//     let choice = document.createElement('div');
//     color.appendChild(choice)
//     choice.style['border-style'] = '1px'
//     choice.style.backgroundColor = 'black'
//     choice.style.width = '20px'
//     choice.style.height = '20px'
//     choice.style.float = 'left'
//     choice.style.margin = '5px'
//   }
// }
// palette()
