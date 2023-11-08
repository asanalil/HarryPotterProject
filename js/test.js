document.addEventListener('DOMContentLoaded', function () {
    const difficultySelect = document.getElementById('difficultySelect');
    const questions = document.querySelectorAll('.form-group');

    difficultySelect.addEventListener('change', function () {
        const selectedDifficulty = this.value;

        questions.forEach(function (question) {
            const questionDifficulty = question.getAttribute('data-difficulty');

            if (
                questionDifficulty === selectedDifficulty ||
                questionDifficulty === 'common'
            ) {
                question.style.display = 'block';
            } else {
                question.style.display = 'none';
                // Uncheck radio buttons for hidden questions (optional)
                const radioButtons = question.querySelectorAll(
                    "input[type='radio']",
                );
                radioButtons.forEach(function (radio) {
                    radio.checked = false;
                });
            }
        });
    });

    // Скрываем вопросы, отличные от "easy" при загрузке страницы
    questions.forEach(function (question) {
        const questionDifficulty = question.getAttribute('data-difficulty');

        if (questionDifficulty !== 'easy') {
            question.style.display = 'none';
            // Uncheck radio buttons for hidden questions (optional)
            const radioButtons = question.querySelectorAll(
                "input[type='radio']",
            );
            radioButtons.forEach(function (radio) {
                radio.checked = false;
            });
        }
    });
});

document
    .getElementById('quizForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        let score = 0;
        let difficultyLevel = document.getElementById('difficultySelect').value;

        const selectedAnswer1 = $("input[name='q1']:checked").val();
        const selectedAnswer2 = $("input[name='q2']:checked").val();
        const selectedAnswer3 = $("input[name='q3']:checked").val();
        const selectedAnswer4 = $("input[name='q4']:checked").val();
        const selectedAnswer5 = $("input[name='q5']:checked").val();
        const selectedAnswer6 = $("input[name='q6']:checked").val();
        const selectedAnswer7 = $("input[name='q7']:checked").val();
        const selectedAnswer8 = $("input[name='q8']:checked").val();
        const selectedAnswer9 = $("input[name='q9']:checked").val();

        if (difficultyLevel === 'easy') {
            if (selectedAnswer1 === 'Wingardium Leviosa') {
                score++;
            }
            if (selectedAnswer2 === 'Albus Dumbledore') {
                score++;
            }
            if (selectedAnswer9 === 'Hedwig') {
                score++;
            }
        } else if (difficultyLevel === 'medium') {
            if (selectedAnswer3 === 'Voldemort') {
                score++;
            }
            if (selectedAnswer4 === 'An owl') {
                score++;
            }
            if (selectedAnswer7 === 'Seeker') {
                score++;
            }
        } else if (difficultyLevel === 'hard') {
            if (selectedAnswer5 === 'Gryffindor') {
                score++;
            }
            if (selectedAnswer6 === 'The Leaky Cauldron') {
                score++;
            }
            if (selectedAnswer8 === 'The Ministry of Magic') {
                score++;
            }
        }

        $('#result').removeClass('d-none');
        if (score === 3) {
            $('#finalResult').text(
                'Congratulations! You scored 3/3. You are a wizard!',
            );
        } else if (score === 2) {
            $('#finalResult').text(
                'Great job! You scored ' +
                    score +
                    '/3. We will send an invitation to Hogwarts via an owl.',
            );
        } else {
            $('#finalResult').text(
                'Nice try! You scored ' + score + '/3. Better luck next time!',
            );
        }
    });
