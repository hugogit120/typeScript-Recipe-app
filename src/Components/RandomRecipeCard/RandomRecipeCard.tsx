import React from "react"
import { IMeal } from "../../lib/interfaces";
import "./RandomRecipeCard.css"


interface IRandomRecipeProps {
    randomRecipe: IMeal;
}


const RandomRecipeCard: React.FC<IRandomRecipeProps> = ({
    randomRecipe
}) => {

    return (
        <div className="randomCard">
            <img className="imageOfTheCard" alt="meal" src={randomRecipe.strMealThumb} />
            <div className="recipeNameContainer">
                <div className="nameOfRecipe" >
                    <p>{randomRecipe.strMeal}</p>
                </div>
                <div className="categoryName">
                    <p>{randomRecipe.strCategory}</p>
                </div>
            </div>
        </div>
    )
}

export default RandomRecipeCard