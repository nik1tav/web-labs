var catalogData = [];

document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            catalogData = JSON.parse(xhr.responseText);
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
            };

        };
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
        };

    };
    xhr.open("GET", "ajaxTours.php", true);
    xhr.send();
});

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
                        <a href="tour.php?id=${index}" class="btn btn-info">Подробнее</a>
                    </div>
                </div>
            </div>
        `;
        catalog.innerHTML += card;
    });
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
const form = document.getElementById("checkoutForm")
form.addEventListener('submit', function (event) {
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
        
        
        const formData = new FormData(form);
        cart.forEach(tour => {
            formData.append('tours[]', tour.id);
            
        });
        formData.append('name', name);
        formData.append('dob', dob);
        formData.append('email', email);
        formData.append('phone', phone);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "ajaxBooking.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                for (const pair of formData.entries()) {
                    console.log(pair[0] + ': ' + pair[1]);
                }
                localStorage.removeItem('cart'); // Очистка корзины после успешного заказа
                loadCart(); // Перезагрузить корзину
            };
        };
        xhr.send(formData);
    
        
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