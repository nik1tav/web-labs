<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wild Safari - Каталог</title>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="p-3 mb-3 bg-light">
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand text-uppercase fw-bold" href="index.html">Wild Safari</a>
                <div class="d-flex nav-links">
                    <a href="index.html" class="nav-link">О нас</a>
                    <a href="#" class="nav-link">Каталог</a>
                    <li><a id="btn" href="checkout.php" class="button">Оформить</a></li>
                </div>
            </div>
        </nav>
    </header>

    <div class="container">
        <h1 class="text-center mb-4">Каталог</h1>
        <div class="row mb-4">
            <div class="col-md-12">
                <input type="text" id="searchInput" class="form-control" placeholder="Поиск по названию, стране, типу...">
            </div>
        </div>
        <div id="catalog" class="row g-4"></div>
    </div>

    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
