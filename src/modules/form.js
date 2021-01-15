const form = () =>{

    const check = document.querySelectorAll('input[type="checkbox"]'),
        buttonSubmit = document.querySelectorAll('button[type="submit"]'),
        input = document.querySelectorAll('input'),
        name = document.querySelectorAll('input[name="name"]'),
        phone = document.querySelectorAll('input[name="phone"]'),
        form = document.querySelectorAll('form');

    let errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        statusMessage = document.createElement('div'),//добавялем элемент на страницу
        load = document.createElement('div');//добавялем элемент на страницу

        statusMessage.style.cssText = 'font-size: 2rem;';
        statusMessage.style.cssText = 'color: white;';

    //проврека вводимых данных
    input.forEach((elem) =>{    
        elem.addEventListener('input', (e) =>{  //проверка вводимых дынных-ТОЛЬКО кир и пробелы в инпут ваше имя 
            let target = e.target;
            if(target.matches('input[name="name"]')){
                target.value = target.value.replace(/[^а-яё\s]/ig, ''); // ограничиваем ввод всего кроме кирилицы
            }else if(target.matches('input[name="phone"]')){
                target.value = target.value.replace(/[^\+\d]/g, '').substring(0,12); // ограничиваем ввод всего кроме цифр 
            }
        });
    });

    //checkbox
    check.forEach((elem)=>{
        elem.setAttribute('checked', 'true'); //устанавливаем true на все checkbox согласия.
        elem.addEventListener('click', (event)=>{
        if(event.target.checked){ //проверка на true 
                // buttonSubmit.removeAttribute('disabled')
            }else{
                alert("Подтвердите согласие на обработку данных");
                // buttonSubmit.setAttribute('disabled', 'true' );
            }
        });
    });

    //таймаут
    let timeOut = () => {
        setTimeout(() => {
            statusMessage.remove();
            // popup.style.display = 'none';//закрываем модалку
        }, 3000);
    };

    //form
    form.forEach((elem) =>{
        elem.addEventListener('submit',(event)=>{
            event.preventDefault();//отменяем стандарное поведение браузера

            elem.appendChild(statusMessage);// добавляем элемент на страницу    
            elem.appendChild(load);// добавляем элемент на страницу
    
            
            load.classList.add('sk-spinner-pulse');//вывод сообщения загрузка

            phone.forEach((elem)=>{
                if(!elem.value.match(/[0-9+]{7,13}/ig)) {
                    alert('Номер введен не верно');
                    statusMessage.remove();//удаляем сообщение под формой
                    return;
                }
            });
            
            const formData = new FormData(elem);//создаем экземпляр класса и в эту функцию передаем форму с которой получаем данные
            let body = {}; //обект в который помещаем наши данные

            //для отправки JSON перебираем и записываем каждый цикл
            formData.forEach((val, key) =>{
                body[key] = val;
            });

            postData(body) 
                .then((response) =>{
                    if(response.status !==200){
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    load.remove(load);//удаляем прилоадер
                    timeOut();
                })
                .catch((error) =>{
                    statusMessage.textContent = errorMessage;
                    load.remove(load);//удаляем прилоадер
                    timeOut();
            console.error(error); 
            });


            name.forEach((elem)=>{
                elem.value = '';
            });
            phone.forEach((elem)=>{
                elem.value = '';
            });
        });
    });

    const postData = (body) =>{
        //запрос к серверу через fetch
        return fetch ('./server.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json' //свойство и значение
            },
            body: JSON.stringify(body),
            credentials: 'include' //проверка подлинности
        });
    };
};
export default form;