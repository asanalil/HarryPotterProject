// -------------------MOVIES-------------------
document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll("[data-toggle='modal']");

    modalButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            const targetModalId = button
                .getAttribute('data-target')
                .substring(1);

            const modal = document.getElementById(targetModalId);
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        });
    });
});

// -------------------GET SORTED----------------
const questions = [
    {
        question: "What's your favorite magical creature ?",
        answers: [
            { text: 'Hippogriff', house: 'Gryffindor' },
            { text: 'Niffler', house: 'Hufflepuff' },
            { text: 'Thestral', house: 'Ravenclaw' },
            { text: 'Basilisk', house: 'Slytherin' },
        ],
    },
    {
        question: 'What do you like to do most in your free time ?',
        answers: [
            { text: 'Sit back and relax', house: 'Gryffindor' },
            { text: 'Help someone do their homework', house: 'Hufflepuff' },
            { text: 'Read a book', house: 'Ravenclaw' },
            { text: 'Making fun of someone', house: 'Slytherin' },
        ],
    },
    {
        question: 'Which of your skills are you most proud of ?',
        answers: [
            { text: 'Keeping secrets', house: 'Gryffindor' },
            { text: 'Absorbing new information', house: 'Hufflepuff' },
            { text: 'Making new friends', house: 'Ravenclaw' },
            { text: 'Getting what I want', house: 'Slytherin' },
        ],
    },
    {
        question: "What's your preferred method of travel ?",
        answers: [
            { text: 'Broomstick', house: 'Gryffindor' },
            { text: 'Portkey', house: 'Hufflepuff' },
            { text: 'Apparition', house: 'Ravenclaw' },
            { text: 'Floo Powder', house: 'Slytherin' },
        ],
    },
    {
        question: 'How would the people you know describe you ?',
        answers: [
            { text: 'Interested in everything', house: 'Gryffindor' },
            { text: 'Kind', house: 'Hufflepuff' },
            { text: 'Smart', house: 'Ravenclaw' },
            { text: 'Bully', house: 'Slytherin' },
        ],
    },
];

document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    const sortButton = document.getElementById('sortButton');
    const result = document.getElementById('result');

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'form-group';
        const label = document.createElement('label');
        label.htmlFor = `question${index}`;
        label.innerText = question.question;
        const select = document.createElement('select');
        select.className = 'form-control';
        select.id = `question${index}`;
        question.answers.forEach((answer) => {
            const option = document.createElement('option');
            option.value = answer.house;
            option.innerText = answer.text;
            select.appendChild(option);
        });

        questionDiv.appendChild(label);
        questionDiv.appendChild(select);
        quizForm.appendChild(questionDiv);
    });

    sortButton.addEventListener('click', () => {
        const selectedAnswers = [];
        questions.forEach((question, index) => {
            const answerValue = document.getElementById(
                `question${index}`,
            ).value;
            selectedAnswers.push(answerValue);
        });

        const houseCount = selectedAnswers.reduce((count, house) => {
            count[house] = (count[house] || 0) + 1;
            return count;
        }, {});

        const sortedHouse = Object.keys(houseCount).reduce((a, b) =>
            houseCount[a] > houseCount[b] ? a : b,
        );

        setTimeout(function () {
            result.innerHTML = `You belong to <strong>${sortedHouse}</strong>!`;
        }, 2000);
    });
});

// -------------------CHARACTERS--------------------------
document.addEventListener('DOMContentLoaded', function () {
    const characters = [
        {
            name: 'Harry Potter',
            house: 'gryffindor',
            photo: '../img/characters/harry.jpg',
        },
        {
            name: 'Hermione Granger',
            house: 'gryffindor',
            photo: '../img/characters/germiona.jpg',
        },
        {
            name: 'Ron Weasley',
            house: 'gryffindor',
            photo: '../img/characters/ron.jpg',
        },
        {
            name: 'Ginny Weasley',
            house: 'gryffindor',
            photo: '../img/characters/ginny.jpg',
        },
        {
            name: 'Fred Weasley',
            house: 'gryffindor',
            photo: '../img/characters/oliver.jpg',
        },
        {
            name: 'George Weasley',
            house: 'gryffindor',
            photo: '../img/characters/george weasley.jpg',
        },
        {
            name: 'Neville Longbottom',
            house: 'gryffindor',
            photo: '../img/characters/nevil.jpg',
        },
        {
            name: 'Luna Lovegood',
            house: 'ravenclaw',
            photo: '../img/characters/luna.jpg',
        },
        {
            name: 'Cho Chang',
            house: 'ravenclaw',
            photo: '../img/characters/cho.jpg',
        },
        {
            name: 'Padma Patil',
            house: 'ravenclaw',
            photo: '../img/characters/patil.jpg',
        },
        {
            name: 'Sybill Trelawney',
            house: 'ravenclaw',
            photo: '../img/characters/trelawney.jpg',
        },
        {
            name: 'Draco Malfoy',
            house: 'slytherin',
            photo: '../img/characters/draco.jpg',
        },
        {
            name: 'Vincent Crabbe',
            house: 'slytherin',
            photo: '../img/characters/crabbe.jpg',
        },
        {
            name: 'Gregory Goyle',
            house: 'slytherin',
            photo: '../img/characters/goyle.jpg',
        },
        {
            name: 'Snep Severus',
            house: 'slytherin',
            photo: '../img/characters/severus.webp',
        },
        {
            name: 'Bellatrix Lestrange',
            house: 'slytherin',
            photo: '../img/characters/bellatrix.jpg',
        },
        {
            name: 'Cedric Diggory',
            house: 'hufflepuff',
            photo: '../img/characters/cedric.jpg',
        },
        {
            name: 'Hannah Abbott',
            house: 'hufflepuff',
            photo: '../img/characters/hannah.jpg',
        },
        {
            name: 'Nymphadora Tonks',
            house: 'hufflepuff',
            photo: '../img/characters/nymphadora.jpg',
        },
        {
            name: 'Newton Scamander',
            house: 'hufflepuff',
            photo: '../img/characters/scamander.jpg',
        },
    ];

    function filterCharactersByHouse(house) {
        const charactersList = document.getElementById('characters-list');
        charactersList.innerHTML = ''; // Clear previous character list

        let filteredCharacters = characters;
        if (house !== 'all') {
            filteredCharacters = characters.filter(
                (character) => character.house === house,
            );
        }

        filteredCharacters.forEach((character) => {
            const characterImg = document.createElement('img');
            characterImg.src = character.photo;
            characterImg.alt = character.name;
            characterImg.classList.add('character-image', character.house);
            characterImg.setAttribute('data-toggle', 'tooltip');
            characterImg.setAttribute('data-placement', 'bottom');
            characterImg.setAttribute('title', character.name);
            charactersList.appendChild(characterImg);
        });

        $('[data-toggle="tooltip"]').tooltip();
    }

    document
        .getElementById('char-type')
        .addEventListener('change', function () {
            const selectedHouse = this.value;
            filterCharactersByHouse(selectedHouse);
        });

    filterCharactersByHouse('all');
});
