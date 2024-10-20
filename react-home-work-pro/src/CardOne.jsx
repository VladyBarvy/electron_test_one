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



  // <div className="product-description-container">
    //   <p className={`description ${isExpanded ? 'expanded' : 'collapsed'}`}>
    //     {isExpanded ? description : `${description.slice(0, 20)}...`}
    //   </p>
    //   <button onClick={toggleDescription}>
    //     {isExpanded ? 'Свернуть' : 'Развернуть'}
    //   </button>
    // </div>






    // <div className="product-description-container">
    //   <div className={`description ${isExpanded ? 'expanded' : 'collapsed'}`}>
    //     {description}
    //   </div>
    //   <button onClick={toggleDescription}>
    //     {isExpanded ? 'Свернуть' : 'Развернуть'}
    //   </button>

    //   <div class="container">
    //     <button
    //       class="button"
    //       aria-expanded="false"
    //       aria-controls="list"
    //     >
    //       Меню
    //     </button>

    //     <ul class="menu" id="list" aria-hidden="true">
    //       <li class="menu-item">
    //         <a href="#" class="menu-link" tabindex="-1">Винни-Пух</a>
    //       </li>
    //       <li class="menu-item">
    //         <a href="#" class="menu-link" tabindex="-1">Тигра</a>
    //       </li>
    //       <li class="menu-item">
    //         <a href="#" class="menu-link" tabindex="-1">Пятачок</a>
    //       </li>
    //     </ul>
    //   </div>

    // </div>














    // <div className="container">
    //   <button
    //     className={`button ${isOpen ? 'active' : ''}`}
    //     aria-expanded={isOpen}
    //     aria-controls="list"
    //     onClick={toggleMenu}
    //   >
    //     Меню
    //   </button>

    //   <ul className="menu" aria-hidden={!isOpen}>
    //     <li className="menu-item">
    //       <a href="#" className="menu-link" tabIndex={isOpen ? 0 : -1}>
    //         {product}
    //       </a>
    //     </li>
    //   </ul>
    // </div>









// https://doka.guide/recipes/dropdown-animation/?ysclid=m2eys6udi3146421769


/*
    <div className="container">
      <button
        className={`button ${isOpen ? 'active' : ''}`}
        aria-expanded={isOpen}
        aria-controls="list"
        onClick={toggleMenu}
      >
        Меню
      </button>

      <ul className="menu" aria-hidden={!isOpen}>
        <li className="menu-item">
          <a href="#" className="menu-link" tabIndex={isOpen ? 0 : -1}>Винни-Пух</a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link" tabIndex={isOpen ? 0 : -1}>Тигра</a>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link" tabIndex={isOpen ? 0 : -1}>Пятачок</a>
        </li>
      </ul>
    </div>
    */









    




/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/
