let knight = document.createElement('div')
let start
knight.classList.add('knight')
const gameboard = () =>{
    start = [0,0]
    for (let i = 0; i < 8; i++){
    const row = document.createElement('div')
    row.classList.add('row')
    row.dataset.row = i
    let n = i;
    for (let e = 0; e < 8; e++){
        const tile = document.createElement('div')
        tile.classList.add('tile')
        tile.dataset.column = e
        tile.dataset.row = row.dataset.row
        if ((n+e)%2==0){
            tile.style.backgroundColor = 'white'
        } else {
            tile.style.backgroundColor = 'black'
        }
        row.appendChild(tile)
        tile.addEventListener('click', ()=>{
            if(
            (parseInt(start[0])+1 == tile.dataset.row && parseInt(start[1])+2 == tile.dataset.column) ||
            (parseInt(start[0])+1 == tile.dataset.row && parseInt(start[1])-2 == tile.dataset.column) ||
            (parseInt(start[0])-1 == tile.dataset.row && parseInt(start[1])+2 == tile.dataset.column) ||
            (parseInt(start[0])-1 == tile.dataset.row && parseInt(start[1])-2 == tile.dataset.column) ||
            (parseInt(start[0])+2 == tile.dataset.row && parseInt(start[1])+1 == tile.dataset.column) ||
            (parseInt(start[0])+2 == tile.dataset.row && parseInt(start[1])-1 == tile.dataset.column) ||
            (parseInt(start[0])-2 == tile.dataset.row && parseInt(start[1])+1 == tile.dataset.column) ||
            (parseInt(start[0])-2 == tile.dataset.row && parseInt(start[1])-1 == tile.dataset.column) ){
                tile.appendChild(knight);
                start = [tile.dataset.row, tile.dataset.column]; 
            } else {
            
            }})
    }
    document.querySelector('.gameboard').appendChild(row)
    }
document.querySelector(`[data-row='0']>[data-column='0']`).appendChild(knight)
}

const move = (target, n=0)=>{
    start = target
    let square = document.querySelector(`[data-row='${target[0]}']>[data-column='${target[1]}']`)
    square.textContent = `${n}`
    square.style.backgroundColor = 'red'
    square.appendChild(knight)
    square.classList.add('active')
}

export {gameboard, move}
