const questions = document.querySelectorAll('.questionJS');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.plus-btn');
    // console.log(btn);

    btn.addEventListener('click', function(){
        
        questions.forEach(function(item){
            if( item !== question){
                item.classList.remove('show-answer');
            }
        });
        question.classList.toggle('show-answer');
    });
});