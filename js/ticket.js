document.addEventListener('DOMContentLoaded', function () {
    const ticketSelectionForm = document.getElementById('ticketSelectionForm');
    const countdownElement = document.getElementById('countdown');

    ticketSelectionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const ticketType = document.getElementById('ticketType').value;
        const quantity = parseInt(document.getElementById('quantity').value);

        let price = 0;

        switch (ticketType) {
            case 'child':
                price = 7;
                break;
            case 'student':
                price = 10;
                break;
            case 'adult':
                price = 13;
                break;
            default:
                break;
        }

        const totalPrice = price * quantity;

        if (totalPrice > 0) {
            const movieSelect = document.getElementById('movieSelect');
            const selectedMovie = movieSelect.options[movieSelect.selectedIndex].value;
            let startTime = new Date();

            switch (selectedMovie) {
                case 'sorcerers-stone':
                    startTime.setHours(startTime.getHours() + 2);
                    break;
                case 'chamber-of-secrets':
                    startTime.setHours(startTime.getHours() + 3);
                    break;
                case 'prisoner-of-azkaban':
                    startTime.setHours(startTime.getHours() + 2);
                    break;
                case 'goblet-of-fire':
                    startTime.setHours(startTime.getHours() + 3);
                    break;
                case 'order-of-the-phoenix':
                    startTime.setHours(startTime.getHours() + 2);
                    break;
                case 'half-blood-prince':
                    startTime.setHours(startTime.getHours() + 3);
                    break;
                case 'deathly-hallows-part-1':
                    startTime.setHours(startTime.getHours() + 2);
                    break;
                case 'deathly-hallows-part-2':
                    startTime.setHours(startTime.getHours());
                    break;
                default:
                    break;
            }

            const countdownInterval = setInterval(function () {
                const currentTime = new Date();
                const timeDifference = startTime - currentTime;

                if (timeDifference <= 0) {
                    clearInterval(countdownInterval);
                    countdownElement.style.display = 'none';
                    displayNotification(`Congratulations, you bought ${quantity} ${ticketType} ticket(s) for ${selectedMovie}. The movie is starting now!`);
                } else {
                    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
                    const seconds = Math.floor((timeDifference / 1000) % 60);
                    const remainingTime = `${minutes}m ${seconds}s`;

                    countdownElement.style.display = 'block';
                    countdownElement.innerText = `Time remaining until ${selectedMovie}: ${remainingTime}`;
                }
            }, 1000);
        } else {
            const errorMessage = 'Please select ticket type and quantity.';
            displayNotification(errorMessage);
        }
    });
});

function displayNotification(message) {
    alert(message);
}
