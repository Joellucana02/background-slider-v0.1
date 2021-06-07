
export function Buttons() {
    let slidePosition = 0;
    const $prev = document.querySelector('.btn-prev'),
        $next = document.querySelector('.btn-next'),
        slides = document.querySelectorAll('.carousel__slide'),
        totalSlides = slides.length
    //console.log(totalSlides)
    console.log(slides)
    $next.addEventListener('click', () => {
        //console.log('next')
        moveToNextSlide();
    })
    $prev.addEventListener('click', () => {
        //console.log('next')
        moveToPrevSlide();
    })

    /* let updateSlidePosition = () => {
        for (let slide of slides) {
            slide.classList.remove('hidden-slide')
            slide.classList.add('current-slide')
        }
        slides[slidePosition].classList.add('current-slide');
    }; */
    let updateSlidePosition = () => {
        if (slidePosition == 0) {
            slides[slidePosition].classList.remove('hidden-slide')
            slides[slidePosition].classList.add('current-slide')
        } else {
            slides[slidePosition - 1].classList.remove('current-slide')
            slides[slidePosition - 1].classList.add('hidden-slide')
            slides[slidePosition].classList.remove('hidden-slide')
            slides[slidePosition].classList.add('current-slide')
        }

    };
    let moveToNextSlide = () => {
        if (slidePosition < totalSlides) {

            slidePosition++
            if (slidePosition == totalSlides) {
                slides[slidePosition - 1].classList.remove('current-slide')
                slides[slidePosition - 1].classList.add('hidden-slide')
                slidePosition = 0;
            }
        } else {
            console.log(slidePosition)
        }
        updateSlidePosition()
    }
    let moveToPrevSlide = () => {
        if (slidePosition === 0) {
            return false
        } else {
            slidePosition--
        }
        updateSlidePosition()
    }
}
