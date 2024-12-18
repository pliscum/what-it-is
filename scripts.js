// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для анимации элементов
function animateOnScroll() {
    const element = document.querySelector('.elementIn2');
    if (isElementInViewport(element)) {
        element.classList.add('visible'); // Добавляем класс для отображения
    }
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', animateOnScroll);

// Вызываем функцию при загрузке страницы
animateOnScroll();