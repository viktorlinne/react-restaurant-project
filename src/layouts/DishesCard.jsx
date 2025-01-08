import React from 'react';
import Button from "./Button.jsx";

const DishesCard = (props) => {
    return (
        <div>
            <img src={props.img} alt="example of food"/>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <h3>{props.price}</h3>
                <Button title={"Beställ Nu"}/>
            </div>
        </div>
    );
};

export default DishesCard;
