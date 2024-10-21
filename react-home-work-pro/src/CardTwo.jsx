import React, { useState } from 'react';
import './CardTwo.css';
import faceImage from './images/a1.jpg'

const CardTwo = () => {

  const description = "\
    Материал корпуса – нержавеющая сталь.\
    Кожаный ремешок.\
    Стекло – Gorila Glass.\
    Батарея – Li-Pol 320 mAh, зарядка через USB.\
    Лампы индикаторные газоразрядные ИВ-16."
  ;

  //const faceImage = './a1.jpg';

  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const displayedDescription = isExpanded ? description : `${description.substring(0, 20)}...`;



  return (

    <div className="product-card">

      <div>
        <h2 className="headfont">NEONICA - Metro 2033</h2>
      </div>


      <div>
        <img className="face-image" src={faceImage} />
      </div>

      <h3 className="product-title">Наручные часы в стиле игры <br /> "Metro - 2033"</h3>
      <p className={`product-description ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {displayedDescription}
      </p>
      <button className="toggle-button" onClick={toggleDescription}>
        {isExpanded ? 'Скрыть' : 'Подробнее'}
      </button>

      <div >
        <button onClick={toggleFavorite}>
          {isFavorited ? '❤️ Убрать из избранного' : '🤍 Добавить в избранное'}
        </button>
      </div>
    </div>
  );

};

export default CardTwo;
