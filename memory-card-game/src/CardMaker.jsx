import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function CardMaker(props)
{

    const { image, altText, cardText, onCardClick, isClicked} = props;
    const [ hasBeenClicked, setHasBeenClicked ] = useState(false);
    

    function handleClick()
    {
        if (onCardClick && !hasBeenClicked)
        {
            onCardClick();
            setHasBeenClicked(true);
        }

    }

    const cardClassName = hasBeenClicked ? "clicked-card" : "card";


    return (
        <div className={ `card-container ${hasBeenClicked ?  'flipped' : ''}`}>
            <div>
            <div className={cardClassName} onClick={handleClick}>
                <img className="card-image" src={image} alt={altText}></img>
                <h3 className="card-text">{cardText}</h3>
               </div>
               </div>
        </div>
    )
}