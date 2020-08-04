//Forma antigua
/*const element=document.createElement('h1');
element.innerText='Hello React..'
const container=document.getElementById('root');
container.appendChild(element)*/

import React from 'react';
import ReactDOM from 'react-dom'
import Card from './components/Card'

/* Primeros pasos 
const user={
    firstname: 'Fidel Ernesto',
    lastname: 'Alonso Ochoa'
}

function getName(user){
    return `${user.firstname} ${user.lastname}`
}
const name = 'Ernesto'
const element=<h1>Hola, {getName(user)}</h1>
*/

const container=document.getElementById('root');
ReactDOM.render(<Card />, container);