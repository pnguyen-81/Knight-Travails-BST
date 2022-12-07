// const KnightTravail=(start, end)=>{
//     let startCoord = int(start)
//     console.log(startCoord)
//     let endCoord = int(end)
//     console.log(endCoord)
//     let queu = [startCoord]
//     console.log(queu)
//     const board = {}
//     while (!(queu[0][0]==endCoord[0]&&queu[0][1]==endCoord[1])){
//         const loc = queu.shift()
//         console.log('this is the move '+loc)
//         const moves = (filterMoves(getMoves(loc)))
//         console.log(moves)
//         moves.forEach(move => {
//             queu.push(move);
//             board[move] = board[loc];
//         }
//             )
//     }
//     ('this is the move '+queu[0])
//     console.log(board[end])
//     return board[end]
// }

// const int=(arr)=>{
//     return [parseInt(arr[0]),parseInt(arr[1])]
// }

// const getMoves=loc=>{
//     const moves = []
//     moves.push([loc[0]+1, loc[1]-2]);
//     moves.push([loc[0]+2, loc[1]-1]);
//     moves.push([loc[0]+1, loc[1]+2]);
//     moves.push([loc[0]+2, loc[1]+1]);
//     moves.push([loc[0]-1, loc[1]-2]);
//     moves.push([loc[0]-1, loc[1]+2]);
//     moves.push([loc[0]-2, loc[1]-1]);
//     moves.push([loc[0]-2, loc[1]+1]);
//     return moves
// }

// const filterMoves=moves=>{
//     return moves.filter(move => {
//         return move[0] >= 0 && move[0] <=8 && move[1] >= 0 && move[1]
//     })
// }

// export {KnightTravail}

import {Node} from './node';
import {move} from './gameboard';

const KnightTravail=(start, target)=>{
    const begin = new Node(int(start));
    const end = int(target);

    //queue for BFS
    let q = [begin];
    let current = begin;
    let finalNode

    //BFS
    while (!(current.data[0]==end[0]&&current.data[1]==end[1])){
        current = q.shift()
        let children = filterMoves(getMoves(int(current.data)))
        current.children = children
        //Creating node for every children and keep track of the parent, not the children since children can lead back to parents, creating a loop.
        for (let child of children){
            if (child[0]==end[0]&&child[1]==end[1]){
                finalNode = new Node(child, current)
                current = finalNode
            } else {
                q.push(new Node(child, current))
            }
        }
    }

    //Print out for the coordinates of the steps taken
    let steps = [];
    steps.push(finalNode.data);
    while (finalNode.parent!=null){
        steps.push(finalNode.parent.data);
        finalNode=finalNode.parent;
    };
    console.log(`You made it in ${steps.length-1} moves!`);
    let count = 0;
    (function printOut(n){
        setTimeout(function(){
            console.log(steps[n]);
            move(steps[n],count);
            count++;
            if (n > 0){
                n--;
                printOut(n)
            }
        }, 500)
    })(steps.length-1);
    count = 0;
};

//Listing out all possible moves at the current location
const getMoves=loc=>{
    const moves = []
    moves.push([loc[0]+1, loc[1]-2]);
    moves.push([loc[0]+2, loc[1]-1]);
    moves.push([loc[0]+1, loc[1]+2]);
    moves.push([loc[0]+2, loc[1]+1]);
    moves.push([loc[0]-1, loc[1]-2]);
    moves.push([loc[0]-1, loc[1]+2]);
    moves.push([loc[0]-2, loc[1]-1]);
    moves.push([loc[0]-2, loc[1]+1]);
    return moves
};

//filtering the moves that is valid with coordinate between 0 and 7
const filterMoves=moves=>{
    return moves.filter(move => {
        return move[0] >= 0 && move[0] <=7 && move[1] >= 0 && move[1] <= 7
    });
};

//Parse Int for array just in case
function int(arr){
    return [parseInt(arr[0]),parseInt(arr[1])]
};

export {KnightTravail};