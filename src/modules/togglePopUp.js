const togglePopUp = () =>{

  const clubSelect = document.querySelector('.club-select'),
        clubsList = document.querySelector('.clubs-list ul'),//кнопка выбрать клуб
        popup = document.querySelectorAll('.popup'),
        callbackForm = document.getElementById('callback_form'),
        freeVisitForm = document.getElementById('free_visit_form');

        clubsList.classList.add('active');
        
//<--реализация нажатия кнопки выбора зала-->
        document.addEventListener('click', (event)=>{
          if(event.target.closest('.club-select')){
            clubsList.classList.toggle('active');
          };
          // console.log(event.target)
        

          if(event.target.closest('.open-popup')){
            callbackForm.style.display = 'block';
          }else if(event.target.closest('.callback-btn')){
            freeVisitForm.style.display = 'block';
          }else if(event.target.closest('.close_icon') || event.target.closest('.form-wrapper')){
            callbackForm.style.display = 'none';
            freeVisitForm.style.display = 'none';

          }

        });




};
export default togglePopUp;