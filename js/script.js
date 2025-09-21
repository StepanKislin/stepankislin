// Функция для перезагрузки страницы
function reloadPage() {
    location.reload();
}

const leftBtn = document.querySelector('#leftBtnSelector');
const rightBtn = document.querySelector('#rightBtnSelector');

const divSoftSkills = document.querySelector('.divSoftSkills');
const divHardSkills = document.querySelector('.divHardSkills');

// Показываем Hard Skills по умолчанию
divHardSkills.style.display = 'block';
divSoftSkills.style.display = 'none';
leftBtn.classList.add('active');
rightBtn.classList.remove('active');

leftBtn.addEventListener('click', function () {
    divHardSkills.style.display = 'block';
    divSoftSkills.style.display = 'none';

    // Активная кнопка
    leftBtn.classList.add('active');
    rightBtn.classList.remove('active');
});

rightBtn.addEventListener('click', function () {
    divSoftSkills.style.display = 'block';
    divHardSkills.style.display = 'none';

    // Активная кнопка
    rightBtn.classList.add('active');
    leftBtn.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Остановить наблюдение после появления
            }
        });
    }, {
        threshold: 0.1 // Элемент начинает анимироваться, когда хотя бы 10% его видно
    });

    fadeElements.forEach(el => observer.observe(el));
});



function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("img01");


    modal.style.display = "block";

    modalImg.src = imageSrc;


    // Блокируем прокрутку
    document.body.classList.add("modal-open");
}

// Закрытие по крестику
document.querySelector(".modal .close").onclick = function () {
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("modal-open");
};

// Закрытие по клику вне изображения
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
};



document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Проверяем сохранённую тему
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        // Меняем иконку на "темную"
        themeToggle.style.backgroundImage = "url('../img/sun.png')";
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.style.backgroundImage = "url('../img/sun.png')"; // Темная иконка
        } else {
            localStorage.removeItem('theme');
            themeToggle.style.backgroundImage = "url('../img/sun-light.png')"; // Светлая иконка
        }
    });
});

