<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Оформление заказа</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="p-3 mb-3 bg-light">
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Wild Safari</a>
                <a href="catalog.php" class="nav-link">Каталог</a>
            </div>
        </nav>
    </header>

    <div class="container">
        <h2>Оформление заказа</h2>

        <div class="row">
            <div class="col-md-6" id="cartItems">
                <!-- Корзина будет подгружаться сюда -->
            </div>

            <div class="col-md-6">
                <form id="checkoutForm">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="name" placeholder="Имя">
                    </div>
                    <div class="mb-3">
                        <input type="date" class="form-control" id="dob" placeholder="Дата рождения">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Email">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="phone" placeholder="Телефонный номер">
                    </div>
                    <button type="submit" class="btn btn-success">Заказать</button>
                    <button type="button" class="btn btn-danger" onclick="clearCart()">Очистить корзину</button>
                </form>
                <div id="alertMessage" class="mt-3"></div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
