import React, { useState } from 'react';
import './CardOne.css'

const CardOne = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const product = {
    name: 'Наручные часы NEONICA - Metro 2033',
    description: 'Материал корпуса – нержавеющая сталь.\n Стекло – Gorila Glass.\n Батарея – литиевая, зарядка через USB. Заряда хватает примерно на 150-200 включений.\n Индикаторные газоразрядные лампы ИВ-16, цифровые матрицы АЛС314, светодиоды 3ЛС102.',
    image_product: '../images/a1.jpg'
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (

    <div className="card">

      <div>
        <h2 className="headfont">{product.name}</h2>
      </div>

      <div >
        <a href="#" className="card__image">
          <img
            src={product.image_product}
            alt="NEONICA - Metro 2033"
          />
        </a>
      </div>

      <div className="container_description" >
        <p className="description">{isExpanded ? product.description : `${product.description.slice(0, 20)}...`}</p>
        <button className="button_description" onClick={toggleDescription}>
          {isExpanded ? 'Скрыть' : 'Подробнее'}
        </button>
      </div>



      <div className="card__bottom">
        <button className="card__add" onClick={toggleFavorite}>
          {isFavorited ? '❤️ Убрать из избранного' : '🤍 Добавить в избранное'}
        </button>
      </div>

    </div>

  );
};

export default CardOne;
