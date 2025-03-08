import React from "react";
import { useParams } from "react-router-dom";

const recipeData = {
  1: { name: "Paneer Butter Masala", image: "/paneer-butter-masala.jpg", ingredients: ["Paneer", "Tomato", "Cream", "Spices"], instructions: "Cook with spices and serve hot." },
  2: { name: "Non-Veg Recipes", image: process.env.PUBLIC_URL + "/ban.jpg", ingredients: ["Chicken", "Spices", "Marinade"], instructions: "Marinate and cook on medium heat." },
  3: { name: "Healthy Salads", image: process.env.PUBLIC_URL + "/ban.jpg", ingredients: ["Lettuce", "Tomato", "Cucumber"], instructions: "Mix and add dressing." },
  4: { name: "Desserts", image: process.env.PUBLIC_URL + "/ban.jpg", ingredients: ["Sugar", "Flour", "Butter"], instructions: "Bake at 180°C for 30 minutes." }
};

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData[parseInt(id, 10)];  // Ensure ID is a number

  if (!recipe) {
    return <h2 className="text-center mt-5 text-danger">Recipe Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-primary">{recipe.name}</h2>
      <img src={recipe.image} className="img-fluid mb-3 rounded shadow" alt={recipe.name} width="300" />
      
      <h4 className="mt-3">Ingredients:</h4>
      <ul className="list-group">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="list-group-item">{ingredient}</li>
        ))}
      </ul>
      
      <h4 className="mt-3">Instructions:</h4>
      <p className="lead">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
