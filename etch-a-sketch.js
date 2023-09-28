let rows = 12;
let boxes = 12;
const gridHeight = 800;
const gridWidth = 800;
const rowHeight = gridHeight/rows;
const boxWidth = gridWidth/boxes;

const container = document.querySelector('#container');
document.getElementById("container").style.height = gridHeight + 'px';
document.getElementById("container").style.width = gridWidth + 'px';

function redrawGrid(){
    let proceed = 0;
    while (proceed != 1){
        rows = prompt('How many rows and columns should there be in the grid? You can not have more than 100 or less than 0.');
            if ( rows < 100 && rows > 0 && Number(rows) ==rows ){
                proceed = 1
            }
            else if(rows === null || rows === undefined){
                proceed = 1
            }
            else{
                alert('You must choose a number between 0 and 100 without letters.')
            }
    }
    if (rows === null || rows === undefined){
        alert ('User cancelled');
    }
    else{
        boxes = rows;
        removeGrid();
        drawGrid();
    }

}

function drawRows() {
    let i = 0;
    while (i<rows){
        i++;
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('id','row'+i);
        container.appendChild(row);
    }

};

function drawBoxes(){
    let i = 0;
    while (i < (boxes*rows)){
        i++
        let rowName = 'row'+ Math.ceil(i/rows);
        let row = document.querySelector('#'+ rowName);
        let box = document.createElement('div');
        box.setAttribute('id','box'+i);
        box.classList.add('box');
        row.appendChild(box);
    }
};

function drawGrid(){
    drawRows();
    drawBoxes();
    
    const arrayBoxes = document.querySelectorAll('.box');
    
    arrayBoxes.forEach(box => {
        box.addEventListener('mouseover', function hover(event) {
            //console.log('Hovered', event);
            box.classList.add('hover');
        }
        );
        box.addEventListener('mouseout', function hover(event) {
            //console.log('Left', event);
            box.classList.remove('hover');
        }
        );
        box.addEventListener('click', function click(event) {
            let classTest = box.classList.contains("click");
            if(classTest === true){
            box.classList.remove('click');
            }
            else{
                box.classList.add('click');
            }
    
        }
        );
    });
}

function removeGrid(){
    document.querySelectorAll('.box').forEach(e => e.remove());
    document.querySelectorAll('.row').forEach(e => e.remove());
}

drawGrid()