import './style.css';
import {KnightTravail} from './tree.js'
import{gameboard} from './gameboard'
gameboard()

let submit = document.querySelector('.submit')
submit.addEventListener('click',(e)=>{
    let start1 = document.querySelector('.coord1')
    let start2 = document.querySelector('.coord2')
    let start3 = document.querySelector('.coord3')
    let start4 = document.querySelector('.coord4')
    for (let i of document.querySelectorAll('input')){
        if (!i.checkValidity()){
            e.preventDefault();
            i.reportValidity();}else{
    KnightTravail([start1.value,start2.value], [start3.value,start4.value])
}}})

let gameboarddiv = document.querySelector('.gameboard')
let reset = document.querySelector('.reset')
reset.addEventListener('click',()=>{
    while(gameboarddiv.firstChild) gameboarddiv.removeChild(gameboarddiv.lastChild);
    gameboard()
})
