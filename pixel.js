
  for (let i = 0; i < 20; i++){
    let canvas = document.getElementsByClassName('container')[0];
    let column = document.createElement('div');
    canvas.appendChild(column);

    column.style.height = "20px";
    column.style.width = '20px';
    column.style.float = 'left';


  for (let j = 0; j < 20; j++){
    
    let rows = document.createElement('div');
    column.appendChild(rows);

    rows.style.height = "20px";
    rows.style.width = '20px';
    rows.style.backgroundColor = 'clear';
    rows.style['border-width'] = "1px";
    rows.style['border-style'] = 'solid';
    rows.style.float = 'left';

      }
    }
