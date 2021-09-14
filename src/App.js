import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_ID = "a8163bc6";
  const YOUR_APP_KEY = "09d0d99c0682974a2ca3e6331fb12a29	";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  //getting data from api//
  async function getRecipe() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  };
  return (
    <div className="app">
      <h1 className="heading">Food Recipe Plaza 🍔</h1>
      <form className="app_search" onSubmit={onSubmit}>
        <input
          className="app_input"
          type="text"
          placeholder="Enter Name of Ingredient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />
        <select className="app_healthLabels">
          <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
        

        <option onClick={() => sethealthLabel("vegetarian")}>vegetarian</option>

        <option onClick={() => sethealthLabel("paleo")}>Paleo</option>

        <option onClick={() => sethealthLabel("dairy-free")}>Dairy-Free</option>

        <option onClick={() => sethealthLabel("gluten-free")}>
          Gluten-Free
        </option>

        <option onClick={() => sethealthLabel("wheat-free")}>Wheat-Free</option>

        <option onClick={() => sethealthLabel("low-sugar")}>Low-Sugar</option>

        <option onClick={() => sethealthLabel("egg-free")}>Egg-Free</option>

        <option onClick={() => sethealthLabel("peanut-free")}>
          Peanut-Free
        </option>

        <option onClick={() => sethealthLabel("tree-nut-free")}>
          Tree-Nut-Free
        </option>

        <option onClick={() => sethealthLabel("soy-free")}>Soy-Fre</option>

        <option onClick={() => sethealthLabel("fish-free")}>Fish-Free</option>

        <option onClick={() => sethealthLabel("shell-fish-free")}>
          Shell-Fish-Free
        </option>
        </select>
      </form>
      <div className="app_recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
