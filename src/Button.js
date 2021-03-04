import React from 'react';

function Button(props) {
    return (
        <div className="card-button">
            <button onClick={()=>props.setBought(props.id) }
                    className={props.bought ? "disabled" : "btn"} >
                {props.bought ?"Добавлено в корзину" : "Добавить в корзину"}
            </button>
        </div>

    );

}

export default Button;