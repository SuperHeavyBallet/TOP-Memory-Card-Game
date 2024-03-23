import React from "react";
import { useState } from "react";
import { useEffect } from "react";




export default function CardMaker(props)
{

    const { altText, cardText, onCardClick, shouldFlip} = props;


    const [ image, setImage ] = useState('');
    const [ isFlipped, setIsFlipped ] = useState(false);


    useEffect(() => 
    {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                setImage(data.message);
            })
            .catch(error => console.error("Failed to fetch dog image", error));
    }, []);
    

    function handleClick()
    {
        setIsFlipped(true);
        setTimeout(() => 
        {
            onCardClick();
            setIsFlipped(false);
        }, 600);
           
    }



    return (
        <div className="card-container" onClick={handleClick}>
        <div className={`card ${shouldFlip ? 'is-flipped' : ''}`}>
            <div className="card-face">
                {image && <img className="card-image" src={image} alt={altText}></img>}
                <h3>{cardText}</h3>
            </div>
            <div className="card-back">
                {/* Insert your SVG or use a background-image for the paw print */}
            </div>
        </div>
    </div>
    )
}