import './App.scss';
import { useEffect, useState } from 'react';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

   const MY_ID = '48bdc34e';
   const MY_KEY = '54d981c21d55c8118dacea9d82aa7216';

   const [mySearch, setMySearch] = useState('');
   const [myRecipes, setMyRecipes] = useState([]);
   const [wordSubmitted, setWordSubmitted] = useState('egg');

   useEffect(() => {
      async function fetchMyApi() {
         const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
         const data = await response.json();
         setMyRecipes(data.hits);
      }
      fetchMyApi();
   }, [wordSubmitted])

   const myRecipeSearch = (e) => {
      setMySearch(e.target.value);
   }

   const finalSearch = (e) => {
      e.preventDefault();
      setWordSubmitted(mySearch);
   }

   return (
      <div className="wrapper">
         <div className='container'>
            <div className="header">
               Cook with what you have in your fridge!
            </div>
            <div className="instruction">
               Type in the food with a space and the app will pick up the recipe for you! <br />
               (Input in English)
            </div>
         </div>
         <div className="container">
            <form onSubmit={finalSearch}>
               <div className="input-search">
                  <input type="text" placeholder='Search...' onChange={myRecipeSearch} value={mySearch} />
               </div>
            </form>

            <div className="button-search">
               <button onClick={finalSearch}>
                  <img src='https://img.icons8.com/bubbles/344/google-web-search.png' alt="search" width='50px' />
               </button>
            </div>
         </div>

         <div className="container">
            <div className='card-container'>
               {myRecipes.map(element => (
                  < MyRecipesComponent
                     label={element.recipe.label}
                     image={element.recipe.image}
                     calories={element.recipe.calories}
                     ingredients={element.recipe.ingredientLines}
                     preparation={element.recipe.url}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
