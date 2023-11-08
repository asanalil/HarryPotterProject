// ------------------- AWARDS ----------------

const awardsData = [
    {
        name: 'Best Art Direction (Stuart Craig).',
        image: '../img/awards/10.jpeg',
        description:
            "Harry Potter and the Philosopher's Stone was nominated for three Academy Awards in 2002. It was nominated in the following categories:",
    },
    {
        name: 'Best Original Screenplay (Stephen Clowes, Stephen Clowes and J.K. Rowling)',
        image: '../img/awards/12.jpg',
        description: 'Reward for successful completion Three magical quests.',
    },
    {
        name: 'Best Production Designer (Stuart Craig, Stephanie McMillan)',
        image: '../img/awards/13.jpg',
        description: 'Award for Outstanding Achievement in Cinematography.',
    },
    {
        name: "Harry Potter and the Philosopher's Stone was nominated in the Best Children's Film category.",
        image: '../img/awards/14.jpg',
        description:
            'Award for outstanding achievement in the British film industry.',
    },
    {
        name: 'Best Special Effects (Roger Guyette, Tim Burton, Tim Burton and Robert Legat)',
        image: '../img/awards/11.webp',
        description: 'Award for outstanding magical achievement.',
    },
    // Добавьте другие награды с фото и описанием по желанию
];

const itemsPerPage = 1;
const container = document.getElementById('container');
const pagination = document.getElementById('pagination');

function displayAwards(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const awardToShow = awardsData[startIndex];

    container.innerHTML = '';
    const awardItem = document.createElement('div');
    awardItem.className = 'award';
    const img = document.createElement('img');
    img.src = awardToShow.image;
    img.alt = awardToShow.name;
    awardItem.appendChild(img);
    const name = document.createElement('p');
    name.textContent = awardToShow.name;
    awardItem.appendChild(name);
    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = awardToShow.description;
    awardItem.appendChild(description);
    container.appendChild(awardItem);
}

function displayPagination() {
    const totalPages = awardsData.length;
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            displayAwards(i);
            updateActivePage(i);
        });
        pagination.appendChild(pageButton);
    }

    displayAwards(1);
    updateActivePage(1);
}

function updateActivePage(pageNumber) {
    const buttons = document.querySelectorAll('.pagination button');
    buttons.forEach((button) => {
        button.classList.remove('active');
        if (parseInt(button.textContent) === pageNumber) {
            button.classList.add('active');
        }
    });
}

displayPagination();
