const togglePopUp = () =>{

  const clubSelect = document.querySelector('.club-select'),
        clubsList = document.querySelector('.clubs-list ul');


        clubSelect.addEventListener('mouseover', (event)=>{

            clubsList.style.display = 'block';
            console.log(event.target)
    });
};
export default togglePopUp;