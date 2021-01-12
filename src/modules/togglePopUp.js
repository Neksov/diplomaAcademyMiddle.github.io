const togglePopUp = () =>{

  const clubsList = document.querySelector('.clubs-list ul'),//кнопка выбрать клуб
        callbackForm = document.getElementById('callback_form'),
        freeVisitForm = document.getElementById('free_visit_form'),
        gift = document.getElementById('gift'),
        fixedGift = document.querySelector('.fixed-gift');

        clubsList.classList.add('active');//добавляем класс к списку выбора клуба
        
//реализация нажатия кнопки выбора зала
        document.addEventListener('click', (event)=>{
          if(event.target.closest('.club-select')){
            clubsList.classList.toggle('active');
          }else if(!event.target.closest('.clubs-list')){
            clubsList.classList.add('active');
          }     

//реализация открытия модального окна
          if(event.target.closest('.open-popup')){
            freeVisitForm.style.display = 'block';
          }else if(event.target.closest('.callback-btn')){
            callbackForm.style.display = 'block';
          }else if(event.target.closest('.fixed-gift')){
            gift.style.display = 'block';
            fixedGift.style.display = 'none';
          }else if(event.target.closest('.close-form') || !event.target.closest('.form-wrapper')){
            callbackForm.style.display = 'none';
            freeVisitForm.style.display = 'none';
          if(event.target.closest('#gift')){
              gift.style.display = 'none';
            }
          }else if(event.target.closest('.close-btn')){
            gift.style.display = 'none';
          }
  });
};
export default togglePopUp;