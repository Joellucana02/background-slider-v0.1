import {Images} from './images.js'
import {Buttons} from './buttons.js'
export function app(){
    const $root = document.getElementById('root'); 
    $root.appendChild(Buttons());
    $root.appendChild(Images());
    console.log('hi')
}