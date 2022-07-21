import React from 'react'

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <div className="preloader__item">
                    <svg viewBox="-2000 -1000 4000 2000">
                        <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
                        <use xlinkHref="#inf" strokeDasharray="1570 5143" strokeDashoffset="6713px"></use>
                    </svg>
                </div>
            </div>
        </div>
    )
};

export default Preloader