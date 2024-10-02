const catalogData = [
    {
        title: "4-Дневное сафари по дикой природе Кении",
        image: "images/4d.jpg",
        country: "Кения",
        price: 200000,
        description: "Откройте для себя дикую природу национальных парков Кении. Сафари в сопровождении опытного гида.",
        time: "4 дня",
        distance: "средняя",
        type: "Частный тур"
    },
    {
        title: "7-Дневное сафари в Танзании с посещением Килиманджаро",
        image: "images/7d.jpg",
        country: "Танзания",
        price: 350000,
        description: "Комбинированный тур по саванне с восхождением на вершину Килиманджаро.",
        time: "7 дней",
        distance: "длинная",
        type: "Групповой тур"
    },
    {
        title: "3-Дневное сафари в Серенгети",
        image: "images/3d.jpg",
        country: "Танзания",
        price: 150000,
        description: "Наблюдайте за миграцией диких животных в легендарном парке Серенгети.",
        time: "3 дня",
        distance: "средняя",
        type: "Частный тур"
    },
    {
        title: "5-Дневное сафари в Ботсване с посещением Окаванго",
        image: "images/5d.jpg",
        country: "Ботсвана",
        price: 300000,
        description: "Исследуйте дельту Окаванго и насладитесь уникальными ландшафтами Ботсваны.",
        time: "5 дней",
        distance: "длинная",
        type: "Групповой тур"
    },
    {
        title: "2-Дневное сафари в Южной Африке",
        image: "images/2d.jpg",
        country: "Южная Африка",
        price: 120000,
        description: "Посетите знаменитый Крюгер-парк и наблюдайте за Большой Пятёркой.",
        time: "2 дня",
        distance: "короткая",
        type: "Частный тур"
    },
    {
        title: "6-Дневное сафари по Намибии с посещением дюн Соссусфлей",
        image: "images/6d.webp",
        country: "Намибия",
        price: 280000,
        description: "Погрузитесь в захватывающие пейзажи пустыни Намиб и насладитесь красотой дюн Соссусфлей.",
        time: "6 дней",
        distance: "длинная",
        type: "Групповой тур"
    },
    {
        title: "10-Дневное сафари по Западной Африке",
        image: "images/10d.jpg",
        country: "Сенегал",
        price: 500000,
        description: "Экзотический тур по саваннам Западной Африки с посещением Сенегала и Мали.",
        time: "10 дней",
        distance: "длинная",
        type: "Частный тур"
    },
    {
        title: "8-Дневное сафари по Уганде с посещением горилл",
        image: "images/8d.jpg",
        country: "Уганда",
        price: 400000,
        description: "Незабываемая встреча с горными гориллами в лесах Уганды.",
        time: "8 дней",
        distance: "длинная",
        type: "Частный тур"
    },
    {
        title: "5-Дневное сафари по Зимбабве с посещением водопада Виктория",
        image: "images/5dd.jpg",
        country: "Зимбабве",
        price: 320000,
        description: "Оцените величие водопада Виктория и красоту африканской природы.",
        time: "5 дней",
        distance: "средняя",
        type: "Групповой тур"
    },
    {
        title: "3-Дневное сафари по Намибии с обзором редких животных",
        image: "images/3d.webp",
        country: "Намибия",
        price: 180000,
        description: "Увидьте редких пустынных слонов и насладитесь природой Намибии.",
        time: "3 дня",
        distance: "средняя",
        type: "Частный тур"
    },
    {
        title: "7-Дневное сафари по Руанде с посещением вулканов",
        image: "images/7d.webp",
        country: "Руанда",
        price: 370000,
        description: "Посетите вулканы и национальные парки Руанды, насладитесь удивительной фауной.",
        time: "7 дней",
        distance: "длинная",
        type: "Частный тур"
    }
];

// Функция для генерации карточек
function generateCatalogItems(items) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = ''; // Очищаем контейнер

    items.forEach((item, index) => {
        const card = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.country}. ${item.type}. ${item.distance} дистанция.</p>
                        <p class="card-text"><strong>${item.time}</strong></p>
                        <a href="tour.html?id=${index}" class="btn btn-info">Подробнее</a>
                    </div>
                </div>
            </div>
        `;
        catalog.innerHTML += card;
    });
}
if (window.location.href.match("catalog")){
    // Поиск по каталогу
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchText = e.target.value.toLowerCase();
        const filteredItems = catalogData.filter(item => 
            item.title.toLowerCase().includes(searchText) ||
            item.country.toLowerCase().includes(searchText) ||
            item.type.toLowerCase().includes(searchText)
        );
        generateCatalogItems(filteredItems);
    });

    // Изначальная генерация всех элементов каталога
    generateCatalogItems(catalogData);
}

if (window.location.href.match("tour")){
    // Получаем параметр ID из URL
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id');

    // Находим нужный тур в массиве по ID
    const tour = catalogData[tourId];

    // Если тур найден, генерируем HTML-контент
    if (tour) {
        document.getElementById('tourDetails').innerHTML = `
            <h1 class="text-center mb-4">${tour.title}</h1>
            <div class="row">
                <div class="col-md-6">
                    <img src="${tour.image}" class="img-fluid" alt="${tour.title}">
                </div>
                <div class="col-md-6">
                    <h3>Описание:</h3>
                    <p>${tour.description}</p>
                    <p><strong>Дистанция:</strong> ${tour.distance}</p>
                    <p><strong>Тип:</strong> ${tour.type}</p>
                    <p><strong>Страна:</strong> ${tour.country}</p>
                    <p><strong>Длительность:</strong> ${tour.time}</p>
                    <p><strong>Средняя стоимость:</strong> ~${tour.price}р.</p>
                    <button id="addToCartBtn" class="btn btn-success">Добавить к оформлению</button>
                </div>
            </div>
        `;
        document.getElementById('addToCartBtn').addEventListener('click', () => addToCart(tour));
    } else {
        document.getElementById('tourDetails').innerHTML = '<p>Тур не найден.</p>';
    }
}
function addToCart(tour) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(tour);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Тур добавлен в корзину!");
}
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cartItems');

    if (cart.length > 0) {
        cartItems.innerHTML = cart.map(tour => `
            <div class="card mb-3">
                <img src="${tour.image}" class="card-img-top" alt="${tour.title}">
                <div class="card-body">
                    <h5 class="card-title">${tour.title}</h5>
                    <p class="card-text">${tour.country}. ${tour.type}. ${tour.distance} дистанция.</p>
                    <p class="card-text">Стоимость: ${tour.price}р.</p>
                </div>
            </div>
        `).join('');
    } else {
        cartItems.innerHTML = '<p>Корзина пуста.</p>';
    }
}

// Очистка корзины
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

// Валидация формы
document.getElementById('checkoutForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let cart = JSON.parse(localStorage.getItem('cart'));

    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (name && dob && email && phone && cart != null) {
        document.getElementById('alertMessage').innerHTML = `
            <div class="alert alert-success" role="alert">
                Заказ успешно оформлен!
            </div>
        `;
        console.log(`имя: ${name}, дата рождения:${dob}, email: ${email},
             телефон: ${phone} Заказал тур:`);
        cart.forEach((elem, index)=> {
            console.log(index, ":", elem)
        });
        localStorage.removeItem('cart'); // Очистка корзины после успешного заказа
        loadCart(); // Перезагрузить корзину
    } else if( cart != null) {
        document.getElementById('alertMessage').innerHTML = `
            <div class="alert alert-danger" role="alert">
                Пожалуйста, заполните все поля.
            </div>
        `;
    } else {
        document.getElementById('alertMessage').innerHTML = `
            <div class="alert alert-danger" role="alert">
                Пожалуйста, выберите тур.
            </div>
        `;
    }
});
if(window.location.href.match("checkout")){
// Загрузка корзины при открытии страницы
window.onload = loadCart;
}