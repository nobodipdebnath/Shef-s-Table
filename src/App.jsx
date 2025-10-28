import { useState } from "react";
import "./App.css";
import { Cards } from "./Components/Cards/Cards";
import { Hero } from "./Components/Hero/Hero";
import { NavBar } from "./Components/NavBar/NavBar";
import { Recipes } from "./Components/Recipes/Recipes";
import { Sidebar } from "./Components/Sidebar/Sidebar";

function App() {
  const [recipeQue, setRecipeQue] = useState([]);

  const [preparingRecipes, setPreparingRecipes] = useState([]);

  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipe = (recipe) =>{

    const isExist = recipeQue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);
    if(!isExist){
      setRecipeQue([...recipeQue,recipe])
    } else{
      alert('Your Item already exist');
    }
    
  }
  const handelRemove = id => {
    // find which recipe remove
    const deletedRecipe = recipeQue.find(recipe => recipe.recipe_id === id);

    const updateQue = recipeQue.filter(recipe => recipe.recipe_id !== id);
    setRecipeQue(updateQue);
    setPreparingRecipes([...preparingRecipes, deletedRecipe]);
  }
  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  }
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Recipes></Recipes>
      <div className="flex flex-col md:flex-row gap-6 mx-[7%] lg:mx-[4%] my-12">
        <Cards addRecipe={addRecipe}></Cards>
        <Sidebar recipeQue={recipeQue} handelRemove={handelRemove} preparingRecipes={preparingRecipes} calculateTimeAndCalories={calculateTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories} ></Sidebar>
      </div>
    </>
  );
}

export default App;
