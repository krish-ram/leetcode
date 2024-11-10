const body = document.body;

const div = document.createElement('div');

div.innerHTML = '<strong>HW</strong>';
div.innerText = 'HW 1';
div.textContent = 'HW 2';

const spDiv = document.querySelector('div')
const spanHi = document.querySelector('#hi')

spanHi.removeAttribute();

body.append(div);