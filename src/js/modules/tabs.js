function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass, tabsImgSelector) {

    const tabs = document.querySelectorAll(tabsSelector),               // получаем кнопки-табы
          tabsContent = document.querySelectorAll(tabsContentSelector), // получаем контент в самих табах
          tabsParent = document.querySelector(tabsParentSelector),      // получаем родителя, в котором ссылки на табы
          tabsImg = document.querySelectorAll(tabsImgSelector);         // получаем изображение для таба

    function hideTabContent() {                                         // функция скрывания всех табов
        tabsContent.forEach(item => {
            item.classList.add('hide');                                 // в классе hide задается display: none
            item.classList.remove('active', 'fadeIn');                  // в классе show задается display: block, в классе fadeIn задается анимация
        });

        tabs.forEach(item => {                                          // убираем класс активности со всех кнопок-табов
            item.classList.remove(activeClass);
        });

        tabsImg.forEach(item => {
            item.classList.remove('active', 'fadeIn');
        });
    }

    function showTabContent(i = 0) {                                    // функция показа одного элемента. Задаем i=0 по дефолту, чтобы сначала был активен первый таб
        tabsContent[i].classList.add('active', 'animated', 'fadeIn');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
        tabsImg[i].classList.add('active', 'animated', 'fadeIn');
        tabsImg[i].classList.remove('hide');
    }

    hideTabContent();                                                   // скрыли все табы
    showTabContent();                                                   // показали дефолтное значение

    tabsParent.addEventListener('click', (event) => {                   // вешаем обработчик клика
        const target = event.target;                                    // элемент в который кликнули

        if (target && target.classList.contains(tabsSelector.slice(1))) { // смотрим что кликнули в нужный элемент. Т.к. tabsSelector с точкой, то нужно ее вырезать
            tabs.forEach((item, i) => {                                 // перебираем все табы 
                if (target == item) {                                   // если таб, на который кликнули совпадает с перебираемым
                    hideTabContent();                                   // скрываем все табы и
                    showTabContent(i);                                  // показываем тот, который сейчас в переборе
                }
            });
        }

        if (target && target.tagName == 'SPAN') {                       // если кликнули на тег span, который внутри
            tabs.forEach((item, i) => {                                 
                if (target.parentNode == item) {                        
                    hideTabContent();                                   
                    showTabContent(i);                                  
                }
            });
        }
    });
}

export default tabs;