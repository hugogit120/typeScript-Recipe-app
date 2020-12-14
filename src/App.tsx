import React, { useState, useEffect } from 'react';
import './App.css';
import { getCategories, getRandomRecipe } from './lib/api';
import { ICategories, IMeal } from './lib/interfaces';
import Navbar from './Components/Navbar/Navbar';
import RandomRecipeCard from './Components/RandomRecipeCard/RandomRecipeCard';
import Categories from './Components/Categories/Categories';


const App: React.FC = () => {
  const [randomRecipe, setRandomRecipe] = useState<IMeal | undefined>();
  const [allCategories, setAllCategories] = useState<ICategories | undefined>();

  useEffect(() => {
    getRandomRecipe()
      .then(data => setRandomRecipe(data.meals[0]))
    getCategories()
      .then(data => setAllCategories(data))
  }, [])

  console.log(allCategories);

  return (
    <>
      <Navbar />
      <div>
        {allCategories && (
          <Categories allCategories={allCategories} />
        )}
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }} >
        {randomRecipe && (

          <RandomRecipeCard randomRecipe={randomRecipe} />
        )}
      </div>
    </>
  );

}

export default App;
