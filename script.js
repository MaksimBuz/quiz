const card__form = document.querySelector('.card__form');
const step_1_btn = document.querySelector('#step_1_btn');

const form__title = document.querySelector('.form__title');
const form_step = document.querySelector('.form_step');
const input__switch = document.querySelector('.input__switch');
const form_btns = document.querySelector('.form_btns');
const form_step_description = document.querySelector('.form_step_description');

step_1_btn.addEventListener('click', step_1)

const select_step1 = document.querySelectorAll('input[type="radio"]')

let UserAnsver = {
    question1:'',
    question2:'',
    question3:'',
    question4:'',
    question5:'',
    question6:'',
    question7:'',
    question8:'',
    question9:'',
    name:'',
    phone:'',
    mail:'',

  } 

function step_1(params) {
    //  вывод данных
    for (let radio of select_step1) {
        if (radio.checked) {
            console.log(radio.value);
            UserAnsver.question1=radio.value;
        }
    }

    const btn_step_2 = document.createElement("button");
    form_btns.appendChild(btn_step_2);

    input__switch.innerHTML = `
    <select name="select_step2" id="Select_step2">
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Москва">Москва</option>
        <option value="Новосибирск">Новосибирск</option>
    </select>`;
    step_1_btn.remove()
    btn_step_2.classList.add('btn');
    btn_step_2.classList.add('step_2_btn');
    btn_step_2.innerHTML = 'Далее 2';
    form__title.textContent = 'В каком городе планируете поступать?';
    form_step_description.textContent = 'Шаг 2/9';

    step_2_btn = document.querySelector('.step_2_btn');
    step_2_btn.addEventListener('click', step_2);



}



function step_2(params) {

    var sel = document.getElementById('Select_step2');
    var value = sel.value;
    //  вывод данных
    console.log(value)
    UserAnsver.question2=value;

    form__title.textContent = 'Какое образование уже есть?';
    form_step_description.textContent = 'Шаг 3/9';
    input__switch.innerHTML = ` 
    <p class="checkbox_short"> 9 классов <input type="radio" value=" 9 классов" checked></p>
    <p class="checkbox_short"> 11 классов<input type="radio" value="11 классов"></p>
    <p class="checkbox_short"> Училище <input type="radio" value="Училище "></p>
    <p class="checkbox_short"> Колледж/техникум <input type="radio"value="Колледж/техникум" ></p>
    <p class="checkbox_short"> 11 классов <input type="radio" value="11 классов"></p> 
    <p class="checkbox_short"> Неоконченное высшее <input type="radio"value="Неоконченное высшее" ></p> 
    `;

    step_2_btn.remove()
    const btn_step_3 = document.createElement("button");
    form_btns.appendChild(btn_step_3);
    btn_step_3.classList.add('btn');
    btn_step_3.classList.add('step_3_btn');
    btn_step_3.innerHTML = 'Далее 3';

    step_3_btn = document.querySelector('.step_3_btn');
    step_3_btn.addEventListener('click', step_3);
}

function step_3(params) {

    //  вывод данных
    const select_step3 = document.querySelectorAll('input[type="radio"]')
    for (let radio of select_step3) {
        if (radio.checked) {
            console.log(radio.value);
            UserAnsver.question3=radio.value;
        }
    }

    step_3_btn.remove();
    form__title.textContent = 'Куда планируете поступать?';
    form_step_description.textContent = 'Шаг 4/9';
    input__switch.innerHTML = `  
     <p class="checkbox_long" > Вуз<input type="radio" value=" Вуз" checked></p>
    <p class="checkbox_long" > Колледж/техникум<input type="radio"value="Колледж/техникум" ></p>
    <p class="checkbox_long" > Училище <input type="radio"value="Училище" ></p>`;

    const btn_step_4 = document.createElement("button");
    form_btns.appendChild(btn_step_4);
    btn_step_4.classList.add('btn');
    btn_step_4.classList.add('step_4_btn');
    btn_step_4.innerHTML = 'Далее 4';

    step_4_btn = document.querySelector('.step_4_btn');
    step_4_btn.addEventListener('click', step_5);

}

function step_5(params) {

    //  вывод данных
    const select_step4 = document.querySelectorAll('input[type="radio"]')
    for (let radio of select_step4) {
        if (radio.checked) {
            console.log(radio.value);
            UserAnsver.question4=radio.value;
        }
    }

    step_4_btn.remove();
    form__title.textContent = 'Какую форму обучения предпочитаете?';
    form_step_description.textContent = 'Шаг 5/9';
    input__switch.innerHTML = `  
     <p class="checkbox_long"> Очную<input type="radio" value=" Очную" checked></p>
    <p class="checkbox_long"> Заочную<input type="radio" value=" Заочную"></p>
    <p class="checkbox_long">Дистанционную <input type="radio" value=" Дистанционную"></p>`;
    const btn_step_5 = document.createElement("button");
    form_btns.appendChild(btn_step_5);
    btn_step_5.classList.add('btn');
    btn_step_5.classList.add('step_5_btn');
    btn_step_5.innerHTML = 'Далее 5';

    step_5_btn = document.querySelector('.step_5_btn');
    step_5_btn.addEventListener('click', step_6);


}

function step_6(params) {

    //  вывод данных
    const select_step5 = document.querySelectorAll('input[type="radio"]')
    for (let radio of select_step5) {
        if (radio.checked) {
            console.log(radio.value);
            UserAnsver.question5=radio.value;
        }
    }

    step_5_btn.remove();
    form__title.textContent = 'Рассматриваете платное обучение?';
    form_step_description.textContent = 'Шаг 6/9';
    input__switch.innerHTML = `   
    <p class="checkbox_long"> Нет, только бюджет<input type="radio"value=" Нет, только бюджет" checked></p>
    <p class="checkbox_long"> Да, планирую учиться платно<input type="radio" value=" Да, планирую учиться платно"></p>
    <p class="checkbox_long">Возможны оба варианта<input type="radio"value=" Возможны оба варианта" ></p>`;
    const btn_step_6 = document.createElement("button");
    form_btns.appendChild(btn_step_6);
    btn_step_6.classList.add('btn');
    btn_step_6.classList.add('step_6_btn');
    btn_step_6.innerHTML = 'Далее 6';

    step_6_btn = document.querySelector('.step_6_btn');
    step_6_btn.addEventListener('click', step_7);


}

function step_7(params) {
    const select_step6 = document.querySelectorAll('input[type="radio"]')
    for (let radio of select_step6) {
        if (radio.checked) {
            console.log(radio.value);
            UserAnsver.question6=radio.value;
        }
    }

    step_6_btn.remove();
    form__title.textContent = 'Какая специальность интересует?';
    form_step_description.textContent = 'Шаг 7/9';
    input__switch.innerHTML = `
    <select name="" id="Select_step7">
        <option value="Любая">Любая</option>
        <option value="Экономика">Экономика</option>
        <option value="Социология">Социология</option>
     </select>`;
    const btn_step_7 = document.createElement("button");
    form_btns.appendChild(btn_step_7);
    btn_step_7.classList.add('btn');
    btn_step_7.classList.add('step_7_btn');
    btn_step_7.innerHTML = 'Далее 7';

    step_7_btn = document.querySelector('.step_7_btn');
    step_7_btn.addEventListener('click', step_8);


}

function step_8(params) {
    //  вывод данных
    var sel = document.getElementById('Select_step7');
    var value = sel.value;
    UserAnsver.question7=value;
    console.log(value)

    step_7_btn.remove();
    form__title.textContent = 'Как скоро планируете поступать?';
    form_step_description.textContent = 'Шаг 8/9';
    input__switch.innerHTML = ` 
    <p class="checkbox_short" >Как можно быстрее<input type="radio" value="Как можно быстрее" checked></p>
    <p class="checkbox_short"> Квартал<input type="radio" value="Квартал"></p>
    <p class="checkbox_short"> Год <input type="radio" value="Год"></p>
    <p class="checkbox_short"> Месяц <input type="radio" value="Месяц"></p>
    <p class="checkbox_short"> Полгода<input type="radio"value=" Полгода" ></p> `;
    const btn_step_8 = document.createElement("button");
    form_btns.appendChild(btn_step_8);
    btn_step_8.classList.add('btn');
    btn_step_8.classList.add('step_8_btn');
    btn_step_8.innerHTML = 'Далее 8';

    step_8_btn = document.querySelector('.step_8_btn');
    step_8_btn.addEventListener('click', step_9);

}

function step_9(params) {
    step_8_btn.remove();
    //  вывод данных
    const select_step8 = document.querySelectorAll('input[type="radio"]')
    for (let radio of select_step8) {
        if (radio.checked) {
            console.log(radio.value);
            UserAnsver.question8=radio.value;
        }
    }

    form__title.textContent = 'Ваша подборка готова! 🥳 Куда нам отправить её?';
    form_step_description.textContent = 'Шаг 9/9';
    input__switch.innerHTML = `    
        <input type="text" class="checkbox_long" id="name"placeholder="Как вас зовут?" checked>
        <input type="text" class="checkbox_long" id="phone" placeholder="Номер телефона">
        <input type="text" class="checkbox_long"id="mail" placeholder="E-mail">
        <button type="submit" id="step_1_btn" class="btn_submit" >Получить подборку</button>`;

    btn_submit = document.querySelector('.btn_submit');
    btn_submit.addEventListener('click', submit_form);




}
function submit_form(event) {
    const name = document.querySelector('#name')
    const phone = document.querySelector('#phone')
    const mail = document.querySelector('#mail')
    event.preventDefault();
    UserAnsver.name=name.value;
    UserAnsver.phone=phone.value;
    UserAnsver.mail=mail.value;
    const json = JSON.stringify(UserAnsver);
    console.log(json)


}
