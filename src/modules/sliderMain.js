const sliderMain = () => {
  const slider = document.querySelectorAll('.slider'),
    mainSlider = document.querySelector('.main-slider'),
    button = document.querySelectorAll('.button');

  let currentSlide = 0,
    interval;

  //слайды 
  const prevSlide = (elem, index) => {//elem - принимаем элемент у которого делаем none, index - индекс наш currentSlide
    elem[index].style.display = 'none';
  };
  const nextSlide = (elem, index) => {
    elem[index].style.display = 'block';
  };

  //пагинаторы
  const prevButton = (elem, index, strClass) => {//elem - принимаем элемент у которого делаем none, index - индекс наш currentSlide
    elem[index].classList.remove(strClass);
  };
  const nextButton = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slider, currentSlide);
    prevButton(button, currentSlide, 'slick-active');

    currentSlide++;
    if (currentSlide >= slider.length) {
      currentSlide = 0;
    }

    nextSlide(slider, currentSlide);
    nextButton(button, currentSlide, 'slick-active');
  };

  //скорость пролистования
  const startSlide = (time = 5000) => {
    interval = setInterval(autoPlaySlide, time);//счетчик 
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  mainSlider.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    if (!target.matches('.button')) {//ограничить вход если не попадаем на точки и на стрелки то возвращаем
      return;
    }
    //убираем активные классы 
    prevSlide(slider, currentSlide);
    prevButton(button, currentSlide, 'slick-active');//предаем точки, текущий слайд и активныую класс

    if (target.matches('.button')) {
      button.forEach((elem, index,) => {//elem-наши точки,index- их индикс
        if (elem === target) { //елси точка совпадает с той точкой на которую мы кликнули 
          currentSlide = index; //этот элемент инлекс присваиваем currentSlide-ру
        }
      });
    }

    if (currentSlide >= slider.length) {//делаем проверку на последний слайд, чтоб возвращался к первому
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slider.length - 1;
    }

    //добавляем активные классы 
    nextSlide(slider, currentSlide);
    nextButton(button, currentSlide, 'slick-active');

  });

  //останавливаем слайд при наведение на пагинатор
  mainSlider.addEventListener('mouseover', (event) => {
    if (event.target.matches('.button')) {
      stopSlide();
    }
  });
  //двигаем слайд при наведение вне пагинатора
  mainSlider.addEventListener('mouseout', (event) => {
    if (event.target.matches('.button')) {
      startSlide();
    }
  });

  startSlide();
};
export default sliderMain;