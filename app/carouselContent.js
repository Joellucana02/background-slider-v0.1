export function CarouselContent() {
    const pictures = [
        './app/media/nature1.jpg',
        './app/media/nature2.jpg',
        './app/media/nature3.jpg',
        './app/media/nature4.jpg',
    ]
    const $divMaster = document.createElement('div');

    $divMaster.innerHTML = `
    
    <div class='container'>
        <div class='carousel__track-container'>
        
        <ul class='carousel__track'>
        <li class='carousel__slide current-slide'>
            <img class='carousel__image' src='${pictures[0]}'/>
        </li>
        <li class='carousel__slide hidden-slide'>
            <img class='carousel__image' src='${pictures[1]}'/>
        </li>
        <li class='carousel__slide hidden-slide'>
            <img class='carousel__image' src='${pictures[2]}'/>
        </li>
        <li class='carousel__slide hidden-slide'>
            <img class='carousel__image' src='${pictures[3]}'/>
        </li>
        </ul> 
        </div> 
    </div>

    <div class='carousel__buttons'>
        <button class='btn-prev'><i class="fas fa-chevron-left"></i></button>
        <button class='btn-next'><i class="fas fa-chevron-right"></i></button>
        <ul>
            <li class='dot'>P</li>
            <li class='dot'>P</li>
            <li class='dot'>P</li>
            <li class='dot'>P</li></li>
        </ul>        
    </div>
        
    `;



    return $divMaster;
}
