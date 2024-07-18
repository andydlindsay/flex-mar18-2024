import { useEffect, useState } from "react";
import axios from 'axios';

const DataFetching = () => {
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   // get the satellite position and update state
  // });

  // useEffect(() => {
  //   // update the DOM with the new satellite position
  // }, [satellitePos]);

  // useEffect(() => {
  //   fetch('https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes')
  //     .then(res => res.json()) // parse the body turning JSON into JS
  //     .then(recipeArr => {
  //       console.log(recipeArr);
  //       setRecipes(recipeArr);
  //     });
  // }, []);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes')
      .then((response) => {
        console.log(response.data);
        setRecipes([...recipes, ...response.data]);
        setRecipes(prev => [...prev, ...response.data]);
      });
  }, []);

  const mappedRecipes = recipes.map((recipe) => {
    return <p key={recipe.id}>{recipe.title}</p>;
  });

  return (
    <div>
      <h2>Data Fetching!</h2>
      { mappedRecipes }
    </div>
  );
};

export default DataFetching;
