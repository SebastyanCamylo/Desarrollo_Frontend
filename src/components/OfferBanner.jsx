import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/OfferBanner.css";

function OfferBanner() {
    // useNavigate es el hook correcto de react-router-dom v6
    const navigate = useNavigate();

    // Función para manejar el clic en el botón
    const handleButtonClick = () => {
        navigate('/productos'); // Redirige al usuario a la sección de productos
    };

    return (
        <div className="offer-banner-container">
            <div className="offer-banner-content">
                <h2>¡Oferta Especial!</h2>
                <p>Descubre los increíbles descuentos en nuestros productos seleccionados.</p>
                <button className="offer-banner-button" onClick={handleButtonClick}>
                    Ver Productos
                </button>
            </div>
        </div>
    );
}

export default OfferBanner;
