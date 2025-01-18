document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Останавливает выполнение стандартного действия ссылки

    const targetId = this.getAttribute('href'); // Получаем значение href
    const targetElement = document.querySelector(targetId); // Находим целевую секцию

    // Скроллим к элементу с учетом высоты заголовка
    const headerOffset = 400; // Высота заголовка
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth' // Плавная прокрутка
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('loginButton');
  const modal = document.getElementById('registrationModal');
  const closeButton = document.getElementById('closeModal');
  const registrationForm = document.getElementById('registrationForm');

  // Открытие модального окна
  loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // Убираем стандартное действие ссылки
    modal.style.display = 'block'; // Показываем модальное окно
  });

  // Закрытие модального окна
  closeButton.addEventListener('click', function () {
    modal.style.display = 'none'; // Скрываем модальное окно
  });

  // Закрытие модального окна при клике вне формы
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Обработка отправки формы
  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Остановить стандартное поведение формы
    // Здесь можно добавить код для обработки регистрации
    modal.style.display = 'none'; // Закрыть модальное окно после успешной отправки
    alert('Вы успешно зарегистрированы!'); // Сообщение об успехе
  });
});


// Получаем элементы модального окна и кнопку
const modal = document.getElementById('registrationModal');
const loginButton = document.getElementById('loginButton');
const closeButton = document.getElementById('closeModal');

// Функция для открытия модального окна
loginButton.onclick = function() {
  modal.style.display = 'block';
}

// Функция для закрытия модального окна
closeButton.onclick = function() {
  modal.style.display = 'none';
}

// Закрыть модальное окно при клике вне его содержимого
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}




