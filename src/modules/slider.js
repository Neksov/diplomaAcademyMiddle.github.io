const slider = () =>{
  const slide = document.querySelectorAll('.slide'),
        mainSlider = document.querySelector('.main-slider');

  let currentSlide = 0,
      interval;
  
  const prevSlide = (elem, index) =>{//elem - принимаем элемент у которого делаем none, index - индекс наш currentSlide
    elem[index].style.display = 'none';
  };

  const nextSlide = (elem, index) =>{
    elem[index].style.display = 'block';
  };

  const autoPlaySlide = () =>{
    prevSlide(slide, currentSlide);

    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide);
  };

  const startSlide = (time = 3000) =>{
    interval = setInterval(autoPlaySlide, time);//счетчик 
  };

  startSlide();
};
export default slider;