import axios from 'axios';
import { IRandomMeal, ICategories } from './interfaces';

const api = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1/"
});


//stateless functional component ----> RFC

//get a random recipe 
export const getRandomRecipe = (): Promise<IRandomMeal> => {
    return (
        api.get("/random.php")
            .then(({ data }) => data)
    )
}

//get all categories
export const getCategories = (): Promise<ICategories> => {
    return (
        api.get("/categories.php")
            .then(({ data }) => data)
    )
}

//get Recipes for category

