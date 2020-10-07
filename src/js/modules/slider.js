function slider({slide, nextArrow, prevArrow, wrapper, field}) {

    const slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field);         
    
    const currentWidth = document.documentElement.clientWidth;          // получаем текущию ширину экрана (для адаптации слайдера под мобилу)

    function deleteNotDigits(str) {                                     // функция для того, чтобы в строке остались только числа и превратились в числовой тип переменной
        return +str.replace(/\D/g, '')                                  // replace - ищем все не числа и заменяем их на ничего, + переводим переменную в числовую
    }

    const slideWidth = window.getComputedStyle(slides[1]).width,
          slideMarginLeft = window.getComputedStyle(slides[1]).marginLeft;

    let offset = 0;                                                     // отступ влево или вправо при прокрутке слайдера

    slidesField.style.transition = '0.5s all';                          // для плавного переключения добавялем transition
    slidesWrapper.style.overflow = 'hidden';                            // показываем только то, что попадает в окно slidesWrapper, остальное скрываем. Иначе там все в линию выстраивается и получается горизонтальная полоса прокрутки 


    function slideNext(numSlides) {                                     // функция для перелистывания слайдера вперед. Аргумент - кол-во отображаемых одновременно элементов 
        if (offset == (slides.length - numSlides) * (deleteNotDigits(slideWidth) + deleteNotDigits(slideMarginLeft))) {  
            offset = 0;                                                 // сбрасываем отступ в начальное значение
        } else {
            offset += deleteNotDigits(slideWidth) + deleteNotDigits(slideMarginLeft); // добавляем к текущей позиции ширину еще одного слайда
        }
    }   

    next.addEventListener('click', () => {
        if (currentWidth <= 767) {
            slideNext(2);
        } else {
            slideNext(3);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;       // передвигаем всю ленту слайдов влево на нужную длину
    });

    function slidePrev(numSlides) {                                     // функция для перелистывания слайдера назад. Аргумент - кол-во отображаемых одновременно элементов 
        if (offset == 0) {                                              // если сейчас показывается первый слайд
            offset = (slides.length - numSlides) * (deleteNotDigits(slideWidth) + deleteNotDigits(slideMarginLeft))     // присваеваем счетчику значение последнего слайда
        } else {
            offset -= deleteNotDigits(slideWidth) + deleteNotDigits(slideMarginLeft); // отнимаем от текущей позиции ширину еще одного слайда
        }
    }

    prev.addEventListener('click', () => {
        if (currentWidth <= 767) {
            slidePrev(2);
        } else {
            slidePrev(3);
        }   
        
        slidesField.style.transform = `translateX(-${offset}px)`;       // передвигаем всю ленту слайдов влево на нужную длину
    });
}

export default slider;                                                 