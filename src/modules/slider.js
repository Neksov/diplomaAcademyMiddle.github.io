const slider = () =>{
  const slider = document.querySelectorAll('.slider');

  let currentSlide = 0,
      interval;
  
  const prevSlide = (elem, index) =>{//elem - принимаем элемент у которого делаем none, index - индекс наш currentSlide
    elem[index].style.display = 'none';
  };

  const nextSlide = (elem, index) =>{
    elem[index].style.display = 'block';
  };

  const autoPlaySlide = () =>{
    prevSlide(slider, currentSlide);

    currentSlide++;
    if(currentSlide >= slider.length){
      currentSlide = 0;
    }
    nextSlide(slider, currentSlide);
  };
  const startSlide = (time = 5000) =>{
    interval = setInterval(autoPlaySlide, time);//счетчик 
  };
  startSlide();
};
export default slider;