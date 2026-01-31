'use strict';

let question1 = document.querySelector('section');
console.log(question1);

question1.addEventListener('click', e => {
    console.log(e.target.nextElementSibling);
    const answerText = e.target.nextElementSibling;
    console.log(answerText.classList.value);
    if (answerText.classList.value === 'answer') {
        answerText.classList.remove('answer');
        answerText.classList.add('faq-item');
    }
    // else if (answerText.classList.value === 'faq-item') {
    //     answerText.classList.remove('faq-item');
    //     answerText.classList.add('answer');
    // }
    else {
        answerText.classList.remove('faq-item');
        answerText.classList.add('answer');
    }
});
