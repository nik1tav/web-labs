-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 02 2024 г., 09:50
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `WildSafari`
--

-- --------------------------------------------------------

--
-- Структура таблицы `booking`
--

CREATE TABLE `booking` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `dateOfBirth` text NOT NULL,
  `phone` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `booking`
--

INSERT INTO `booking` (`id`, `name`, `dateOfBirth`, `phone`, `email`) VALUES
(1, 'nek', '2011-11-11', '79993337777', 'nek@mail.ru');

-- --------------------------------------------------------

--
-- Структура таблицы `catalog`
--

CREATE TABLE `catalog` (
  `id` int NOT NULL,
  `title` text NOT NULL,
  `image` text NOT NULL,
  `country` text NOT NULL,
  `price` int NOT NULL,
  `description` text NOT NULL,
  `time` text NOT NULL,
  `distance` text NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `catalog`
--

INSERT INTO `catalog` (`id`, `title`, `image`, `country`, `price`, `description`, `time`, `distance`, `type`) VALUES
(1, '4-Дневное сафари по дикой природе Кении', 'images/4d.jpg', 'Кения', 200000, 'Откройте для себя дикую природу национальных парков Кении. Сафари в сопровождении опытного гида.', '4 дня', 'средняя', 'Частный тур'),
(2, '7-Дневное сафари в Танзании с посещением Килиманджаро', 'images/7d.jpg', 'Танзания', 350000, 'Комбинированный тур по саванне с восхождением на вершину Килиманджаро.', '7 дней', 'длинная', 'Групповой тур'),
(3, '3-Дневное сафари в Серенгети', 'images/3d.jpg', 'Танзания', 150000, 'Наблюдайте за миграцией диких животных в легендарном парке Серенгети.', '3 дня', 'средняя', 'Частный тур'),
(4, '5-Дневное сафари в Ботсване с посещением Окаванго', 'images/5d.jpg', 'Ботсвана', 300000, 'Исследуйте дельту Окаванго и насладитесь уникальными ландшафтами Ботсваны.', '5 дней', 'длинная', 'Групповой тур'),
(5, '2-Дневное сафари в Южной Африке', 'images/2d.jpg', 'Южная Африка', 120000, 'Посетите знаменитый Крюгер-парк и наблюдайте за Большой Пятёркой.', '2 дня', 'короткая', 'Частный тур'),
(6, '6-Дневное сафари по Намибии с посещением дюн Соссусфлей', 'images/6d.webp', 'Намибия', 280000, 'Погрузитесь в захватывающие пейзажи пустыни Намиб и насладитесь красотой дюн Соссусфлей.', '6 дней', 'длинная', 'Групповой тур'),
(7, '10-Дневное сафари по Западной Африке', 'images/10d.jpg', 'Сенегал', 500000, 'Экзотический тур по саваннам Западной Африки с посещением Сенегала и Мали.', '10 дней', 'длинная', 'Частный тур'),
(8, '8-Дневное сафари по Уганде с посещением горилл', 'images/8d.jpg', 'Уганда', 400000, 'Незабываемая встреча с горными гориллами в лесах Уганды.', '8 дней', 'длинная', 'Частный тур'),
(9, '5-Дневное сафари по Зимбабве с посещением водопада Виктория', 'images/5dd.jpg', 'Зимбабве', 320000, 'Оцените величие водопада Виктория и красоту африканской природы.', '5 дней', 'средняя', 'Групповой тур'),
(10, '3-Дневное сафари по Намибии с обзором редких животных', 'images/3d.webp', 'Намибия', 180000, 'Увидьте редких пустынных слонов и насладитесь природой Намибии.', '3 дня', 'средняя', 'Частный тур'),
(11, '7-Дневное сафари по Руанде с посещением вулканов', 'images/7d.webp', 'Руанда', 370000, 'Посетите вулканы и национальные парки Руанды, насладитесь удивительной фауной.', '7 дней', 'длинная', 'Частный тур');

-- --------------------------------------------------------

--
-- Структура таблицы `tourBooking`
--

CREATE TABLE `tourBooking` (
  `id` int NOT NULL,
  `booking_id` int NOT NULL,
  `tour_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `tourBooking`
--

INSERT INTO `tourBooking` (`id`, `booking_id`, `tour_id`) VALUES
(1, 1, 3),
(2, 1, 5);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tourBooking`
--
ALTER TABLE `tourBooking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_id` (`booking_id`),
  ADD KEY `tour_id` (`tour_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `tourBooking`
--
ALTER TABLE `tourBooking`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `tourBooking`
--
ALTER TABLE `tourBooking`
  ADD CONSTRAINT `tourbooking_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `tourbooking_ibfk_2` FOREIGN KEY (`tour_id`) REFERENCES `catalog` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
