//подсчет моих слайдов и добавление точек 
const countDot = () =>{
  const slide = document.querySelectorAll('.slider');

  slide.forEach((elem) =>{
    let parent = document.querySelector(".slider-dots"),
        li = document.createElement('li');

      elem = parent.appendChild(li);
      elem.classList.add('button');
  });

  let count = document.querySelectorAll(".button");
      count[0].classList.add('slick-active');
};
export default countDot;