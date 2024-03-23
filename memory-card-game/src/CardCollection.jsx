import { useState } from "react";

import CardMaker from "./CardMaker";


let idCounter = 0;

const initialImageCollection = [
    { id: ++idCounter},
    { id: ++idCounter},
    { id: ++idCounter},
    { id: ++idCounter},
    { id: ++idCounter},
    { id: ++idCounter},
    { id: ++idCounter},
    { id: ++idCounter},
    { id: ++idCounter},
    { id: ++idCounter}
]

function shuffleArray(array)
{
    return array.sort(() => Math.random() - 0.5);
}

export default function CardCollection()
{
    const [ imageCollection, setImageCollection ] = useState(shuffleArray([...initialImageCollection]));
    const [ clickedCards, setClickedCards ] = useState(new Set());
    const [ score, setScore ] = useState(0);
    const [ bestScore, setBestScore ] = useState(0);

    function handleCardClick(cardID)
    {
        


        if (clickedCards.has(cardID))
        {
            window.alert("Already Clicked Card: " + cardID);
            setScore(0);
            setClickedCards(new Set());
            setImageCollection(shuffleArray([...initialImageCollection]));
        } 
        else
        {
            setClickedCards(prev => new Set(prev.add(cardID)));
            setScore(prevScore => prevScore + 1);
            if (score + 1 > bestScore)
            {
                setBestScore(score + 1);
            }
            if (score + 1 === 10)
            {
                window.alert("You Won!");
            }
        } 

        setImageCollection(shuffleArray([...imageCollection]));

        
    }

    function handleResetClick()
    {
            setScore(0);
            setClickedCards(new Set());
            setImageCollection(shuffleArray([...initialImageCollection]));
    }


    return (
        <div>
            <div className="card-collection">
                {imageCollection.map((img) => (
                    <CardMaker 
                    key={img.id} 
                    altText={"Card " + img.id} 
                    cardText={" "}
                    onCardClick={ () => handleCardClick(img.id)}    
                    />
                ))}
            </div>
            <div>
                <h3>{"Score: " + score}</h3>
                <h3>{"Best: " + bestScore}</h3>
            </div>

            <button type="button" className="reset-button" onClick={ () => handleResetClick()}>RESET</button>
        </div>
    )
}