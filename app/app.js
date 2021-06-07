import { Images } from './images.js'
import { Buttons } from './buttons.js'
import { CarouselContent } from './carouselContent.js'
export function app() {
    const $root = document.getElementById('root');
    $root.appendChild(CarouselContent());
    Buttons();
    console.log('hi')
}