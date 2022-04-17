const hoursHand = document.querySelector('.hand.hours');
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.seconds');

const setRotation = (element, rotationPercentege) => {
    element.style.setProperty('--rotation', rotationPercentege * 360);
};

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentege = currentDate.getSeconds() / 60;
    const minutesPercentege = (secondsPercentege + currentDate.getMinutes()) / 60;
    const hoursPercentege = (minutesPercentege + currentDate.getHours()) / 12;

    setRotation(secondsHand, secondsPercentege);
    setRotation(minutesHand, minutesPercentege);
    setRotation(hoursHand, hoursPercentege);
};

setClock();

setInterval(setClock, 1000);