import { useState } from "react";

import CardMaker from "./CardMaker";
import moleImage from "./images/mole.jpg";
import fishImage from "./images/fish.jpg";
import dogImage from "./images/dog.jpg";
import catImage from "./images/cat.jpg";
import cowImage from "./images/cow.jpg";
import mouseImage from "./images/mouse.jpg";
import horseImage from "./images/horse.jpg";
import tigerImage from "./images/tiger.jpg";
import lionImage from "./images/lion.jpg";
import goatImage from "./images/goat.jpg";

let idCounter = 0;

const initialImageCollection = [
    { id: ++idCounter, src: moleImage, altText: "Mole", cardText: "MOLE"},
    { id: ++idCounter, src: fishImage, altText: "Fish", cardText: "FISH"},
    { id: ++idCounter, src: dogImage, altText: "Dog", cardText: "DOG"},
    { id: ++idCounter, src: catImage, altText: "Cat", cardText: "CAT"},
    { id: ++idCounter, src: cowImage, altText: "Cow", cardText: "COW"},
    { id: ++idCounter, src: mouseImage, altText: "Mouse", cardText: "MOUSE"},
    { id: ++idCounter, src: horseImage, altText: "Horse", cardText: "HORSE"},
    { id: ++idCounter, src: tigerImage, altText: "Tiger", cardText: "TIGER"},
    { id: ++idCounter, src: lionImage, altText: "Lion", cardText: "LION"},
    { id: ++idCounter, src: goatImage, altText: "Goat", cardText: "GOAT"},
]

function shuffleArray(array)
{
    return array.sort(() => Math.random() - 0.5);
}

export default function CardCollection()
{
    const [ imageCollection, setImageCollection ] = useState(shuffleArray([...initialImageCollection]));
    const [ clickedCards, setClickedCards ] = useState(new Set());

    function handleCardClick(cardID)
    {
        setClickedCards(prev => new Set(prev.add(cardID)));
        setImageCollection(shuffleArray([...imageCollection]));
        
    }


    return (
        <div>
            <div className="card-collection">
                {imageCollection.map((img) => (
                    <CardMaker 
                    key={img.id} 
                    image={img.src} 
                    altText={img.altText} 
                    cardText={img.cardText + " " + img.id}
                    onCardClick={ () => 
                        handleCardClick(img.id)}

                    />
                ))}
            </div>
            <div>
                <h3>{imageCollection.length}</h3>
                <h3>{clickedCards.size}</h3>
            </div>
        </div>
    )
}