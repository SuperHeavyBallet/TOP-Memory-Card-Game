import React from "react";
import { useState } from "react";
import { useEffect } from "react";




export default function CardMaker(props)
{

    const { altText, cardText, onCardClick, shouldFlip} = props;


    const [ image, setImage ] = useState('');
    const [ isFlipped, setIsFlipped ] = useState(false);

    const [isHovering, setIsHovering] = useState(false); // New state for hover


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

            onCardClick();

           
    }



    return (
        <div className="card-container" 
            onClick={handleClick}
            onMouseEnter={() => setIsHovering(true)}  // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovering(false)} // Set hover state to false on mouse leave
            >
        <div className={`card ${shouldFlip ? 'is-flipped' : ''} ${isHovering ? 'hover-class' : ''}`}>
            <div className="card-face">
                {image && <img className="card-image" src={image} alt={altText}></img>}
                
            </div>
            <div className="card-back">
                

            </div>
        </div>
    </div>
    )
}