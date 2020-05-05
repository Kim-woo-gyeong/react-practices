import React from 'react';
import style from './CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${style.wrapper} ${style.inverted}`}>
            안녕하세요 저는
            <span className="something">CSSModule</span>
        </div>
    )
}

export default CSSModule;