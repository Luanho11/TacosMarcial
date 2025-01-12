const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');

        answer.classList.toggle('active');

        if (answer.classList.contains('active')) {
            question.querySelector('h2').style.fontWeight = 'bold';
            icon.classList.remove('bxs-chevron-down');
            icon.classList.add('bxs-chevron-up');
        } else {
            question.querySelector('h2').style.fontWeight = 'normal';
            icon.classList.remove('bxs-chevron-up');
            icon.classList.add('bxs-chevron-down');
        }
    });
});
