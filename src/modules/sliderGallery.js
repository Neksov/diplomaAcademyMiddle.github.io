const sliderGallery = () => {
  const slide = document.querySelectorAll('.slide'),
    mainGallery = document.querySelector('.gallery-slider'),
    button = document.querySelectorAll('.button');

  let currentSlide2 = 0,
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
    prevSlide(slide, currentSlide2);
    prevButton(button, currentSlide2, 'slick-active');

    currentSlide2++;
    if (currentSlide2 >= slide.length) {
      currentSlide2 = 0;
    }

    nextSlide(slide, currentSlide2);
    nextButton(button, currentSlide2, 'slick-active');
  };

  //скорость пролистования
  const startSlide = (time = 5000) => {
    interval = setInterval(autoPlaySlide, time);//счетчик 
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  mainGallery.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    if (!target.matches('.button')) {//ограничить вход если не попадаем на точки и на стрелки то возвращаем
      return;
    }
    //убираем активные классы 
    prevSlide(slide, currentSlide2);
    prevButton(button, currentSlide2, 'slick-active');//предаем точки, текущий слайд и активныую класс

    if (target.matches('.button')) {
      button.forEach((elem, index,) => {//elem-наши точки,index- их индикс
        if (elem === target) { //елси точка совпадает с той точкой на которую мы кликнули 
          currentSlide2 = index; //этот элемент инлекс присваиваем currentSlide-ру
        }
      });
    }

    if (currentSlide2 >= slide.length) {//делаем проверку на последний слайд, чтоб возвращался к первому
      currentSlide2 = 0;
    }
    if (currentSlide2 < 0) {
      currentSlide2 = slide.length - 1;
    }

    //добавляем активные классы 
    nextSlide(slide, currentSlide2);
    nextButton(button, currentSlide2, 'slick-active');

  });

  //останавливаем слайд при наведение на пагинатор
  mainGallery.addEventListener('mouseover', (event) => {
    if (event.target.matches('.button')) {
      stopSlide();
    }
  });
  //двигаем слайд при наведение вне пагинатора
  mainGallery.addEventListener('mouseout', (event) => {
    if (event.target.matches('.button')) {
      startSlide();
    }
  });

  startSlide();
};
export default sliderGallery;