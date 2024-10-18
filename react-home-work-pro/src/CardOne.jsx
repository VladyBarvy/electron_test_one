import React, { useState } from 'react';

const CardOne = ({ product }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{isExpanded ? product.description : `${product.description.slice(0, 20)}...`}</p>
            <button onClick={toggleDescription}>
                {isExpanded ? 'Скрыть' : 'Читать подробнее'}
            </button>
            <button onClick={toggleFavorite}>
                {isFavorited ? '❤️ Убрать из избранного' : '🤍 Добавить в избранное'}
                &#x2764;
            </button>
        </div>
    );
};

export default CardOne;
