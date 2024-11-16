let screenshotPanel = document.getElementById("screenshotPanel");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let images = document.querySelectorAll(".gallery img");
let descriptionScreenshot = document.getElementById("descriptionScreenshot");
let imageWidth = 1020; 
let numberOfImages = images.length;

let textArray = ["Тима - харизматичный и уверенный в себе студент, который возглавляет группу студентов. Он может быть как другом, так и врагом, в зависимости от его намерений.", "Саня - умный и немного замкнутый студент, который проводит много времени за компьютером. У него есть множество знаний и способностей, но он старательно их скрывает.", "Илья - загадочный студент, полный амбиций и мечтаний, постоянно грезит о бедующем. Илья забавный и любопытный, всегда готов исследовать новое.", "Охранник - крепкий мужчина с серьезным выражением лица, но добрым взглядом. Он внимательно следит за тем, что происходит вокруг."];

function updateScrollPosition(newIndex) {
    let newScrollPosition = newIndex * imageWidth;
    screenshotPanel.scrollLeft = newScrollPosition;
    descriptionScreenshot.textContent = textArray[newIndex];
}

function getCurrentIndex() {
    return Math.round(screenshotPanel.scrollLeft / imageWidth);
}

rightBtn.addEventListener('click', () => {
    let currentIndex = getCurrentIndex();
    let newIndex = currentIndex + 1;
    if (newIndex >= numberOfImages) {
        newIndex = 0;
    }
    updateScrollPosition(newIndex);
});

leftBtn.addEventListener('click', () => {
    let currentIndex = getCurrentIndex();
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = 3;
    }
    updateScrollPosition(newIndex);
});


document.addEventListener('DOMContentLoaded', () => {
    let robot = document.getElementById('robot');
    let moveDistance = 2;
    let position = 0;
    let moveRight = true;

    function moveRobot() {
        let parentWidth = robot.parentElement.offsetWidth - 28;
        let robotWidth = robot.offsetWidth;

        if (moveRight) {
            position += moveDistance;
            if (position >= (parentWidth - robotWidth)) {
                moveRight = false;
                flip();
            }
        } else {
            position -= moveDistance;
            if (position <= 0) {
                moveRight = true;
                flip();
            }
        }

        robot.style.left = position + 'px';
    }

    robot.addEventListener('click', () => {
        moveDistance += 0.2; 
    
        console.log(moveDistance)
    });

    setInterval(moveRobot, 5);

    descriptionScreenshot.textContent = textArray[0];
});

function flip() {
    if (robot.style.transform === 'scaleX(1)') {
        robot.style.transform = 'scaleX(-1)'; 
    } else {
        robot.style.transform = 'scaleX(1)'; 
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("backgroundMusic");
    var playButton = document.getElementById("playButton");
    var overlay = document.getElementById("overlay");
    var content = document.getElementById("content");

    playButton.addEventListener("click", function() {
        audio.play().then(function() {
            overlay.style.display = "none";
            content.style.filter = "none";
            document.body.style.overflow = "auto"; 
        }).catch(function(error) {
            console.log("Ошибка воспроизведения музыки:", error);
        });
    });
});